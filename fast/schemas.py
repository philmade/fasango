from pydantic import BaseModel
from typing import Optional


# WEBSOCKET EVENTS
class WebsocketEvent(BaseModel):
    event: str
    data: str | list = None


# CONSTRUCTED WEBSOCKET EVENTS
newMessage = WebsocketEvent(event="newMessage")
messageComplete = WebsocketEvent(event="messageComplete")
messageChunk = WebsocketEvent(event="newMessageChunk")


# LOGIN TOKENS
class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[str] = None


# USER SETTINGS
class UserSettings(BaseModel):
    username: str = None
    email: str = None
    is_active: bool = False
    is_superuser: bool = False
    profile: object = None
    is_anonymous: bool = True
