from rest_framework import serializers
from .models import Order, OrderItem, DeliveryHistory, DeliveryPartner

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


class DeliveryPartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveryPartner
        fields = ['id', 'name', 'phone_number']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    assigned_to = DeliveryPartnerSerializer(read_only=True)

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
            'assigned_to',
            'items',
        ]