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
    
    def create_superuser(self, phone_number, name, address, password=None):
        user = self.create_user(phone_number, name, address)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user

class CustomUser(AbstractBaseUser):
    phone_number = models.CharField(max_length=10, unique=True)
    name = models.CharField(max_length=100)
    address = models.TextField()
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)  # Required for admin access
    is_superuser = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'phone_number'
    REQUIRED_FIELDS = ['name', 'address']

    def __str__(self):
        return f"{self.name} ({self.phone_number})"

    def has_perm(self, perm, obj=None):
        return self.is_superuser
    
    def has_module_perms(self, app_label):
        return self.is_superuser

class Order(models.Model):
    STATUS_CHOICES = [
        ('placed', 'Order Placed'),
        ('pickup', 'Out for Delivery'),
        ('delivered', 'Delivered'),
    ]

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='orders')
    order_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    order_date = models.DateTimeField(auto_now_add=True)
    placed_at = models.CharField(max_length=20)  # example: '10:00 AM'
    out_for_delivery_at = models.CharField(max_length=20)
    delivery_time = models.CharField(max_length=20, default=0)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    delivery_status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='placed')

    def __str__(self):
        return f"Order {self.order_id} for {self.user.name}"
    
class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    item_name = models.CharField(max_length=100)
    quantity = models.PositiveIntegerField(null=True, blank=True)
    price_per_item = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    @property
    def total_price(self):
        if self.quantity is not None and self.price_per_item is not None:
            return self.quantity * self.price_per_item
        return 0  # fallback if values are not set

    def __str__(self):
        return f"{self.quantity} x {self.item_name}"
    
from django.db import models

class OTP(models.Model):
    phone_number = models.CharField(max_length=10)
    otp = models.CharField(max_length=4)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.phone_number} - OTP: {self.otp}"
