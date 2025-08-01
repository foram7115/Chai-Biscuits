from django.urls import path
from .views import send_otp, verify_otp, register_user

urlpatterns = [
    path('register/', register_user),
    path('send-otp/', send_otp),
    path('verify-otp/', verify_otp),
]
