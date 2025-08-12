<<<<<<< HEAD
import React from "react";
import applesImg from "../assets/apples.jpg";
import bananasImg from "../assets/bananas.jpg";
import orangesImg from "../assets/oranges.jpg";
=======
import React, { useEffect, useState } from "react";
>>>>>>> eceb8da74c21153cb40901d3670d159e0fcdcf67
import Footer from "./Footer";
import Header from "./Header";

const Dash = () => {
  const [newOrders, setNewOrders] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);

  const phoneNumber = "9876543210"; // Delivery partner's phone (replace with logged-in partner's number)
  const API_BASE = "http://127.0.0.1:8000"; // Change to your Django backend URL

  // Fetch orders
  useEffect(() => {
  const fetchOrders = () => {
    fetch(`${API_BASE}/orders/unassigned/`)
      .then(res => res.json())
      .then(data => setNewOrders(data))
      .catch(err => console.error("Error fetching new orders:", err));

    fetch(`${API_BASE}/orders/assigned/?phone=${phoneNumber}`)
      .then(res => res.json())
      .then(data => setPendingOrders(data))
      .catch(err => console.error("Error fetching pending orders:", err));

    fetch(`${API_BASE}/orders/history/?phone=${phoneNumber}`)
      .then(res => res.json())
      .then(data => setCompletedOrders(data))
      .catch(err => console.error("Error fetching completed orders:", err));
  };

  fetchOrders(); // first fetch immediately

  const interval = setInterval(fetchOrders, 2000); // poll every 5 seconds

  return () => clearInterval(interval); // cleanup when unmounting
}, []);

  


  // Confirm order → Assign to delivery partner
  const handleConfirm = async (orderId) => {
    try {
      const res = await fetch(`${API_BASE}/orders/update-status/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_id: orderId,
          status: "picked_up" // First step after assigning
        }),
      });
      const data = await res.json();
      alert(data.message || "Order confirmed!");
      window.location.reload();
    } catch (err) {
      console.error("Error confirming order:", err);
    }
  };

  // Mark order as completed
  const handleComplete = async (orderId) => {
    try {
      const res = await fetch(`${API_BASE}/orders/update-status/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_id: orderId,
          status: "delivered"
        }),
      });
      const data = await res.json();
      alert(data.message || "Order marked as completed!");
      window.location.reload();
    } catch (err) {
      console.error("Error completing order:", err);
    }
  };

  const renderOrders = (orders, actionType) => {
    return orders.map((order) => (
      <div
        key={order.order_id}
        className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 transition hover:shadow-lg"
      >
<<<<<<< HEAD
        <div className="flex-shrink-0">
          <img
            src={order.image}
            alt={order.item}
            className="w-24 h-24 object-cover rounded-lg"
          />
        </div>
=======
>>>>>>> eceb8da74c21153cb40901d3670d159e0fcdcf67
        <div className="flex-1 text-center sm:text-left">
          <p><strong>Order ID:</strong> {order.order_id}</p>
          <p><strong>Total:</strong> ₹{order.total_amount}</p>
          <p><strong>Status:</strong> {order.delivery_status}</p>
          {actionType === "confirm" && (
            <button
              className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              onClick={() => handleConfirm(order.order_id)}
            >
              Confirm Order
            </button>
          )}
          {actionType === "complete" && (
            <button
              className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={() => handleComplete(order.order_id)}
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
        <p className="text-lg text-center mb-8">Welcome, Delivery Partner!</p>

<<<<<<< HEAD
=======
        {/* New Orders */}
>>>>>>> eceb8da74c21153cb40901d3670d159e0fcdcf67
        <h2 className="text-2xl font-semibold mb-4">New Orders</h2>
        <section className="grid gap-6 sm:grid-cols-2">
          {renderOrders(newOrders, "confirm")}
        </section>

<<<<<<< HEAD
=======
        {/* Pending Orders */}
>>>>>>> eceb8da74c21153cb40901d3670d159e0fcdcf67
        <h2 className="text-2xl font-semibold mt-10 mb-4">Pending Orders</h2>
        <section className="grid gap-6 sm:grid-cols-2">
          {renderOrders(pendingOrders, "complete")}
        </section>
<<<<<<< HEAD

        <h2 className="text-2xl font-semibold mt-10 mb-4">Completed Orders</h2>
        <section className="grid gap-6 sm:grid-cols-2">
          {renderOrders(completedOrders, "none")}
        </section>
=======
>>>>>>> eceb8da74c21153cb40901d3670d159e0fcdcf67

        {/* Completed Orders */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">Completed Orders</h2>
        <section className="grid gap-6 sm:grid-cols-2">
          {renderOrders(completedOrders, "none")}
        </section>
      </div>
<<<<<<< HEAD

=======
      <Footer />
>>>>>>> eceb8da74c21153cb40901d3670d159e0fcdcf67
    </>
  );
};

export default Dash;