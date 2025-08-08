import React from "react";
import "./Dash.css";

import applesImg from "../assets/apples.jpg";
import bananasImg from "../assets/bananas.jpg";
import orangesImg from "../assets/oranges.jpg";

// Sample data
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
      <div key={order.id} className="order-card">
        <div className="order-left">
          <img src={order.image} alt={order.item} className="item-image" />
        </div>
        <div className="order-right">
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Item:</strong> {order.item}</p>
          <p><strong>Quantity:</strong> {order.quantity}</p>
          <p><strong>Pickup Address:</strong> {order.pickup}</p>
          <p><strong>Delivery Address:</strong> {order.delivery}</p>
          <p><strong>Nearby Location:</strong> {order.nearby}</p>
          {actionType === "confirm" && (
            <button
              className="confirm-button"
              onClick={() => handleConfirm(order.id)}
            >
              Confirm Order
            </button>
          )}
          {actionType === "complete" && (
            <button
              className="confirm-button"
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
    <div className="dash-container">
      <h1 className="title">Order Details</h1>
      <p className="welcome">Welcome, Foram!</p>

      {/* New Orders Section */}
      <h2 className="section-heading">New Orders</h2>
      <section className="orders-section">
        <div className="orders-grid">
          {renderOrders(newOrders, "confirm")}
        </div>
      </section>

      {/* Pending Orders Section */}
      <h2 className="section-heading">Pending Orders</h2>
      <section className="orders-section">
        <div className="orders-grid">
          {renderOrders(pendingOrders, "complete")}
        </div>
      </section>

      {/* Completed Orders Section */}
      <h2 className="section-heading">Completed Orders</h2>
      <section className="orders-section">
        <div className="orders-grid">
          {renderOrders(completedOrders, "none")}
        </div>
      </section>
    </div>
  );
};

export default Dash;
