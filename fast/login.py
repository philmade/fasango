from datetime import timedelta
from pydantic import EmailStr, ValidationError
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str

# import force_text from django
from fastapi import Depends, Request, status, APIRouter, HTTPException
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.concurrency import run_in_threadpool
from .dependencies import (
    authenticate_user,
    create_access_token,
    _current_django_user,
)
from .schemas import Token
from .extensions import templates
from .configuration import settings
from fastapi_mail import MessageSchema
from . import exceptions
from core_user.models import Invitation
from core_user.models import Profile
import os
import django
import re
from typing import Optional
from asgiref.sync import sync_to_async
from loguru import logger

# Setup things we need
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "django_backend.settings")
django.setup()
token_generator = PasswordResetTokenGenerator()
host = os.environ.get("HOST")
router = APIRouter()
User = get_user_model()


class OAuth2PasswordRequestFormWithRemember(OAuth2PasswordRequestForm):
    remember: Optional[bool] = False


@router.post("/token", response_model=Token)
async def login_for_access_token(
    form_data: OAuth2PasswordRequestFormWithRemember = Depends(),
):
    user = await authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    if form_data.remember:
        access_token_expires = timedelta(days=7)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    response = RedirectResponse(url="/")
    response.set_cookie(
        key="access_token", value=f"Bearer {access_token}", httponly=True
    )
    # add a redirect to the response
    return response


@router.post("/login")
@router.get("/login", response_class=HTMLResponse)
def login(request: Request):
    return templates.TemplateResponse(
        "login.html", {"request": request, "show_navbar": False}
    )


@router.get("/logout")
async def logout(request: Request):
    response = RedirectResponse(url="/")
    response.delete_cookie(key="access_token")
    return response


@router.get("/register/{invitation_uuid}", response_class=HTMLResponse)
def register(request: Request, invitation_uuid: Optional[str] = None):
    if invitation_uuid:
        try:
            invitation = Invitation.objects.get(uuid=invitation_uuid)
        except:
            invitation = None
    return templates.TemplateResponse(
        "register.html",
        {"request": request, "invitation": invitation, "show_navbar": False},
    )


@router.get("/register", response_class=HTMLResponse)
def register_only(request: Request):
    return templates.TemplateResponse(
        "register.html", {"request": request, "invitation": None, "show_navbar": False}
    )


@router.post("/register", response_class=HTMLResponse)
async def register_post(request: Request):
    User = get_user_model()
    form = await request.form()
    username = form.get("username")
    password = form.get("password")
    password_confirm = form.get("password_confirm")
    if password != password_confirm:
        raise HTTPException(
            status_code=400, detail="Passwords do not match. Please try again."
        )
    email = form.get("email")
    invitation_uuid = form.get("invitation_uuid")
    # if username has spaces or invallid characters, raise error
    # write regex pattern to check for spaces and invalid characters
    invalid_characters = r"[^a-zA-Z0-9_]"
    if re.search(invalid_characters, username):
        raise HTTPException(
            status_code=400,
            detail="Username contains invalid characters. Only letters and numbers are allowed",
        )

    # LOOK UP THE USER
    try:
        existing_user = await User.objects.aget(username=username)
        existing_email = await User.objects.aget(email=email)
    except:
        existing_user = None
        existing_email = None
    if existing_user or existing_email:
        raise HTTPException(status_code=400, detail="Username or email already exists")

    # CREATE THE USER
    user = User(username=username, password=password, email=email)
    user.set_password(password)

    # CHECK FOR THE INVITATION
    if invitation_uuid:  # invitation
        # Get the invitation
        try:
            invitation = await Invitation.objects.aget(uuid=invitation_uuid)
        except:
            invitation = None
        # See if the invitation is still valid
        if invitation:
            if invitation.used is True:
                await user.asave()
                raise exceptions.IncorrectPermissions(detail="Invitation already used")
            if invitation.used is False:
                await user.asave()
                # If the invitation exists, set the permissions for the user and mark the invitation as used
                create_case_group = await Group.objects.aget(name="Create Case")
                await sync_to_async(user.groups.add)(create_case_group)
                invitation.used = True
                await invitation.asave()

    # IF THE USER USED A STANDARD REGISTRATION LINK, CHECK THE DB FOR AN UNUSED INVITATION FOR THAT USER
    try:
        invitation = await Invitation.objects.aget(_for=user.email, used=False)
        if invitation:
            await user.asave()
            # If the invitation exists, set the permissions for the user and mark the invitation as used
            create_case_group = await Group.objects.aget(name="Create Case")
            await sync_to_async(user.groups.add)(create_case_group)
            invitation.used = True
            await invitation.asave()
    except:
        invitation = None

    # ADD THE USER TO CASE CREATE!
    create_case_group = await Group.objects.aget(name="Create Case")
    await sync_to_async(user.groups.add)(create_case_group)

    # SAVE THE USER
    await user.asave()
    return RedirectResponse("/login")


@router.get("/password-reset-request", response_class=HTMLResponse)
def password_reset_request_get(request: Request):
    return templates.TemplateResponse(
        "password_reset_request.html", {"request": request}
    )


