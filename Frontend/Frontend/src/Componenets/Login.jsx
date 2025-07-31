import React from 'react'
import back from '../assets/back1.jpg'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const next = ()=>{
        navigate('/Verify')
    }
    return (
        <div className="align-center">
            <div className="image" style={{ backgroundImage: `url(${back})` }}>
                <div className="flex justify-center items-center ">
                    <h1 className="text-4xl font-bold mt-10 text-[#4b2e2e]">Welcome!</h1>
                </div>
                <div className=" flex items-center justify-center ">
                    <div className=" p-6  rounded-lg text-center relative">
                        {/* Heading */}
                        <h2 className="text-xl font-semibold text-[#4b2e2e] mb-8 mt-20">
                            What's Your Mobile Number?
                        </h2>

                        {/* Input Fields */}
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full mb-4 px-4 py-3 rounded-full bg-[#e5d5ca] text-[#4b2e2e] placeholder-[#4b2e2e] focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Phone No."
                            className="w-full mb-4 px-4 py-3 rounded-full bg-[#e5d5ca] text-[#4b2e2e] placeholder-[#4b2e2e] focus:outline-none"
                        />

                        {/* Terms */}
                        <p className="text-sm text-[#4b2e2e] mb-6">
                            By clicking next you will agree to our{" "}
                            <a href="#" className="underline font-medium">
                                Terms & Conditions
                            </a>
                        </p>

                        {/* Next Button */}
                        <button className="w-full py-3 bg-[#4b2e2e] text-white font-semibold rounded-full" onClick={next} >
                            Next
                        </button>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
