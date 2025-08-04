// src/Components/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add or increase quantity
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  // Decrease quantity
  const decreaseQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems
        .map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  // Remove item
  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((i) => i.id !== item.id)
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, decreaseQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
