import React from 'react';
import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';


function Welcome() {
    const navigate = useNavigate();
    const next = () =>{
        navigate('/Register')
    }
  return (
    <div className="h-screen w-full bg-[#4B2E2B] text-white flex flex-col justify-between overflow-hidden relative ">
      {/* Top Bar */}
      <div className="w-full flex justify-end px-6 pt-4">
        <button className=" text-[#d4a373] px-4 py-2 rounded-lg font-medium" onClick={next}>
          Login
        </button>
      </div>

      {/* Logo and Text */}
      <div className="text-center px-6 flex flex-col items-center mt-[-60px]">
        <img
          src={Logo}
          alt="logo"
          className="w-[450px] h-[350px] object-contain" // Made logo bigger
        />
        <h1 className="text-2xl font-bold ">
          Welcome to Chai-Biscuits!
        </h1>
        <p className="mt-2 text-base text-white/80 max-w-md">
          Discover your favorite coffee blends and more. Let’s get started on your
        </p>
      </div>

      {/* Pagination & Button */}
      <div className="flex flex-col items-center gap-2 mb-2"> {/* Reduced spacing */}
        {/* <div className="flex gap-2 mt-[-10px]">
          <span className="w-3 h-3 rounded-full bg-white/70 border border-white"></span>
          <span className="w-3 h-3 rounded-full bg-white/40"></span>
          <span className="w-3 h-3 rounded-full bg-white/40"></span>
        </div> */}
        <button className="bg-[#EADBC8] text-[#4B2E2B] px-6 py-3 rounded-xl font-semibold" onClick={next}>
          Get Start
        </button>
      </div>
    </div>
  );
}

export default Welcome;
