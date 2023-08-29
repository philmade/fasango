from pydantic import BaseModel, HttpUrl


class SourceForm(BaseModel):
    url: HttpUrl
