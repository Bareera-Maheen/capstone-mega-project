"use client";


import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useCart } from "@/app/components/cartContext"; // Import your cart context
import CheckoutPage from "@/app/components/checkout"


// Load Stripe
if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Payment() {
  const { cart } = useCart(); // Use the cart context to get cart data
  const [cartTotal, setCartTotal] = useState(0);

  // Calculate cart total dynamically
  useEffect(() => {
    const totalAmount = cart.reduce(
      (total, item) =>
        total + (item.price - (item.price * item.discountPercentage) / 100) * item.quantity,
      0
    );
    setCartTotal(totalAmount);
  }, [cart]);

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Checkout</h1>
        <h2 className="text-2xl">
          Total Amount: <span className="font-bold">${cartTotal.toFixed(2)}</span>
        </h2>
      </div>

      {cartTotal > 0 && (
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: Math.round(cartTotal * 100), // Convert to cents for Stripe
            currency: "usd",
          }}
        >
          <CheckoutPage amount={cartTotal} />
        </Elements>
      )}
    </main>
  );
}