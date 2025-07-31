import React from 'react'
import back from '../assets/back1.jpg'
import './Verify.css'
import { useNavigate } from 'react-router-dom'

const Verify = () => {
    const navigate = useNavigate();
    const next = ()=>{
        navigate('/home')
    }
  return (
     <div className=" flex items-center justify-center image  " style={{ backgroundImage: `url(${back})` }}>
      <div className=" p-6 w-80 rounded-lg text-center relative">
        {/* Heading */}
        <p className="text-[#4b2e2e] font-medium mb-6 ">
          Enter the OTP that we've sent through SMS <br />
          to <span className="font-semibold">+111 854 8745</span>
        </p>

        {/* OTP Circles */}
        <div className="flex justify-center gap-4 mb-2">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-10 h-10 rounded-full bg-[#e5d5ca]"
            ></div>
          ))}
        </div>

        {/* Timer */}
        <div className="text-[#4b2e2e] mb-4 text-sm font-semibold">00:29</div>

        {/* Resend Text */}
        <p className="text-sm text-[#4b2e2e] mb-6">
          Don’t receive code?{" "}
          <button className="underline font-medium">Resend</button>
        </p>

        {/* Next Button */}
        <button className="w-full py-3 bg-[#4b2e2e] text-white font-semibold rounded-full" onClick={next}>
          Next
        </button>

      </div>
    </div>
  )
}

export default Verify
