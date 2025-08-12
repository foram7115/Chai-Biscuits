import React from "react";
import applesImg from "../assets/apples.jpg";
import orangesImg from "../assets/oranges.jpg";
import Footer from "./Footer";
import Header from "./Header";

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
  {
    id: "ORD005",
    item: "Oranges",
    quantity: 6,
    image: orangesImg,
    pickup: "Warehouse E, Bhavnagar",
    delivery: "11 Citrus Road, Bhavnagar",
    nearby: "Victoria Park",
  },
];

const OrderHistory = () => {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8 mb-10">
        <h1 className="text-3xl font-bold text-center mt-20 mb-10">Orders History</h1>
        <section className="grid gap-6 md:grid-cols-2">
          {completedOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 transition hover:shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  src={order.image}
                  alt={order.item}
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-sm sm:text-base">
                  <strong>Order ID:</strong> {order.id}
                </p>
                <p className="text-sm sm:text-base">
                  <strong>Item:</strong> {order.item}
                </p>
                <p className="text-sm sm:text-base">
                  <strong>Quantity:</strong> {order.quantity}
                </p>
                <p className="text-sm sm:text-base">
                  <strong>Pickup Address:</strong> {order.pickup}
                </p>
                <p className="text-sm sm:text-base">
                  <strong>Delivery Address:</strong> {order.delivery}
                </p>
                <p className="text-sm sm:text-base">
                  <strong>Nearby Location:</strong> {order.nearby}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>

    </>
  );
};

export default OrderHistory;