import React from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import Header from "./Header";
import Footer from './Footer'
import IcedAmericano from "../assets/IcedAmericano.jpg";

const Cart = () => {
    return (
        <>
            <Header />
            <div className="bg-[#fef5f1] min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">
                    {/* Cart Title */}
                    <h1 className="text-3xl font-bold text-brown-800 mb-4">Cart</h1>

                    {/* Cart Item */}
                    <div className="bg-[#fef5f1] shadow rounded-xl p-4 flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <img
                                src={IcedAmericano}
                                alt="Iced Americano"
                                className="w-20 h-20 rounded-xl object-cover"
                            />
                            <div>
                                <p className="text-sm text-gray-500">Small</p>
                                <h2 className="text-lg font-bold text-brown-800">Iced Americano</h2>
                                <p className="text-sm text-gray-500">Creamy blend of espresso, steamed</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-md font-bold">₹30.00</span>
                            <button className="p-2 bg-[#efe2da] rounded-full"><FaMinus /></button>
                            <span className="font-medium">1</span>
                            <button className="p-2 bg-[#efe2da] rounded-full"><FaPlus /></button>
                        </div>
                        <button className="text-brown-800 text-xl ml-2"><FaTimes /></button>
                    </div>

                    {/* Promo Code */}
                    <div className="mb-6">
                        <p className="text-brown-800 font-medium mb-2">Promo Code</p>
                        <input
                            type="text"
                            placeholder="Enter Promo Code"
                            className="w-full p-3 rounded-md bg-[#f3e4db] text-brown-800 focus:outline-none"
                            defaultValue="20HJ256KJNP12"
                        />
                    </div>

                    {/* Summary */}
                    <div className="bg-[#f3e4db] rounded-xl p-4 text-brown-900 space-y-2">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>$30.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping Fees</span>
                            <span>$3.23</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Taxes</span>
                            <span>$5.51</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount</span>
                            <span>$0.00</span>
                        </div>
                        <hr className="border-t border-black my-2" />
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>$38.74</span>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Cart;
