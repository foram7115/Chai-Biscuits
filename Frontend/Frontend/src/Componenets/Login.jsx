import React, { useState } from 'react';
import back from '../assets/back1.jpg';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');

  const handleNext = async () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/send-otp/', {
        phone_number: phoneNumber
      });

      if (response.status === 200) {
        // Store phone for later OTP verification
        localStorage.setItem('phone_number', phoneNumber);
        navigate('/Verify');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Try again.');
    }
  };

  return (
    <div className="align-center">
      <div className="image" style={{ backgroundImage: `url(${back})` }}>
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold mt-10 text-[#4b2e2e]">Welcome!</h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="p-6 rounded-lg text-center relative">
            <h2 className="text-xl font-semibold text-[#4b2e2e] mb-8 mt-20">
              What's Your Mobile Number?
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full mb-4 px-4 py-3 rounded-full bg-[#e5d5ca] text-[#4b2e2e] placeholder-[#4b2e2e] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone No."
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full mb-4 px-4 py-3 rounded-full bg-[#e5d5ca] text-[#4b2e2e] placeholder-[#4b2e2e] focus:outline-none"
            />

            <p className="text-sm text-[#4b2e2e] mb-6">
              By clicking next you will agree to our{' '}
              <a href="#" className="underline font-medium">
                Terms & Conditions
              </a>
            </p>

            <button
              className="w-full py-3 bg-[#4b2e2e] text-white font-semibold rounded-full"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
