from django.urls import path
from . import views
from .views import *

urlpatterns = [
    path('register/', register_user),
    path('send-otp/', send_otp),
    path('verify-otp/', verify_otp),
    path('get-user-profile/', views.get_user_profile),
    path('create-order/', views.create_order),
    path('order-history/', user_order_history),
    path('orders/all/', views.all_orders),
    path('orders/unassigned/', views.unassigned_orders),
    # Delivery Partner Views
    path('delivery-partner/', views.DeliveryPartner),
    path('orders/assigned/', views.assigned_orders),
    path('orders/history/', views.delivery_history),
    path('orders/update-status/', views.mark_order_status),
    path('delivery-partner/update-profile/', views.update_delivery_partner_profile),
    path('register-partner/', views.register_delivery_partner),
]

