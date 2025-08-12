import React from "react";

import applesImg from "../assets/apples.jpg";
import bananasImg from "../assets/bananas.jpg";
import orangesImg from "../assets/oranges.jpg";
import Footer from "./Footer";
import Header from "./Header";

const newOrders = [
  {
    id: "ORD001",
    item: "Apples",
    quantity: 5,
    image: applesImg,
    pickup: "Warehouse A, Ahmedabad",
    delivery: "123 Green Street, Ahmedabad",
    nearby: "Vastrapur Lake",
  },
  {
    id: "ORD002",
    item: "Bananas",
    quantity: 12,
    image: bananasImg,
    pickup: "Warehouse B, Surat",
    delivery: "456 Yellow Lane, Surat",
    nearby: "Gopi Talav",
  },
];

const pendingOrders = [
  {
    id: "ORD003",
    item: "Oranges",
    quantity: 8,
    image: orangesImg,
    pickup: "Warehouse C, Rajkot",
    delivery: "789 Orange Ave, Rajkot",
    nearby: "Race Course Garden",
  },
];

const completedOrders = [
  {
    id: "ORD004",
    item: "Apples",
    quantity: 10,
    image: applesImg,
    pickup: "Warehouse D, Vadodara",
    delivery: "22 Mango Street, Vadodara",
    nearby: "Sayaji Garden",
  },
];

const Dash = () => {
  const handleConfirm = (orderId) => {
    alert(`Order ${orderId} confirmed and moved to Pending Orders!`);
  };

  const handleComplete = (orderId) => {
    alert(`Order ${orderId} marked as Completed!`);
  };

  const renderOrders = (orders, actionType) => {
    return orders.map((order) => (
      <div
        key={order.id}
        className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 transition hover:shadow-lg"
      >
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <img
            src={order.image}
            alt={order.item}
            className="w-24 h-24 object-cover rounded-lg"
          />
        </div>

        {/* Right: Details */}
        <div className="flex-1 text-center sm:text-left">
          <p className="text-sm sm:text-base"><strong>Order ID:</strong> {order.id}</p>
          <p className="text-sm sm:text-base"><strong>Item:</strong> {order.item}</p>
          <p className="text-sm sm:text-base"><strong>Quantity:</strong> {order.quantity}</p>
          <p className="text-sm sm:text-base"><strong>Pickup Address:</strong> {order.pickup}</p>
          <p className="text-sm sm:text-base"><strong>Delivery Address:</strong> {order.delivery}</p>
          <p className="text-sm sm:text-base"><strong>Nearby Location:</strong> {order.nearby}</p>

          {actionType === "confirm" && (
            <button
              className="mt-3 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
              onClick={() => handleConfirm(order.id)}
            >
              Confirm Order
            </button>
          )}
          {actionType === "complete" && (
            <button
              className="mt-3 w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
              onClick={() => handleComplete(order.id)}
            >
              Mark as Completed
            </button>
          )}
        </div>
      </div>
    ));
  };

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl font-bold text-center mb-2">Order Details</h1>
        <p className="text-lg text-center mb-8">Welcome, Foram!</p>

        {/* New Orders */}
<h2 className="text-2xl font-semibold mb-4">New Orders</h2>
<section className="grid gap-6 sm:grid-cols-2">
  {renderOrders(newOrders, "confirm")}
</section>

{/* Pending Orders */}
<h2 className="text-2xl font-semibold mt-10 mb-4">Pending Orders</h2>
<section className="grid gap-6 sm:grid-cols-2">
  {renderOrders(pendingOrders, "complete")}
</section>

{/* Completed Orders */}
<h2 className="text-2xl font-semibold mt-10 mb-4">Completed Orders</h2>
<section className="grid gap-6 sm:grid-cols-2">
  {renderOrders(completedOrders, "none")}
</section>

      </div>
      <Footer />
    </>
  );
};

export default Dash;
