import os
from fastapi.templating import Jinja2Templates
from fastapi import Path
import arrow
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from .configuration import settings
import stripe

# TEMPLATES
templates_directory = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "..", "theme", "templates")
)
templates = Jinja2Templates(directory=templates_directory)
mail_conf = ConnectionConfig(
    MAIL_USERNAME="foo",
    MAIL_PASSWORD="foofoo",
    MAIL_FROM="foo@foo.com",
    MAIL_FROM_NAME="Foo from Foo Project",
    MAIL_PORT=465,
    MAIL_SERVER="smtp-relay.gmail.com",
    MAIL_STARTTLS=False,
    MAIL_SSL_TLS=True,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True,
    TEMPLATE_FOLDER="./theme/templates",
)
fast_mail = FastMail(mail_conf)

# Stripe
# stripe.api_key = settings.STRIPE_SECRET_KEY
stripe.api_key = "foo"


# TEMPLATE EXTENSIONS
def time_since_publication(date):
    try:
        # Convert the date to an Arrow object
        arrow_date = arrow.get(date)
        # Return the time since publication as a string
        return arrow_date.humanize()
    except:
        return "Unknown"


def remove_http(url):
    if url.startswith("http://www."):
        return url.replace("http://www.", "", 1)
    elif url.startswith("http://"):
        return url.replace("http://", "", 1)
    elif url.startswith("https://www."):
        return url.replace("https://www.", "", 1)
    elif url.startswith("https://"):
        return url.replace("https://", "", 1)
    else:
        return url


templates.env.filters["time_since"] = time_since_publication
templates.env.filters["remove_http"] = remove_http
