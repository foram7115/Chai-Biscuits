import React from 'react';
import Header from './Header';
import Footer from './Footer'
const steps = [
  { label: 'Order Placed', time: '10:00 AM', completed: true },
  { label: 'Packed', time: '10:15 AM', completed: true },
  { label: 'Out for Delivery', time: '11:00 AM', completed: true },
  { label: 'Delivered', time: '12:00 PM', completed: false },
];

const TrackOrder = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#fef6f3] p-4 sm:p-6 md:p-10">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 sm:p-8">
          
          <h1 className="text-xl sm:text-2xl font-bold text-[#4b2c20] mb-6">Track Your Order</h1>

          <div className="bg-[#fff3eb] p-4 rounded-lg mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Estimated Delivery</p>
              <p className="text-lg font-semibold text-[#4b2c20]">Today, 12:00 PM</p>
            </div>
            <div className="text-sm text-green-600 font-medium">On Time</div>
          </div>

          <div className="relative border-l-4 border-[#d3b9af] ml-3 pl-6 space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className={`absolute -left-[1.55rem] top-1 w-6 h-6 rounded-full border-4 ${step.completed ? 'bg-green-500 border-green-200' : 'bg-gray-300 border-gray-200'}`}></div>
                <div>
                  <p className="text-md font-semibold text-[#4b2c20]">{step.label}</p>
                  <p className="text-sm text-gray-500">{step.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-6">
            <h2 className="text-lg font-semibold text-[#4b2c20] mb-2">Delivery Partner</h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-md font-medium text-[#4b2c20]">Rahul Sharma</p>
                <p className="text-sm text-gray-600">+91 98765 43210</p>
              </div>
              <button className="bg-[#4b2c20] text-white px-4 py-2 rounded-full text-sm hover:bg-[#3e241b] transition">Call</button>
            </div>
          </div>
          <div className="mt-8 border-t pt-6">
            <h2 className="text-lg font-semibold text-[#4b2c20] mb-2">Order Summary</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex justify-between"><span>2x Bananas</span><span>₹60</span></li>
              <li className="flex justify-between"><span>1x Milk (500ml)</span><span>₹45</span></li>
              <li className="flex justify-between font-semibold text-[#4b2c20]"><span>Total</span><span>₹105</span></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrackOrder;
