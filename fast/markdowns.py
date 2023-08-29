from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse

from .extensions import templates
from markdown import markdown


router = APIRouter()


@router.get("/terms-of-service", response_class=HTMLResponse)
async def terms_of_service(request: Request):
    with open("fast/markdownfiles/terms_of_service.md", "r") as f:
        content = markdown(f.read())
    return templates.TemplateResponse(
        "markdown.html", {"request": request, "content": content}
    )


@router.get("/privacy", response_class=HTMLResponse)
async def privacy(request: Request):
    with open("fast/markdownfiles/privacy.md", "r") as f:
        content = markdown(f.read())
    return templates.TemplateResponse(
        "markdown.html", {"request": request, "content": content}
    )
