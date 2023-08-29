# login things with FastAPI login
from fastapi import HTTPException
from urllib.parse import quote


class LoginRequiredException(HTTPException):
    def __init__(self, redirect_url: str = "/login", original_url: str = None):
        super().__init__(
            status_code=302,
            detail="Login required",
        )
        self.redirect_url = f"{redirect_url}?next={quote(original_url)}"


class SubscriptionUserException(HTTPException):
    def __init__(self, redirect_url: str):
        super().__init__(
            status_code=302,
            detail="Eleveated subscription required, redirecting to subscription page",
        )
        self.redirect_url = redirect_url


class NotAuthorizedException(HTTPException):
    def __init__(self, redirect_url: str):
        super().__init__(
            status_code=302,
            detail="You are not authorized to view this page",
        )


class InvalidTokenException(HTTPException):
    def __init__(self):
        super().__init__(
            status_code=400,
            detail="Your token is invalid or has expired",
        )


class IncorrectPermissions(HTTPException):
    def __init__(
        self,
        detail: str = "We are in Alpha and creating cases is currently restricted",
    ):
        super().__init__(status_code=403, detail=detail)
