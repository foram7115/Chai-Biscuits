import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import Header from "./Header";
import Footer from './Footer';
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const {
    cartItems,
    addToCart,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const [promoCode, setPromoCode] = useState('');
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cartItems.length > 0 ? 10 : 0;
  const taxes = cartItems.length > 0 ? subtotal * 0.05 : 0;
  const discount = 0;
  const total = subtotal + shipping + taxes - discount;

  const generatePromoCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  };

  useEffect(() => {
    if (!promoCode) {
      const newCode = generatePromoCode();
      setPromoCode(newCode);
    }
  }, []);

 const handlePlaceOrder = () => {
  const phone_number = localStorage.getItem("phone_number");
  const deliveryTime = new Date(Date.now() + 60 * 60 * 1000).toLocaleTimeString([], {
    hour: '2-digit', minute: '2-digit', hour12: true
  });
  const placedAt = new Date().toLocaleTimeString([], {
    hour: '2-digit', minute: '2-digit', hour12: true
  });

  const orderDetails = {
    items: cartItems,
    subtotal,
    shipping,
    taxes,
    discount,
    total,
    promoCode,
    deliveryTime,
    placedAt
  };

  // ✅ Save to localStorage BEFORE doing anything else
  localStorage.setItem('latestOrder', JSON.stringify(orderDetails));
  console.log("✅ Order saved to localStorage:", orderDetails);

  // ✅ Save to backend (optional)
  axios.post('http://127.0.0.1:8000/api/create-order/', {
    phone_number: phone_number,
    total: total,
    delivery_status: "delivered",
    items: cartItems.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity
    }))
  }, { withCredentials: true })
    .then(res => {
      console.log("✅ Order saved to backend:", res.data);
      navigate("/track-order");
    })
    .catch(err => {
      console.error("❌ Backend failed:", err);
      alert("Order placed locally but failed to save in backend.");
      navigate("/track-order");
    });
};


  return (
    <>
      <Header />
      <div className="bg-[#fef5f1] min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">
          <h1 className="text-3xl font-bold text-brown-800 mb-4">Cart</h1>

          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="bg-[#fef5f1] shadow rounded-xl p-4 flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-500">Size: {item.size || 'Regular'}</p>
                    <h2 className="text-lg font-bold text-brown-800">{item.name}</h2>
                    <p className="text-sm text-gray-500">{item.description || 'Delicious item'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => decreaseQuantity(item)} className="p-2 bg-[#efe2da] rounded-full"><FaMinus /></button>
                  <span className="font-medium">{item.quantity}</span>
                  <button onClick={() => addToCart(item)} className="p-2 bg-[#efe2da] rounded-full"><FaPlus /></button>
                </div>
                <button onClick={() => removeFromCart(item)} className="text-brown-800 text-xl ml-2"><FaTimes /></button>
              </div>
            ))
          )}

          {cartItems.length > 0 && (
            <>
              <div className="mb-6">
                <p className="text-brown-800 font-medium mb-2">Promo Code</p>
                <input
                  type="text"
                  value={promoCode}
                  readOnly
                  className="w-full p-3 rounded-md bg-[#f3e4db] text-brown-800 font-semibold focus:outline-none"
                />
              </div>

              <div className="bg-[#f3e4db] rounded-xl p-4 text-brown-900 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹{shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes (5%)</span>
                  <span>₹{taxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>- ₹{discount.toFixed(2)}</span>
                </div>
                <hr className="border-t border-black my-2" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-[#4b2e2e] text-white mt-6 py-3 rounded-full text-lg font-semibold hover:bg-[#3a241a] transition"
              >
                Place Order
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
