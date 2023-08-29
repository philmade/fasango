import asyncio
import os
from . import dsetup, login, mail, subscribe, markdowns
import arel
from core_user.models import Profile

from django.core.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from fastapi import (
    BackgroundTasks,
    Depends,
    FastAPI,
    Request,
    WebSocket,
)
from fastapi.responses import HTMLResponse, RedirectResponse, Response
from fastapi.staticfiles import StaticFiles
from loguru import logger
from starlette.middleware.wsgi import WSGIMiddleware

from django_backend.wsgi import application as django_application

from .dependencies import (
    _current_user,
)
from .exceptions import LoginRequiredException, IncorrectPermissions
from .extensions import templates


User = get_user_model()

# Mount the static directory
static_directory = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "..", "theme", "static")
)

# Create the FastAPI application
app = FastAPI()
app.mount("/static", StaticFiles(directory=static_directory), name="static")
app.mount("/d", WSGIMiddleware(django_application), name="django")
app.mount(
    "/djstatic",
    StaticFiles(directory="theme/static/django_static"),
    name="django_static",
)
# Debug
if _debug := os.getenv("DEBUG"):
    hot_reload = arel.HotReload(paths=[arel.Path(".")])
    app.add_websocket_route("/hot-reload", route=hot_reload, name="hot-reload")
    app.add_event_handler("startup", hot_reload.startup)
    app.add_event_handler("shutdown", hot_reload.shutdown)
    templates.env.globals["DEBUG"] = _debug
    templates.env.globals["hot_reload"] = hot_reload
    logger.info("ADDED HOT RELOAD")
    os.environ["HOST"] = "localhost:8000"
    logger.info("host is" + os.environ["HOST"])
else:
    os.environ["HOST"] = "case.science"

# Exception handlers
app.add_exception_handler(
    LoginRequiredException, lambda request, exc: RedirectResponse("/login")
)


async def incorrect_permissions_handler(request: Request, exc: IncorrectPermissions):
    return Response(
        content=exc.detail,
        status_code=exc.status_code,
    )


app.add_exception_handler(
    IncorrectPermissions,
    incorrect_permissions_handler,
)


# Middleware
@app.middleware("http")
async def _current_user_middleware(request: Request, call_next):
    request.state.user = await _current_user(request)
    response = await call_next(request)
    return response


event_lock = asyncio.Lock()

# Routers

app.include_router(login.router)
app.include_router(mail.router)
app.include_router(subscribe.router)
app.include_router(markdowns.router)


@app.post("/")
@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse("home.html", {"request": request})


@app.post("/u/{username}")
@app.get("/u/{username}")
def profile(request: Request, username: str):
    user = User.objects.get(username=username)
    return templates.TemplateResponse("home.html", {"request": request, "user": user})


@app.post("/u/{username}/update")
async def update_profile(request: Request, username: str):
    form = await request.form()
    user = await User.objects.aget(username=username)
    profile = await Profile.objects.aget(user=user)
    description = form.get("description")
    logger.info(f"description is {description}")
    profile.description = description
    await profile.asave()
    return RedirectResponse("/u/" + username)
