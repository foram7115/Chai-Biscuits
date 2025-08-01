import random
from django.http import JsonResponse
from .models import OTP, CustomUser
from django.views.decorators.csrf import csrf_exempt
import json

def generate_otp():
    return str(random.randint(1000, 9999))

@csrf_exempt
def send_otp(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        phone_number = data.get('phone_number')

        if not phone_number:
            return JsonResponse({'error': 'Phone number is required'}, status=400)

        otp_code = generate_otp()
        OTP.objects.create(phone_number=phone_number, otp=otp_code)

        # ✅ Call the helper function to send the SMS
        send_sms(phone_number, otp_code)

        return JsonResponse({'message': 'OTP sent successfully'})


@csrf_exempt
def verify_otp(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        phone_number = data.get('phone_number')
        entered_otp = data.get('otp')

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
