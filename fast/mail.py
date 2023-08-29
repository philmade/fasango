import os
from . import dsetup
from fastapi import Depends, APIRouter, HTTPException, Request
from fastapi.responses import HTMLResponse
from django.core.exceptions import ObjectDoesNotExist

from .dependencies import (
    _current_django_user,
)
from django.contrib.auth import get_user_model
from fastapi import BackgroundTasks
from fastapi_mail import MessageSchema, MessageType
from core_user.models import Invitation
from asgiref.sync import sync_to_async
from django.contrib.auth.models import Group
from loguru import logger
from .extensions import fast_mail, templates
from markdown import markdown

router = APIRouter()
User = get_user_model()
host = os.environ.get("HOST")


@router.post("/send-invite", response_class=HTMLResponse)
async def send_invite(
    request: Request,
    background_tasks: BackgroundTasks,
    current_user: User = Depends(_current_django_user),
):
    form = await request.form()
    invitee_email = form.get("invitee_email")
    try:
        if current_user.is_superuser:
            invitation, created = await sync_to_async(Invitation.objects.get_or_create)(
                _from=current_user.email, _for=invitee_email, used=False
            )
        else:
            invitation = await Invitation.objects.aget(_from=current_user.email)
    except ObjectDoesNotExist:
        raise HTTPException(
            status_code=400, detail="You do not have permission to send invitations"
        )
    message = MessageSchema(
        subtype="html",
        subject="You've been invited to join case.science!",
        recipients=[invitee_email],  # List of recipients, as many as you can pass
        body=f"""
        Hello, \nYou've been invited to join case.science! 
        \nThis invite allows you to create a case on case.science.
        \nPlease click the link to register: <a href="http://{host}/register/{invitation.uuid}">http://{host}/register/{invitation.uuid}</a>
        \nIf you're already registered, log in and click the link and you'll get 'Create a Case' permissions
        \n\n
        Thanks,
        \n\n
        Case.science">
        """,
    )

    background_tasks.add_task(fast_mail.send_message, message)

    return "Invitation sent to " + invitee_email


@router.post("/upgrade-user")
async def upgrade_user(
    request: Request,
    background_tasks: BackgroundTasks,
    current_user: User = Depends(_current_django_user),
):
    if not current_user.is_superuser:
        raise HTTPException(
            status_code=400, detail="You do not have permission to upgrade users"
        )
    form = await request.form()
    user_email = form.get("user_email")
    logger.info(user_email)
    try:
        user = await sync_to_async(User.objects.get)(email=user_email)
        group = await sync_to_async(Group.objects.get)(name="Create Case")
        add_to_group = await sync_to_async(user.groups.add)(group)

    except ObjectDoesNotExist:
        raise HTTPException(status_code=400, detail="User does not exist")

    message = MessageSchema(
        subtype="html",
        subject="You've been upgraded to case creator!",
        recipients=[user_email],  # List of recipients, as many as you can pass
        body=f"""
        Hello, \nYou've been upgraded to case creator! 
        \nThis invite allows you to create a case on case.science.
        \nPlease log out and log back in, and you'll see your new permissions here: <a href="http://{host}/account">http://{host}/account</a>
        \nThen you should be able to, log in and click the link and you'll get 'Create a Case' permissions
        \n\n
        Thanks - this email address is open so you can reply here with any problems.
        \n\n
        Case.science">
        """,
    )

    background_tasks.add_task(fast_mail.send_message, message)

    return "Upgrade sent to " + user_email


@router.post("/send-email")
async def send_email_endpoint(
    request: Request,
    background_tasks: BackgroundTasks,
    current_user: User = Depends(_current_django_user),
):
    if not current_user.is_superuser:
        raise HTTPException(status_code=400, detail="Not a superuser")
    form = await request.form()
    subject = form.get("subject")
    users = await sync_to_async(User.objects.all)()
    markdown_file = form.get("selectedMarkdownFile")
    with open(f"fast/markdownfiles/{markdown_file}", "r") as f:
        body_markdown = f.read()
    body_html = markdown(body_markdown)

    async for user in users:
        body = {"body": body_html, "username": user.username}

        message = MessageSchema(
            subject=subject,
            recipients=[user.email],
            template_body=body,
            subtype=MessageType.html,
        )
        background_tasks.add_task(
            fast_mail.send_message, message, template_name="email_template.html"
        )
    return {"message": "email has been sent"}


@router.get("/send-email")
async def create_email_endpoint(
    request: Request, current_user: User = Depends(_current_django_user)
):
    if not current_user.is_superuser:
        raise HTTPException(status_code=400, detail="Not a superuser")

    markdown_files = [f for f in os.listdir("fast/markdownfiles") if f.endswith(".md")]

    return templates.TemplateResponse(
        "email_editor.html", {"request": request, "markdown_files": markdown_files}
    )


@router.get("/preview-email")
async def preview_email_endpoint(
    request: Request, file: str, current_user: User = Depends(_current_django_user)
):
    if not current_user.is_superuser:
        raise HTTPException(status_code=400, detail="Not a superuser")
    username = "John Doe"
    with open(f"fast/markdownfiles/{file}", "r") as f:
        body_markdown = f.read()
    body_html = markdown(body_markdown)
    return templates.TemplateResponse(
        "email_template.html",
        {"request": request, "username": username, "body": body_html},
    )
