from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
import uuid

class CustomUserManager(BaseUserManager):
    def create_user(self, phone_number, name, address, password=None):
        if not phone_number:
            raise ValueError("Users must have a phone number")
        user = self.model(phone_number=phone_number, name=name, address=address)
        user.set_unusable_password()
        user.save(using=self._db)
        return user

class CustomUser(AbstractBaseUser):
    phone_number = models.CharField(max_length=10, unique=True)
    name = models.CharField(max_length=100)
    address = models.TextField()
    is_active = models.BooleanField(default=True)
    USERNAME_FIELD = 'phone_number'
    
    objects = CustomUserManager()

    def __str__(self):
        return self.name

class Order(models.Model):
    STATUS_CHOICES = [
        ('pickup', 'Picked Up'),
        ('delivered', 'Delivered'),
    ]
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='orders')
    order_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    order_date = models.DateTimeField(auto_now_add=True)
    items = models.TextField()  # You can make this a separate model for items if needed
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    delivery_status = models.CharField(max_length=10, choices=STATUS_CHOICES)

    def __str__(self):
        return f"Order {self.order_id} for {self.user.name}"
from django.db import models

class OTP(models.Model):
    phone_number = models.CharField(max_length=10)
    otp = models.CharField(max_length=4)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.phone_number} - OTP: {self.otp}"
