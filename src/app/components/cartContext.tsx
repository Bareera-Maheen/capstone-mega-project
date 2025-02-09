"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

type CartItem = {
  _id: string;
  quantity: number;
  name: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  productImage: { assest: { _ref: string } };
  tags: string[];
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (_id: string) => void;
  updateQuantity: (_id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Function to add item to cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((cartItem) => cartItem._id === item._id);
      if (itemExists) {
        return prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to remove item from cart
  const removeFromCart = (_id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== _id));
  };

  // Function to update quantity of an item
  const updateQuantity = (_id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === _id ? { ...item, quantity } : item
      )
    );
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
 