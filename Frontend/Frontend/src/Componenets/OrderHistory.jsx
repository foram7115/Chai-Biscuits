import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const statusColor = {
  Delivered: 'text-green-600',
  Cancelled: 'text-red-500',
  Pending: 'text-yellow-600',
};

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = localStorage.getItem('allOrders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders).reverse()); // Show most recent first
    }
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#fef6f3] p-4 sm:p-6 md:p-10">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 sm:p-8">
          <h1 className="text-xl sm:text-2xl font-bold text-[#4b2c20] mb-6">Order History</h1>

          {orders.length === 0 ? (
            <p className="text-center text-gray-500">No orders found.</p>
          ) : (
            <div className="space-y-6">
              {orders.map((order, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 sm:p-5 shadow-sm bg-[#fffaf8]"
                >
                  <div className="flex justify-between items-center flex-wrap gap-y-2">
                    <div>
                      <h2 className="font-semibold text-[#4b2c20] text-md">Order ID: {order.id}</h2>
                      <p className="text-sm text-gray-600">{order.date}</p>
                    </div>
                    <div className={`text-sm font-medium ${statusColor[order.status] || 'text-gray-600'}`}>
                      {order.status}
                    </div>
                  </div>

                  <ul className="mt-3 text-sm text-gray-700 list-disc pl-5">
                    {order.items.map((item, i) => (
                      <li key={i}>{item.quantity}x {item.name}</li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center mt-4">
                    <p className="font-semibold text-[#4b2c20]">Total: ₹{order.total.toFixed(2)}</p>
                    <button className="text-sm text-[#4b2c20] border border-[#4b2c20] px-3 py-1 rounded-full hover:bg-[#f3e7e3] transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderHistory;