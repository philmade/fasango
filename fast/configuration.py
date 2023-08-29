from pydantic_settings import BaseSettings
from loguru import logger
import os
from dotenv import load_dotenv


class Settings(BaseSettings):
    SECRET_KEY: str = "FOOOO"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int
    DEBUG: bool = True
    SUPABASE_SERVICE_ROLE: str
    SUPABASE_HOST: str
    SUPABASE_API: str
    SUPABASE_URL: str
    POSTGRES_HOST: str
    DATABASE_NAME: str
    PORT: int
    USER: str
    PASSWORD: str
    OPENAI_API_KEY: str
    DJANGO_SETTINGS_MODULE: str
    CHROME_DRIVER_PATH: str
    HOST: str
    MAIL_USERNAME: str
    MAIL_PASSWORD: str
    DJANGO_SECRET: str
    # STRIPE
    STRIPE_PUBLIC_KEY: str
    STRIPE_SECRET_KEY: str
    WEBHOOK_SECRET: str
    STRIPE_PRODUCT_1: str
    STRIPE_PRODUCT_2: str


if _debug := os.getenv("DEBUG"):
    logger.info("Debug settings. Loading .testenv")
    load_dotenv(".test.env", verbose=True, override=True)
    settings = Settings(_env_file=".test.env")
    logger.info("Settings are: ", settings)
else:
    logger.info("Live settings. Loading .env")
    load_dotenv(".env", verbose=True, override=True)
    settings = Settings(_env_file=".env")
