from fastapi import Depends, APIRouter, Request, HTTPException, Form
from fastapi.responses import RedirectResponse
from django.contrib.auth import get_user_model
from core_user.models import Profile
from . import (
    striper,
)  # assuming striper is a module handling Stripe interactions
from .configuration import (
    settings,
)  # assuming config is a module containing application settings
from .dependencies import _current_user, _logged_in
import stripe
from loguru import logger
from .extensions import templates
from asgiref.sync import sync_to_async

User = get_user_model()
router = APIRouter()


def get_current_active_user(request: Request):
    # Assuming you have a way to authenticate user and set user in request state
    if request.state.user:
        return request.state.user
    raise HTTPException(status_code=400, detail="Inactive user")


# ... continue the rest of the router definition with updated dependencies and models

router = APIRouter()


@router.get("/subscribe/")
async def subscribe(
    request: Request,
):
    # Variables to send project codes to front end

    user = request.state.user
    individual_product = settings.INDIVIDUAL_SUBSCRIPTION_ID
    business_product = settings.BUSINESS_SUBSCRIPTION_ID
    try:
        user = await sync_to_async(lambda: User.objects.get(id=user.id))()
        profile = await sync_to_async(lambda: user.profile)()
    except:
        user = None
        profile = None
    # profile.subscription_type = "individual"
    # USER IS A CUSTOMER
    if profile and profile.stripe_customer_id:
        logger.info(f"USER IS STRIPE CUSTOMER {user.profile.stripe_customer_id}")
        try:
            subscriptions = striper.return_subscriptions(profile.stripe_customer_id)

            # USER HAS SUBSCRIPTIONS
            if subscriptions.data:
                # TODO: Handle multiple subscriptions
                plan = subscriptions.data[0].plan
                if plan.id == individual_product:
                    logger.info(
                        f"STRIPE SUBSCRIBER {user.profile.stripe_customer_id} HAS INDIVIDUAL SUBSCRIPTION"
                    )
                    if profile.subscription_type != "individual":
                        profile.subscription_type = "individual"
                        await user.profile.asave()
                elif plan.id == "premium_product":  # Todo - add more products
                    pass

            # USER DOES NOT HAVE SUBSRIPTIONS
            if not subscriptions.data:
                user.profile.subscription_type = None  # todo should this be enum, how can we get type annotations here if so?

                # WHY NO SUBSCRIPTIONS? FIRST, LOOK UP CUSTOMER ON STRIPE
                customer = striper.get_stripe_customer(user.profile.stripe_customer_id)
                if customer:
                    if customer.deleted:
                        logger.info(
                            f"STRIPE CUSTOMER {customer} WAS DELETED ON STRIPE.COM"
                        )
                        profile.stripe_customer_id = None
                        await profile.asave()
                    else:
                        logger.info(
                            f"STRIPE CUSTOMER {customer} EXISTS BUT HAS NO SUBSCRIPTION"
                        )
                elif not customer:
                    logger.error(
                        f"STRIPE CUSTOMER {user.profile.stripe_customer_id} DOES NOT EXIST"
                    )
                    profile.stripe_customer_id = None
                    await profile.asave()
        except stripe.error.InvalidRequestError as e:
            logger.error(f"STRIPE ERROR: {e}")

    # USER IS NOT A CUSTOMER
    if profile and not profile.stripe_customer_id:
        logger.info(f"{user.email} IS NOT A SUBSCRIBER")

    if user:
        await user.asave()

    return templates.TemplateResponse(
        "subscribe.html",
        {
            "request": request,
            "individual_product": individual_product,
            "business_product": business_product,
            "profile": profile,
            "user": user,
        },
    )


@router.get("/success")
async def success(
    request: Request,
    user: User = Depends(_logged_in),
):
    user = await User.objects.aget(email=request.state.user.email)
    profile = await Profile.objects.aget(user=user)
    user_stripe_customer_id = profile.stripe_customer_id
    try:
        subscriptions = striper.return_subscriptions(user_stripe_customer_id)
        number = striper.how_many_subscriptions(user_stripe_customer_id)
        logger.info(f"Number of subscriptions: {number}")
        if subscriptions and subscriptions.data:
            plan = subscriptions.data[0].plan
            logger.info(plan.id)
        if plan.id == settings.INDIVIDUAL_SUBSCRIPTION_ID:
            logger.info("Individual subscription found on success page")
        elif plan.id == "x":  # TODO - add more products
            logger.info("Premium subscription found")
        if not subscriptions and not subscriptions.data:
            logger.info("No subscriptions found")
    except stripe.error.InvalidRequestError as e:
        logger.error(f"STRIPE ERROR: {e}")
        subscriptions = None

    return templates.TemplateResponse(
        "success.html",
        {
            "request": request,
            "subscriptions": subscriptions,
            "user": user,
            "profile": profile,
        },
    )


