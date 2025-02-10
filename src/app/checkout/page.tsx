"use client";
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from "react";
import { useCart } from "../components/cartContext";
import client from "@/sanity/lib/client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaGreaterThan } from 'react-icons/fa';
import Image from 'next/image';

const Checkout: React.FC = () => {
  const { cart } = useCart();

  // State for customer details
  const [customerDetails, setCustomerDetails] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    countryRegion: "",
    streetAddress: "",
    townCity: "",
    ZipCode: "",
    PhNumber: "",
    Email: "",
    Additional_Info: "",
    paymentMethod: "",
  });

  // State for errors
  const [error, setError] = useState<string | null>(null);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };
  
const router = useRouter()

const handlePlaceOrder = async () => {
  if (!customerDetails.paymentMethod) {
    alert("Please select a payment method.");
    return;
  }

  const orderDetails = {
    _type: "order",
    ...customerDetails,
    orderDetails: cart.map((item) => ({
      _type: "object",
      _key: uuidv4(),
      productId: item._id,
      quantity: item.quantity,
      discountedPrice: item.price - (item.price * item.discountPercentage) / 100,
    })),
    subtotal: cart.reduce(
      (total, item) =>
        total + (item.price - (item.price * item.discountPercentage) / 100) * item.quantity,
      0
    ),
    total: cart.reduce(
      (total, item) =>
        total + (item.price - (item.price * item.discountPercentage) / 100) * item.quantity,
      0
    ),
    status: "pending",
    paymentMethod: customerDetails.paymentMethod, // ✅ Ensure this is stored
  };

  try {
    const response = await client.create(orderDetails);
    console.log("Order saved successfully:", response);

    if (customerDetails.paymentMethod === "Debit Card") {
      // ✅ Redirect to Stripe AFTER storing the order
      router.push("/checkout/payment");
    } else {
      // ✅ Show confirmation for Cash on Delivery
      alert("Order placed successfully!");
    }
  } catch (error) {
    console.error("Error saving order:", error);
    setError("An unknown error occurred. Please try again.");
  }
};



  return (
    <div className="p-6 max-w-screen-xl mx-auto">
    
      
    <div 
        className="flex justify-center flex-col wrapper items-center w-full h-[166.5px] bg-no-repeat bg-center gap-8" 
        style={{ backgroundImage: "url('/images/13.svg')" }}
      > 
        <Image src="/images/29.svg" alt="" height={40.5} width={77}/>
        <h2 className="text-2xl font-bold ">Checkout</h2>
        <h3 className="text-md flex  items-baseline gap-1">
          <Link href="/">Home</Link><FaGreaterThan /><Link href="/checkout">checkout</Link>
        </h3>
      </div>
      {error && <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">{error}</div>}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Billing Details */}
        <div className="w-full lg:w-2/3">
          <h3 className="text-xl font-semibold mb-4">Billing Details</h3>
          <form>
            {["firstName", "lastName", "companyName", "countryRegion", "streetAddress", "townCity", "ZipCode", "PhNumber", "Email", "Additional_Info"].map((field) => (
              <div key={field} className="mb-4">
                <label className="block font-medium mb-2">{field.replace(/([A-Z])/g, " $1")}</label>
                <input
                  type={field === "Email" ? "email" : "text"}
                  name={field}
                  value={customerDetails[field as keyof typeof customerDetails]}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
            ))}
          </form>
        </div>

        {/* Product Summary */}
        <div className="w-full lg:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Product Summary</h3>
          <div className="bg-amber-100 p-4 rounded-md">
            {cart.map((item) => {
              const discountedPrice = item.price - (item.price * item.discountPercentage) / 100;
              return (
                <div key={item._id} className="mb-4">
                  <div className="flex justify-between">
                    <span>{item.name} × {item.quantity}</span>
                    <span>$ {discountedPrice.toFixed(2)}</span>
                  </div>
                </div>
              );
            })}

            <div className="flex justify-between font-medium mb-2">
              <span>Subtotal</span>
              <span>$ {cart.reduce((total, item) => total + (item.price - (item.price * item.discountPercentage) / 100) * item.quantity, 0).toFixed(2)}</span>
            </div>

            <div className="flex justify-between font-medium text-lg mb-4">
              <span>Total</span>
              <span>$ {cart.reduce((total, item) => total + (item.price - (item.price * item.discountPercentage) / 100) * item.quantity, 0).toFixed(2)}</span>
            </div>

            {/* Payment Methods */}
            <h4 className="font-semibold mb-2">Payment Methods</h4>
            {["Debit Card", "Cash on Delivery"].map((method) => (
              <div key={method} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={customerDetails.paymentMethod === method}
                    onChange={(e) =>
                      setCustomerDetails((prevDetails) => ({
                        ...prevDetails,
                        paymentMethod: e.target.value,
                      }))
                    }
                    className="mr-2"
                  />
                  {method}
                </label>
              </div>
            ))}

           {/* Conditional Buttons */}
           {customerDetails.paymentMethod === "Debit Card" ? (
  <button
    className="w-full mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    onClick={handlePlaceOrder}
  >
    Proceed to Payment
  </button>
) : (
  <button
    className="w-full mt-4 py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800"
    onClick={handlePlaceOrder}
  >
    Place Order
  </button>
)}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
