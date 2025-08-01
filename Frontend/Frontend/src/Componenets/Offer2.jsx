import React from "react";
import Header from "./Header";

// Import 5 images
import o1 from "../assets/o1.webp";
import o2 from "../assets/o2.jpg";
import o3 from "../assets/o3.webp";
import o4 from "../assets/o4.jpg";
import o5 from "../assets/o5.jpg";

const offerImages = [
  { src: o1, title: "Flat 30% Off", price: 220 },
  { src: o2, title: "Summer Sale", price: 180 },
  { src: o3, title: "Coffee Combo", price: 150 },
  { src: o4, title: "Limited Time Offer", price: 200 },
  { src: o5, title: "Exclusive Deal", price: 170 },
];

const Offer2 = () => {
  return (
    <>
      <Header />
      <div className="bg-[#fef5f1] min-h-screen py-10 px-4">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">
          Flat 30% Off Deals
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Row - 3 Items */}
          {offerImages.slice(0, 3).map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-black"
            >
              <img
                src={offer.src}
                alt={offer.title}
                className="w-full h-60 object-contain rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
              <p className="text-lg font-medium mb-4">₹{offer.price}</p>
              <button className="mt-auto bg-white border border-black text-black py-2 px-4 rounded-md hover:bg-gray-100 transition">
                Add to Cart
              </button>
            </div>
          ))}

          {/* Second Row - 2 Items Centered */}
          <div className="col-span-full flex justify-center gap-6 flex-wrap">
            {offerImages.slice(3).map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-black w-full sm:w-[45%] lg:w-[30%]"
              >
                <img
                  src={offer.src}
                  alt={offer.title}
                  className="w-full h-60 object-contain rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-lg font-medium mb-4">₹{offer.price}</p>
                <button className="mt-auto bg-white border border-black text-black py-2 px-4 rounded-md hover:bg-gray-100 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer2;
