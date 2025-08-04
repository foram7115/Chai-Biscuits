import React from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import Header from "./Header";
import Footer from './Footer';
import { useCart } from "./CartContext";


const Cart = () => {
    const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useCart();

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 3.23;
    const taxes = 5.51;
    const discount = 0;
    const total = subtotal + shipping + taxes - discount;

    return (
        <>
            <Header />
            <div className="bg-[#fef5f1] flex items-center justify-center p-4">
                <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">


                    <h1 className="text-3xl font-bold text-brown-800 mb-4 flex justify-center">Cart</h1>

                    <div className="bg-[#fef5f1] shadow rounded-xl p-4 flex items-center justify-center mb-6">
                        <div className="flex items-center gap-4">
                            
                            <div className="text-brown-800 mb-6 flex flex-col gap-6">

                                {cartItems.length === 0 ? (
                                    <p className="text-center text-gray-500">Your cart is empty</p>
                                ) : (
                                    cartItems.map((item, index) => (
                                        <div key={index} className="bg-[#fef5f1] shadow-md rounded-2xl px-4 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover"
                                                />
                                                <div>
                                                    <p className="text-sm text-gray-500">Size: {item.size || 'Regular'}</p>
                                                    <h2 className="text-lg font-bold text-brown-800">{item.name}</h2>
                                                    <p className="text-sm text-gray-500">{item.description || 'Delicious item'}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-md font-bold">₹{item.price}</span>
                                                <button onClick={() => decreaseQuantity(item)} className="p-2 bg-[#efe2da] rounded-full"><FaMinus /></button>
                                                <span className="font-medium">{item.quantity}</span>
                                                <button onClick={() => addToCart(item)} className="p-2 bg-[#efe2da] rounded-full"><FaPlus /></button>
                                            </div>
                                            <button onClick={() => removeFromCart(item)} className="text-brown-800 text-xl ml-2"><FaTimes /></button>
                                        </div>
                                    ))
                                )}


                                <div className="mb-6">
                                    <p className="text-brown-800 font-medium mb-2">Promo Code</p>
                                    <input
                                        type="text"
                                        placeholder="Enter Promo Code"
                                        className="w-full p-3 rounded-lg bg-[#f3e4db] text-brown-800 focus:outline-none"
                                        defaultValue="20HJ256KJNP12"
                                    />
                                </div>

                                <div className="bg-[#f3e4db] rounded-2xl p-5 text-brown-900 space-y-3 shadow-md">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>₹{subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Shipping Fees</span>
                                        <span>₹{shipping.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Taxes</span>
                                        <span>₹{taxes.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Discount</span>
                                        <span>₹{discount.toFixed(2)}</span>
                                    </div>
                                    <hr className="border-t border-black my-2" />
                                    <div className="flex justify-between font-bold text-lg">
                                        <span>Total</span>
                                        <span>₹{total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    <Footer />
         </>
    );
};
            export default Cart;