@router.post("/password-reset-request", response_class=HTMLResponse)
async def password_reset_request_post(request: Request):
    form = await request.form()
    email = form.get("email")
    message_to_return_no_matter_what = HTMLResponse(
        '<p class="text-gray-500">If a user with that email exists, a password reset link has been sent. Please check your email</p>'
    )
    try:
        user = await User.objects.aget(email=email)
        logger.info(f"User {user.email} sent password reset request")
    except User.DoesNotExist:
        logger.info(f"User {email} does not exist")
        user = None
    if user:
        token = token_generator.make_token(user)
        uuid = urlsafe_base64_encode(force_bytes(user.pk))
        reset_url = f"https://{host}/password-reset/{uuid}/{token}"
        message = MessageSchema(
            subtype="html",
            subject="Password reset request - case.science",
            recipients=[email],
            body=f"""Password reset request\n,
            Here is the link to reset your password: \n
            {reset_url},
            \n\n
            Thanks,
            \n\n
            case.science""",
        )

        await fast_mail.send_message(message)
    return message_to_return_no_matter_what


@router.get("/password-reset/{uuid}/{token}", response_class=HTMLResponse)
async def password_reset(request: Request, uuid: str, token: str):
    user_pk = force_str(urlsafe_base64_decode(uuid))
    user = await User.objects.aget(pk=user_pk)
    if not token_generator.check_token(user, token):
        raise HTTPException(status_code=400, detail="Invalid request")
    else:
        return templates.TemplateResponse(
            "password_reset.html", {"request": request, "uuid": uuid, "token": token}
        )


@router.post("/password-reset", response_class=HTMLResponse)
async def password_reset_validate(request: Request):
    form = await request.form()
    uuid = form.get("uuid")
    token = form.get("token")
    new_password = form.get("new_password")
    new_password_confirm = form.get("new_password_confirm")
    if not uuid or not token:
        raise HTTPException(status_code=400, detail="Invalid request")
    user_pk = force_str(urlsafe_base64_decode(uuid))
    try:
        user = await User.objects.aget(pk=user_pk)
    except User.DoesNotExist:
        raise HTTPException(status_code=400, detail="Invalid request")
    if not new_password or not new_password_confirm:
        raise HTTPException(status_code=400, detail="Invalid request")
    if new_password != new_password_confirm:
        raise HTTPException(status_code=400, detail="Passwords do not match")
    if token_generator.check_token(user, token):
        user.set_password(new_password)
        await user.asave()
        return HTMLResponse('<p class="text-green-500">Password reset!</p>')
    else:
        raise HTTPException(status_code=400, detail="Invalid request")


@router.post("/usersettings/check-username")
async def validate_username(
    request: Request,
):
    User = get_user_model()
    form = await request.form()
    username = form.get("username")
    invalid_characters = r"[^a-zA-Z0-9_]"
    if re.search(invalid_characters, username):
        return HTMLResponse(
            '<label id="username-label" class="block text-purple-600 text-sm font-bold mb-2" for="username"> Invalid character. Only letters and underscores.</label>'
        )
    if username:
        try:
            existing_user = await User.objects.aget(username=username)
        except:
            existing_user = None
        if existing_user:
            return HTMLResponse(
                '<label id="username-label" class="block text-purple-600 text-sm font-bold mb-2" for="username"> Username already in use</label>'
            )
        else:
            return HTMLResponse(
                '<label id="username-label" class="block text-green-600 text-sm font-bold mb-2" for="username"> Perfect!</label>'
            )


@router.post("/usersettings/check-password")
async def validate_userpassword(
    request: Request,
):
    form = await request.form()
    password = form.get("password")
    password_confirm = form.get("password_confirm")
    if password and password_confirm:
        if password == password_confirm:
            return HTMLResponse(
                '<label id="password-warning" class="text-green-500">Passwords match!</div>'
            )
        else:
            return HTMLResponse(
                '<label id="password-warning" class="text-purple-600">Passwords do not match!</div>'
            )


@router.post("/usersettings/check-email")
async def validate_useremail(
    request: Request,
):
    form = await request.form()
    email = form.get("email")
    if email:
        try:
            EmailStr(email).validate(email)
            return HTMLResponse(
                '<label id="email-label" class="block text-green-600 text-sm font-bold mb-2" for="email">Ok!</label>'
            )
        except ValidationError as e:
            return HTMLResponse(
                f'<label id="email-label" class="block text-purple-600 text-sm font-bold mb-2" for="email">{e.msg_template}!</label>'
            )


# ACCOUNT
@router.get("/account", response_class=HTMLResponse)
async def account(request: Request, current_user: User = Depends(_current_django_user)):
    user_permissions = await run_in_threadpool(
        lambda: [group.name for group in current_user.groups.all()]
    )
    invitation_list = []
    try:
        async for invitation in Invitation.objects.filter(
            _from=current_user.email, used=False
        ):
            invitation_list.append(invitation)
    except Exception as e:
        logger.info(f"Exception: {e}")
        invitation = None
    profile = await Profile.objects.aget(user=current_user)
    invitation = invitation_list[0] if invitation_list else None
    logger.info(invitation_list)

    return templates.TemplateResponse(
        "account.html",
        {
            "request": request,
            "user": current_user,
            "user_permissions": user_permissions,
            "invitation": invitation,
            "profile": profile,
        },
    )
