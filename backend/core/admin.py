from django.contrib import admin
from .models import CustomUser, Order, OTP

admin.site.register(CustomUser)
admin.site.register(Order)
admin.site.register(OTP)
