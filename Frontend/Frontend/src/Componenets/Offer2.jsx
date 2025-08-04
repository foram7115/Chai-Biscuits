import React from "react";
import Header from "./Header";
import Footer from './Footer'
import o1 from "../assets/o1.webp";
import o2 from "../assets/o2.jpg";
import o3 from "../assets/o3.webp";
import o4 from "../assets/o4.jpg";
import o5 from "../assets/o5.jpg";
import { useCart } from "./CartContext";
const offerImages = [
    { image: o1, name: "Flat 30% Off", price: 220 },
    { image: o2, name: "Summer Sale", price: 180 },
    { image: o3, name: "Coffee Combo", price: 150 },
    { image: o4, name: "Limited Time Offer", price: 200 },
    { image: o5, name: "Exclusive Deal", price: 170 },
];

const Offer2 = () => {
     const { cartItems, addToCart } = useCart();
    return (
        <>
            <Header />
            <div className="bg-[#fef5f1] min-h-screen py-10 px-4">
                <h2 className="text-3xl font-bold text-black mb-8 text-center">
                    Flat 30% Off Deals
                </h2>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
                    {offerImages.slice(0, 3).map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-black"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-60 object-contain rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <p className="text-lg font-medium mb-4">₹{item.price}</p>
                             <button
                                    onClick={() => addToCart(item)}
                                    className="bg-white border border-brown-800 text-black py-2 rounded-lg hover:bg-brown-100 transitionbg-brown-800 text-black p-2 rounded-full hover:bg-brown-700"
                                >
                                    Add to Cart
                                </button>
                        </div>
                    ))}
                    <div className="col-span-full flex justify-center gap-6 flex-wrap">
                        {offerImages.slice(3).map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-black w-full sm:w-[45%] lg:w-[30%]"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-60 object-contain rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                <p className="text-lg font-medium mb-4">₹{item.price}</p>
                                  <button
                                    onClick={() => addToCart(item)}
                                    className="bg-white border border-brown-800 text-black py-2 rounded-lg hover:bg-brown-100 transitionbg-brown-800 text-black p-2 rounded-full hover:bg-brown-700"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Offer2;
