import random
from django.http import JsonResponse
import requests
from .models import OTP, CustomUser
from django.views.decorators.csrf import csrf_exempt
import json
from django.utils import timezone


from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import CustomUser
import json

@csrf_exempt
def get_user_profile(request):
    if request.method == 'GET':
        try:
            print("Query params:", request.GET)
            phone = request.GET.get('phone') 

            if not phone:
                return JsonResponse({'error': 'Phone number is required'}, status=400)

            user = CustomUser.objects.get(phone_number=phone)

            return JsonResponse({
                'name': user.name,
                'phone_number': user.phone_number,
                'address': user.address
            })

        except CustomUser.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        phone_number = data.get('phone_number')
        address = data.get('address')

        if not all([name, phone_number, address]):
            return JsonResponse({'error': 'All fields are required'}, status=400)

        # Save user if not already exists
        user, created = CustomUser.objects.get_or_create(phone_number=phone_number, defaults={
            'name': name,
            'address': address
        })

        if not created:
            return JsonResponse({'error': 'User already exists'}, status=400)

        return JsonResponse({'message': 'User registered successfully'})

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import random
from .models import OTP  # adjust import based on your model

def generate_otp():
    return str(random.randint(1000, 9999))

@csrf_exempt
def send_otp(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            phone = data.get('phone_number')

            if not phone:
                return JsonResponse({'error': 'Phone number is required'}, status=400)

            otp = generate_otp()

            # Save OTP in DB
            otp_instance, created = OTP.objects.update_or_create(
                phone_number=phone,
                defaults={'otp': otp, 'created_at': timezone.now()}
            )
            print(f"[DEBUG] Saved OTP {otp} for {phone}")

            # Send OTP using 2Factor API
            api_key = 'cfc26a50-6ebb-11f0-a562-0200cd936042'  # Replace with your actual key
            url = f'https://2factor.in/API/V1/{api_key}/SMS/{phone}/{otp}'

            response = requests.get(url)
            print(f'Sending OTP {otp} to phone {phone}, API response:', response.text)

            return JsonResponse({'message': 'OTP sent successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Invalid request method'}, status=405)


from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import OTP
import json

@csrf_exempt
def verify_otp(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            phone = data.get('phone_number')
            entered_otp = data.get('otp')

            if not all([phone, entered_otp]):
                return JsonResponse({'error': 'Phone number and OTP required'}, status=400)

            otp_record = OTP.objects.filter(phone_number=phone).latest('created_at')

            if otp_record.otp == entered_otp:
                otp_record.delete()  # Delete after successful verification
                
                try:
                    user = CustomUser.objects.get(phone_number=phone)
                    return JsonResponse({
                        'message': 'OTP verified, login successful',
                        'phone_number': user.phone_number,
                        'name': user.name  # ✅ send 'name', not 'full_name'
                    })
                except CustomUser.DoesNotExist:
                    return JsonResponse({'error': 'User not found'}, status=404)
            else:
                return JsonResponse({'error': 'Invalid OTP'}, status=400)
        except OTP.DoesNotExist:
            return JsonResponse({'error': 'OTP not found'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Invalid request method'}, status=405)


from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import CustomUser, Order, OrderItem
import json
from decimal import Decimal

@csrf_exempt
def create_order(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            phone = data.get('phone_number')
            total = data.get('total')
            delivery_status = data.get('delivery_status')
            items = data.get('items', [])

            if not all([phone, total, delivery_status, items]):
                return JsonResponse({'error': 'Missing required fields'}, status=400)

            user = CustomUser.objects.get(phone_number=phone)

            order = Order.objects.create(
                user=user,
                total_amount=Decimal(str(total)),
                delivery_status=delivery_status
            )

            for item in items:
                OrderItem.objects.create(
                    order=order,
                    item_name=item['name'],
                    quantity=item['quantity'],
                    price_per_item=Decimal(str(item['price']))
                )

            return JsonResponse({'message': 'Order created successfully'}, status=201)

        except CustomUser.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid method'}, status=405)
