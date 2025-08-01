import random
from django.http import JsonResponse
from .models import OTP, CustomUser
from django.views.decorators.csrf import csrf_exempt
import json


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


def generate_otp():
    return str(random.randint(1000, 9999))

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import random
from .models import OTP  # adjust import based on your model

def generate_otp():
    return str(random.randint(1000, 9999))

@api_view(['GET','POST'])
def send_otp(request):
    try:
        phone = request.data.get('phone_number')
        if not phone:
            return Response({'error': 'Phone number is required'}, status=status.HTTP_400_BAD_REQUEST)

        otp = generate_otp()

        # Clean up old OTPs
        OTP.objects.filter(phone_number=phone).delete()

        # Save new OTP
        OTP.objects.create(phone_number=phone, otp=otp)

        print(f"Sending OTP {otp} to phone {phone} (Simulated)")

        return Response({'message': 'OTP sent successfully'}, status=status.HTTP_200_OK)
    except Exception as e:
        print("Error sending OTP:", e)
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import OTP
import json

@csrf_exempt
def verify_otp(request):
    if request.method == 'POST':
        print('Row body', request.body)
        
        data = json.loads(request.body)
        print("Parsed data", data)
        
        phone_number = data.get('phone_number')
        entered_otp = data.get('otp')
        print("Phone", phone_number, "OPT", entered_otp)

        try:
            otp_record = OTP.objects.filter(phone_number=phone_number).latest('created_at')

            if otp_record.otp == entered_otp:
                # Optionally delete OTP after successful login
                otp_record.delete()
                return JsonResponse({'message': 'OTP verified, login successful'})
            else:
                return JsonResponse({'error': 'Invalid OTP'}, status=400)

        except OTP.DoesNotExist:
            return JsonResponse({'error': 'OTP not found'}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)


from twilio.rest import Client

def send_sms(phone_number, otp_code):
    account_sid = 'your_twilio_sid'
    auth_token = 'your_twilio_token'
    from_number = 'your_twilio_phone_number'
    
    client = Client(account_sid, auth_token)
    client.messages.create(
        body=f'Your OTP is {otp_code}',
        from_=from_number,
        to=f'+91{phone_number}'  # Assuming India
    )
