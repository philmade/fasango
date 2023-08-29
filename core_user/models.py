# Create your models here.
from django.contrib.auth.models import User
from django.db import models
import uuid


class Profile(models.Model):
    SUBSCRIPTION_TYPES = (
        ("individual", "Individual"),
        ("business", "Business"),
        (None, None)
        # Add more types as needed
    )
    user = models.OneToOneField(User, related_name="profile", on_delete=models.CASCADE)
    description = models.TextField(
        blank=True, default="Add your profile description", max_length=200
    )
    stripe_customer_id = models.CharField(max_length=255, blank=True, null=True)
    subscription_type = models.CharField(
        max_length=10, choices=SUBSCRIPTION_TYPES, null=True, blank=True, default=None
    )


class Invitation(models.Model):
    _for = models.EmailField()
    _from = models.EmailField(null=True, blank=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    used = models.BooleanField(default=False)
