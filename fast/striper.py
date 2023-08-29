# import get_user_model from django
from django.contrib.auth import get_user_model
from core_user.models import Profile
from fast.extensions import stripe
from fast.dependencies import _logged_in
from fast.configuration import settings as config
from loguru import logger
from fastapi import Depends
from stripe import Customer
from typing import Union

User = get_user_model()


def get_stripe_customer(customer_id: str) -> Union[Customer, False]:
    customer = stripe.Customer.retrieve(customer_id)
    if customer is None:
        return False
    else:
        return customer


def return_user_from_customer_id(customer_id: str) -> User:
    user = User.objects.get(profile__stripe_customer_id=customer_id)
    return user


def check_subscription(user: User = Depends(_logged_in)):
    if user.profile.stripe_customer_id is None:
        return False
    if user.is_superuser:
        return True
    try:
        subscription = stripe.Subscription.list(
            customer=user.profile.stripe_customer_id
        )
        if subscription.data:
            return True
        else:
            return False
    except stripe.error.InvalidRequestError:
        return False


def return_subscriptions(stripe_customer_id: str) -> list:
    subscriptions = stripe.Subscription.list(
        customer=stripe_customer_id, status="active"
    )
    return subscriptions


def how_many_subscriptions(stripe_customer_id: str) -> int:
    subscriptions = stripe.Subscription.list(
        customer=stripe_customer_id, status="active"
    )
    return len(subscriptions.data)


async def handle_subscription_created(data_object: dict):
    logger.info("Handling subscription created")
    logger.info(f"Data object: {data_object['customer']}")
    try:
        profile = await Profile.objects.aget(stripe_customer_id=data_object["customer"])
        user = await User.objects.aget(
            profile__stripe_customer_id=data_object["customer"]
        )
    except Profile.DoesNotExist:
        logger.info("No profile found")
        return
    stripe_customer_id = data_object["customer"]
    subscriptions = return_subscriptions(stripe_customer_id)
    subscription_type = data_object["items"]["data"][0]["price"]["id"]
    if subscription_type == config.INDIVIDUAL_SUBSCRIPTION_ID:
        # Cancel previous plans if they exist
        for subscription in subscriptions.data:
            if subscription["plan"]["id"] != config.INDIVIDUAL_SUBSCRIPTION_ID:
                stripe.Subscription.delete(subscription["id"])
                logger.info("Removed premium subscription")
        profile.subscription_type = "individual"  # what do we put here? An enum?
        await profile.asave()
        logger.info(f"{user.username} is has individual subscription")


async def handle_customer_created(data_object: dict):
    try:
        logger.info(f"Looking up user with email {data_object['email']}")
        user = await User.objects.aget(email=data_object["email"])
        profile = await Profile.objects.aget(user=user)
        customer_id = data_object["id"]
        profile.stripe_customer_id = customer_id
        await profile.asave()
    except User.DoesNotExist:
        logger.info("No user found")
        return
    await user.asave()
    await profile.asave()
    logger.info(f"Created customer {customer_id} for {user.username}")


def handle_checkout_completed(data_object: dict):
    # A user has just completed a checkout session, what happens?
    # We handle subscription logic elsewhere
    # Maybe we send them an email?
    # How do we handle that?

    pass