@router.get("/cancelled")
async def canceled(request: Request, user: User = Depends(_logged_in)):
    # TODO this need more work
    return templates.TemplateResponse(
        "success.html", {"request": request, "user": user}
    )


@router.post("/create-checkout-session")
async def stripecheckoutsession(
    request: Request,
    priceId: str = Form(),
    user: User = Depends(_logged_in),
):
    user = await User.objects.aget(email=request.state.user.email)
    profile = await Profile.objects.aget(user=user)
    user_stripe_customer_id = profile.stripe_customer_id

    # CASE: NEW CUSTOMER
    if user_stripe_customer_id is None:
        logger.info(f"Brand new customer")
        session = stripe.checkout.Session.create(
            success_url=settings.HOST + "/success",
            cancel_url=settings.HOST + "/cancelled",
            mode="subscription",
            customer_email=user.email,
            line_items=[
                {
                    "price": priceId,
                    "quantity": 1,
                }
            ],
        )
        logger.info(f"HOST: {settings.HOST}")
        logger.info(f"Success URL: {settings.HOST + '/success'}")
        logger.info(f"Cancel URL: {settings.HOST + '/cancelled'}")
    # CASE: EXISTING CUSTOMER
    elif user_stripe_customer_id is not None:
        logger.info(f"Existing customer with ID: {user_stripe_customer_id}")
        session = stripe.checkout.Session.create(
            success_url=settings.HOST + "/success",
            cancel_url=settings.HOST + "/cancelled",
            mode="subscription",
            customer=profile.stripe_customer_id,
            line_items=[
                {
                    "price": priceId,
                    "quantity": 1,
                }
            ],
        )

    return RedirectResponse(session.url, status_code=303)


@router.get("/create-portal-session")
@router.post("/create-portal-session")
async def stripeportalsession(
    request: Request,
    user: User = Depends(_logged_in),
):
    user = await User.objects.aget(email=request.state.user.email)
    profile = await Profile.objects.aget(user=user)
    user_stripe_customer_id = profile.stripe_customer_id
    if user_stripe_customer_id == None or user_stripe_customer_id == "":
        return RedirectResponse(url="/subscribe/", status_code=303)
    logger.info(f"User has customer ID of {user_stripe_customer_id}")
    try:
        # Grab a session using the customer_id
        session = stripe.billing_portal.Session.create(
            customer=user_stripe_customer_id,
            return_url=settings.HOST + "/success",
        )
    except stripe.error.InvalidRequestError as e:
        # IN SUCH A CASE WE ASSUME NO SUBSCRIPTIONS EXIST
        # TODO - Handle this error, its an edgecase. A user had a stripe_id but stripe no longer recognises it.
        logger.error(e.user_message)
        return RedirectResponse(url="/subscribe/", status_code=303)
    return RedirectResponse(session.url, status_code=303)


@router.post("/webhook")
async def webhook(request: Request):
    # DECODE THE WEBHOOK TO EVENT

    request_data = await request.body()
    sig_header = request.headers.get("stripe-signature")
    # DECODE THE EVENT
    try:
        event = stripe.Webhook.construct_event(
            payload=request_data, sig_header=sig_header, secret=settings.WEBHOOK_SECRET
        )
        data = event["data"]
    except Exception as e:
        logger.info(f"Webhook error: {e}")
        return e
    event_type = event["type"]
    data_object = data["object"]
    # PROCESS THE EVENT
    if event_type == "checkout.session.completed":
        logger.info(data_object["status"])
        # TODO: this function does nothing right now
        # striper.handle_checkout_completed(data_object)
    elif event_type == "invoice.paid":
        logger.info(f"You need to handle invoice.paid event")
        logger.info(data_object["status"])
    elif event_type == "invoice.failed":
        logger.info(f"You need to handle invoice.failed event")
        logger.info(data_object["status"])
    elif event_type == "customer.subscription.aborted":
        logger.info("Customer subscription aborted")
    elif event_type == "customer.subscription.created":
        await striper.handle_subscription_created(data_object)
    elif event_type == "customer.subscription.updated":
        await striper.handle_subscription_created(data_object)
    elif event_type == "subscription_schedule.created":
        logger.info("Subscription schedule created")
    elif event_type == "subscription_schedule.expiring":
        logger.info("Customer subscription expiring")
    elif event_type == "subscription_schedule.released":
        logger.info("Customer subscription released")
    elif event_type == "subscription_schedule.updated":
        logger.info("Customer subscription updated")
    elif event_type == "customer.created":
        await striper.handle_customer_created(data_object)
    else:
        print("Unhandled event type {}".format(event_type))

    return {"status": "success"}
