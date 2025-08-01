import React from 'react';
import Header from './Header';
import Footer from './Footer'
const orders = [
  {
    id: 'CB10234',
    date: 'July 30, 2025',
    total: '₹299',
    status: 'Delivered',
    items: ['Tea (1 cup)', 'Hide & Seek (3 pcs)', 'Cold Coffee (100ml)'],
  },
  {
    id: 'CB10212',
    date: 'July 28, 2025',
    total: '₹520',
    status: 'Cancelled',
    items: ['Thumbsup', 'Hot Coffee', 'Jim-Jam (3 pcs)'],
  },
  {
    id: 'CB10190',
    date: 'July 25, 2025',
    total: '₹145',
    status: 'Delivered',
    items: ['Hot Coffee (200ml)', 'Cold Coffee (200ml)'],
  },
];

const statusColor = {
  Delivered: 'text-green-600',
  Cancelled: 'text-red-500',
};

const OrderHistory = () => {

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-[#fef6f3] p-4 sm:p-6 md:p-10">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 sm:p-8">
        <h1 className="text-xl sm:text-2xl font-bold text-[#4b2c20] mb-6">Order History</h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border border-gray-200 rounded-lg p-4 sm:p-5 shadow-sm bg-[#fffaf8]"
            >
              <div className="flex justify-between items-center flex-wrap gap-y-2">
                <div>
                  <h2 className="font-semibold text-[#4b2c20] text-md">Order ID: {order.id}</h2>
                  <p className="text-sm text-gray-600">{order.date}</p>
                </div>
                <div className={`text-sm font-medium ${statusColor[order.status]}`}>
                  {order.status}
                </div>
              </div>

              <ul className="mt-3 text-sm text-gray-700 list-disc pl-5">
                {order.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="flex justify-between items-center mt-4">
                <p className="font-semibold text-[#4b2c20]">Total: {order.total}</p>
                <button className="text-sm text-[#4b2c20] border border-[#4b2c20] px-3 py-1 rounded-full hover:bg-[#f3e7e3] transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default OrderHistory;
