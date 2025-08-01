import React, { useState, useEffect } from 'react';
import axios from 'axios';
import back from '../assets/back1.jpg';
import './Verify.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Verify = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const phoneFromState = location.state?.phone;
    const phoneFromStorage = localStorage.getItem('userPhone');

    if (phoneFromState) {
      setPhone(phoneFromState);
      localStorage.setItem('userPhone', phoneFromState); // Save it for next page too
    } else if (phoneFromStorage) {
      setPhone(phoneFromStorage);
    } else {
      alert('Phone number not found! Redirecting to login.');
      navigate('/');
    }
  }, [location, navigate]);

  const handleOtpChange = (index, value) => {
    if (/^\d$/.test(value) || value === '') {
      const updated = [...otp];
      updated[index] = value;
      setOtp(updated);

      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleVerify = async () => {
    try {
      const otpCode = otp.join('');

      const res = await axios.post('http://localhost:8000/api/verify-otp/', {
        phone_number: phone,
        otp: otpCode,
      });

      console.log('Phone:', phone);
      console.log('OTP Code:', otpCode);

      if (res.data.message) {
        alert("OTP Verified!");
        navigate('/home');
      }
    } catch (err) {
      console.error('Error verifying OTP:', err);
      alert('OTP verification failed');
    }
  };

  return (
    <div className="flex items-center justify-center image" style={{ backgroundImage: `url(${back})` }}>
      <div className="p-6 w-80 rounded-lg text-center relative">
        <p className="text-[#4b2e2e] font-medium mb-6">
          Enter the OTP sent via SMS to <br />
          <span className="font-semibold">+{phone}</span>
        </p>

        <div className="flex justify-center gap-4 mb-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              maxLength={1}
              className="w-10 h-10 text-center rounded bg-[#e5d5ca] text-lg font-bold"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
            />
          ))}
        </div>

        <div className="text-[#4b2e2e] mb-4 text-sm font-semibold">00:29</div>

        <p className="text-sm text-[#4b2e2e] mb-6">
          Don’t receive code?{" "}
          <button className="underline font-medium">Resend</button>
        </p>

        <button
          className="w-full py-3 bg-[#4b2e2e] text-white font-semibold rounded-full"
          onClick={handleVerify}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default Verify;
