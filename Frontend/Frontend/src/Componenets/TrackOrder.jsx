import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
const TrackOrder = () => {
  const [orders, setOrders] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('allOrders')) || [];
    const adjustedOrders = storedOrders.map(order => {
      if (!order.placedAt) return order;
      const placedTime = parseTime(order.placedAt);
      const deliveryTime = new Date(placedTime.getTime() + 40 * 60 * 1000); // 40 mins after placedAt
      return {
        ...order,
        deliveryTime,
      };
    });
    const pendingOrders = adjustedOrders.filter(order => {
      return order.deliveryTime && new Date() < new Date(order.deliveryTime);
    });
    setOrders(pendingOrders);
  }, [currentTime]);
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);
  const parseTime = (timeStr) => {
    if (!timeStr) return new Date(0);
    const [hourMin, period] = timeStr.split(' ');
    let [hours, minutes] = hourMin.split(':').map(Number);
    if (period === 'PM' && hours < 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    const now = new Date();
    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
    return date;
  };
  const getSteps = (order) => [
    {
      label: 'Order Placed',
      timeStr: order.placedAt || '10:00 AM',
      completed: currentTime >= parseTime(order.placedAt || '10:00 AM'),
    },
    {
      label: 'Delivered',
      timeStr: order.deliveryTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
      completed: currentTime >= new Date(order.deliveryTime),
    },
  ];
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#fef6f3] p-4 sm:p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-[#4b2c20] mb-6">Track Your Orders</h1>
          {orders.length === 0 ? (
            <p className="text-center text-gray-600">No active orders. All orders have been delivered.</p>
          ) : (
            orders.map((order, index) => {
              const steps = getSteps(order);
              return (
                <div key={index} className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-10">
                  <div className="bg-[#fff3eb] p-4 rounded-lg mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Estimated Delivery</p>
                      <p className="text-lg font-semibold text-[#4b2c20]">
                        Today, {steps[1].timeStr}
                      </p>
                    </div>
                    <div className="text-sm font-medium text-green-600">
                      {steps[1].completed ? 'Delivered' : 'On Time'}
                    </div>
                  </div>
                  <div className="relative border-l-4 border-[#d3b9af] ml-3 pl-6 space-y-6">
                    {steps.map((step, i) => (
                      <div key={i} className="relative">
                        <div
                          className={`absolute -left-[1.55rem] top-1 w-6 h-6 rounded-full border-4 ${step.completed
                              ? 'bg-green-500 border-green-200'
                              : 'bg-gray-300 border-gray-200'
                            }`}
                        ></div>
                        <div>
                          <p className="text-md font-semibold text-[#4b2c20]">{step.label}</p>
                          <p className="text-sm text-gray-500">{step.timeStr}</p>
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
                      <button className="bg-[#4b2c20] text-white px-4 py-2 rounded-full text-sm hover:bg-[#3e241b] transition">
                        Call
                      </button>
                    </div>
                  </div>
                  <div className="mt-8 border-t pt-6">
                    <h2 className="text-lg font-semibold text-[#4b2c20] mb-2">Order Summary</h2>
                    <ul className="text-sm text-gray-700 space-y-2">
                      {order.items.map((item, idx) => (
                        <li key={idx} className="flex justify-between">
                          <span>{item.quantity}x {item.name}</span>
                          <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                      ))}
                      <li className="flex justify-between font-semibold text-[#4b2c20] border-t pt-2">
                        <span>Total</span>
                        <span>₹{order.total.toFixed(2)}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default TrackOrder;