import React from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import Header from "./Header";
import IcedAmericano from "../assets/IcedAmericano.jpg";
const Cart = () => {
  return (
    <>
    <Header/>
    <div className="bg-[#fef5f1] min-h-screen p-4">
      <h1 className="text-3xl font-bold text-brown-800 mb-4">Cart</h1>

      {/* Dine-In / Takeaway / Delivery Buttons */}
      <div className="flex gap-4 mb-6">
        <button className="px-4 py-2 bg-brown-800 text-white rounded-full">Dine-In</button>
        <button className="px-4 py-2 bg-[#efe2da] text-brown-800 rounded-full">Takeaway</button>
        <button className="px-4 py-2 bg-[#efe2da] text-brown-800 rounded-full">Delivery</button>
      </div>

      {/* Cart Item */}
      <div className="bg-white shadow-md rounded-xl p-4 flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img
            src={IcedAmericano} // replace with actual image path
            alt="Iced Americano"
            className="w-20 h-20 rounded-xl object-cover"
          />
          <div>
            <p className="text-sm text-gray-500">Small</p>
            <h2 className="text-xl font-bold text-brown-800">Iced Americano</h2>
            <p className="text-sm text-gray-500">Creamy blend of espresso, steamed</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">₹30.00</span>
          <button className="p-2 bg-[#efe2da] rounded-full"><FaMinus /></button>
          <span className="font-medium">1</span>
          <button className="p-2 bg-[#efe2da] rounded-full"><FaPlus /></button>
        </div>
        <button className="text-brown-800 text-xl ml-4"><FaTimes /></button>
      </div>

      {/* Promo Code */}
      <div className="mb-6">
        <p className="text-brown-800 font-medium mb-2">Promo Code</p>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter Promo Code"
            className="flex-1 p-2 rounded-l-lg bg-[#efe2da] text-brown-800 focus:outline-none"
            defaultValue="20HJ256KJNP12"
          />
          <button className="bg-brown-800 text-white px-4 py-2 rounded-r-lg">Apply</button>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-[#efe2da] rounded-xl p-4 text-brown-800 space-y-2">
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
        <div className="flex justify-between font-bold text-lg border-t pt-2">
          <span>Total</span>
          <span>$38.74</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;
