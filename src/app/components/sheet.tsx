import React from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { useCart } from './cartContext';
import Link from 'next/link';
import Image from 'next/image';



const CartSheet = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="mt-4 py-2 ml-4 px-4 space-x-4 rounded-lg hover:bg-amber-100 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 border font-bold border-black">
          🛒 Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cart.length}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        {cart.length === 0 ? (
          <p className="p-4 text-center">Your cart is empty.</p>
        ) : (
          <div className="p-4">
            {cart.map((item) => {
              const discountedPrice = item.price - (item.price * (item.discountPercentage / 100));
              return (
                <div key={item._id} className="flex items-center gap-4 mb-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    <div className="flex gap-2 items-center">
                      <p className="text-sm text-gray-500 line-through">
                        $. {item.price * item.quantity}
                      </p>
                      <p className="text-sm text-green-600">
                        $. {discountedPrice * item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:underline"
                  >
                    ✕
                  </button>
                </div>
              );
            })}
            <div className="mt-4">
              <h4 className="text-lg font-semibold">Subtotal</h4>
              <p className="text-lg font-bold">
                $. {cart.reduce((total, item) => {
                  const discountedPrice = item.price - (item.price * (item.discountPercentage / 100));
                  return total + discountedPrice * item.quantity;
                }, 0).toFixed(2)}
              </p>
            </div>
            <div className="mt-6 flex gap-2">
              <button className="w-full bg-gray-200 py-2 rounded-lg hover:bg-gray-300 transition-transform duration-300 ease-in-out transform hover:scale-105 border font-bold ">
              <Link href="/cart">  View Cart </Link>
              </button>
              <button className="w-full bg-amber-100 text-white py-2 rounded-lg hover:bg-amber-200 hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-105 border font-bold ">
              <Link href="/checkout">  Checkout </Link>
              </button>
            </div>
          </div>
        )}
        <SheetClose asChild>
          <button className="mt-6 w-full bg-gray-200 py-2 rounded-md hover:bg-gray-300">
            Close
          </button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
