from django.urls import path
from . import views
from .views import send_otp, verify_otp, register_user, get_user_profile

urlpatterns = [
    path('register/', register_user),
    path('send-otp/', send_otp),
    path('verify-otp/', verify_otp),
    path('get-user-profile/', views.get_user_profile)
]
