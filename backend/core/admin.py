from django.contrib import admin
from .models import CustomUser, Order, OTP, OrderItem

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone_number', 'address', 'is_active')
    search_fields = ('name', 'phone_number')
    list_filter = ('is_active',)
    
class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0
    readonly_fields = ('item_name', 'quantity', 'price_per_item', 'total_price')
    can_delete = False
    
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('order_id', 'user', 'order_date', 'total_amount', 'delivery_status')
    search_fields = ('user__name', 'order_id')
    list_filter = ('delivery_status', 'order_date')
    inlines = [OrderItemInline]
    readonly_fields = ('order_id', 'user', 'order_date', 'total_amount')
    
@admin.register(OTP)
class OTPAdmin(admin.ModelAdmin):
    list_display = ('phone_number', 'otp', 'created_at')
    search_fields = ('phone_number',)
    list_filter = ('created_at',)