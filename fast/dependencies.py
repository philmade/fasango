from fastapi import HTTPException, status, Request
from fastapi.security import OAuth2PasswordBearer
from fastapi import Depends, HTTPException
from django.contrib.auth.models import Group
from jose import JWTError, jwt
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password
from datetime import datetime, timedelta
from .schemas import TokenData, UserSettings
from core_user.models import Profile
from . import exceptions
from loguru import logger
import hmac
import hashlib
from django.db.models import Q
from .configuration import settings

# import sync_to_async
from asgiref.sync import sync_to_async

# To get a string like this run:
# openssl rand -hex 32
User = get_user_model()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


async def authenticate_user(username_or_email: str, password: str):
    try:
        user = await sync_to_async(User.objects.get)(
            Q(username=username_or_email) | Q(email=username_or_email)
        )
    except User.DoesNotExist:
        return False
    if not user:
        return False
    if not check_password(password, user.password):
        return False
    return user


def create_access_token(*, data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(
        to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM
    )
    return encoded_jwt


def decode_token(request: Request) -> str:
    token = request.cookies.get("access_token")
    if not token:
        return "None"
    token = token.split(" ")[1]  # get token after 'Bearer '
    return token


async def _logged_in(
    request: Request,
) -> UserSettings | exceptions.LoginRequiredException:
    try:
        token = decode_token(request)
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM]
        )
        username: str = payload.get("sub")
        if username is None:
            raise exceptions.LoginRequiredException(
                redirect_url="/login",
                original_url=request.url.path,
            )
    except (JWTError, exceptions.LoginRequiredException):
        raise exceptions.LoginRequiredException(
            redirect_url="/login",
            original_url=request.url.path,
        )
    user = await User.objects.aget(username=username)
    if user is None:
        raise exceptions.LoginRequiredException(
            redirect_url="/login",
            original_url=request.url.path,
        )
    profile = await Profile.objects.aget(user=user)
    return UserSettings(
        username=user.username,
        email=user.email,
        is_superuser=user.is_superuser,
        profile=profile,
        is_anonymous=False,
    )


async def _current_user(request: Request) -> UserSettings | str:
    try:
        return await _logged_in(request)
    # We catch the exception here, because we want to return a UserSettings object.
    # We use this to return either a logged in user, or an anonymous user to the frontend.
    except exceptions.LoginRequiredException:
        return UserSettings(is_anonymous=True)


async def _current_django_user(request: Request) -> User | HTTPException:
    token = decode_token(request)
    credentials_exception = exceptions.LoginRequiredException(
        redirect_url="/login",
        original_url=request.url.path,
    )
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM]
        )
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception
    user = await User.objects.aget(username=token_data.username)
    logger.info(f"User {user} authenticated")
    if user is None:
        raise credentials_exception
    return user


async def has_case_permission(
    user: User = Depends(_current_django_user), request: Request = None
):
    group = await sync_to_async(user.groups.filter(name="Create Case").exists)()
    logger.info(f"User {user} has permission to create case: {group}")
    if not group:
        raise exceptions.IncorrectPermissions(
            detail="Creating Cases currently restricted whilst we are in alpha. You need an invite, or join the waitlist at /register.",
        )
    return True


def create_a_reproducable_hash(data: dict, secret: str) -> str:
    # Here we're using the user's username as the unique identifier,
    # but this could be any data that's unique to the user
    message = data.get("username").encode()
    return hmac.new(secret.encode(), msg=message, digestmod=hashlib.sha256).hexdigest()


async def get_csrf_token(request: Request) -> str:
    token = decode_token(request)
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM]
        )
        csrf_token: str = create_a_reproducable_hash(payload, settings.SECRET_KEY)
        return csrf_token
    except:
        raise credentials_exception
