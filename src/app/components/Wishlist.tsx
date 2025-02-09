'use client';

import Image from 'next/image';
import React, { createContext, useContext, useState } from 'react';

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToWishlist = (product: Product) => {
    if (!wishlist.find((item) => item._id === product._id)) {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within a WishlistProvider');
  return context;
};

const Wishlist: React.FC = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg wrapper">
      <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in the wishlist.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((product) => (
              <tr key={product._id}>
                <td className="border px-4 py-2">
                  <Image src={product.imageUrl} alt={product.name} width={50} height={50} className="w-16 h-16 object-cover" />
                </td>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Wishlist;