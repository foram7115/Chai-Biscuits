from rest_framework import serializers
from .models import Order, OrderItem

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['item_name', 'quantity', 'price_per_item']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = [
            'order_id',
            'order_date',
            'placed_at',
            'out_for_delivery_at',
            'delivery_time',
            'total_amount',
            'delivery_status',
            'items',
        ]
