"use client"
import React from 'react';
import { useCart } from '../components/cartContext';
import Link from 'next/link';
import Image from 'next/image';
import { FaGreaterThan } from 'react-icons/fa';


const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();



  const discountedTotal = cart.reduce((total, item) => {
    const discountedPrice = item.price - (item.price * (item.discountPercentage / 100));
    return total + discountedPrice * item.quantity;
  }, 0);

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      
      <div 
    className="flex justify-center flex-col wrapper items-center w-full h-[166.5px] bg-no-repeat bg-center gap-8" 
    style={{ backgroundImage: "url('/images/13.svg')" }}
  > <Image src="/images/29.svg" alt="" height={40.5} width={77}/>
  <h2 className="text-2xl font-bold ">Cart</h2>
      <h3 className="text-md flex  items-baseline gap-1"><Link href="/">Home</Link><FaGreaterThan /><Link href="/cart">Cart</Link></h3>
     
  </div>
      
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex gap-6">
          <div className="w-2/3">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left">Product</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">Quantity</th>
                  <th className="px-4 py-2 text-left">Subtotal</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const discountedPrice = item.price - (item.price * (item.discountPercentage / 100));
                  return (
                    <tr key={item._id} className="border-b">
                      <td className="px-4 py-2">
                        <div className="flex items-center">
                          <Image src={item.imageUrl} alt={item.name} width={50} height={50} className="w-12 h-12 object-cover rounded-md mr-4" />
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-2">$. {item.price}</td>
                      <td className="px-4 py-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                            className="px-2 py-1 bg-gray-300 rounded-md"
                          >
                            +
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item._id, item.quantity - 1)}
                            className="px-2 py-1 bg-gray-300 rounded-md"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-2">$. {(discountedPrice * item.quantity).toFixed(2)}</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="px-4 py-2 bg-red-500 text-white rounded-md"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="w-1/3 bg-amber-100 p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-4">Cart Totals</h3>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Subtotal</span>
              <span className="font-medium">$. {discountedTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-medium">Total</span>
              <span className="font-medium text-lg">$. {discountedTotal.toFixed(2)}</span>
            </div>
            <div className="flex gap-4">
              <Link href="/checkout"
                className="w-full mt-4 py-2 ml-4 px-4 space-x-4 text-center text-black rounded-lg hover:bg-black hover:text-white object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 border font-bold border-black">
              
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
