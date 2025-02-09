// 'use client';
// import React, { useEffect, useState } from 'react';
// import { SlidersHorizontal } from 'lucide-react';
// import { HiOutlineViewGrid } from "react-icons/hi";
// import { RxDividerVertical } from "react-icons/rx";
// import { BsViewList } from "react-icons/bs";
// import Image from 'next/image';
// import Banner from '../components/banner';
// import Link from 'next/link';
// import Feature from '../components/Feature';
// import { fetchProducts } from '../components/product';
// import { useWishlist } from '../components/Wishlist';

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   imageUrl: string;
//   rating: number; // Added rating field
// }

// const Shop = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const { addToWishlist } = useWishlist();

//   useEffect(() => {
//     const getProducts = async () => {
//       const data = await fetchProducts();
//       setProducts(data);
//     };
//     getProducts();
//   }, []);

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     product.description.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // State for holding product ratings
//   const [ratings, setRatings] = useState<{ [key: string]: number }>({});

//   const handleStarClick = (productId: string, star: number) => {
//     setRatings(prevRatings => ({
//       ...prevRatings,
//       [productId]: star
//     }));
//   };

//   // Function to render rating stars
//   const renderStars = (productId: string, rating: number) => {
//     const totalStars = 5;
//     const filledStars = Math.round(rating);
//     const stars = [];

//     for (let i = 1; i <= totalStars; i++) {
//       stars.push(
//         <span
//           key={i}
//           onClick={() => handleStarClick(productId, i)}
//           className={`cursor-pointer text-3xl ${i <= (ratings[productId] || filledStars) ? 'text-yellow-400' : 'text-gray-300'}`}
//         >
//           ★
//         </span>
//       );
//     }

//     return stars;
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <header className="relative bg-cover bg-center h-60">
//         <Banner />
//         <div className="absolute inset-0 bg-black bg-opacity-30"></div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center mt-[221px] text-white text-center">
//           <h1 className="text-5xl font-bold">Shop</h1>
//           <p className="text-xl mt-4">
//             <Link href="/">Home</Link> &gt; Shop
//           </p>
//         </div>
//       </header>

//       <section className="flex justify-evenly w-full h-[100px] bg-[#FAF4F4] mt-[47px]">
//         <div className="flex items-center gap-5">
//           <SlidersHorizontal size={28} />
//           <h6 className="text-[20px] ml-2">Filter</h6>
//           <HiOutlineViewGrid size={28} />
//           <BsViewList size={28} />
//           <RxDividerVertical size={28} />
//           <h2 className="text-[16px] font-semibold">Showing {filteredProducts.length} results</h2>
//         </div>
//       </section>

//       <main className="px-4 py-6">
//         <div className="bg-white rounded-lg p-6 shadow-md">
//           <h2 className="text-2xl font-bold text-black mb-4">All Products</h2>

//           {/* Search bar */}
//           <div className="mb-6">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search for a product"
//               className="w-full p-3 border rounded-lg"
//             />
//           </div>

//           <div className="grid grid-cols-3 gap-6">
//             {filteredProducts.map((product) => (
//               <div key={product._id} className="text-left flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
//                 <Link href={`/shop/${product._id}`} key={product._id}>
//                 <div className="w-full h-[350px] relative">
//                   <Image
//                     src={product.imageUrl}
//                     alt={product.name}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
//                   />
//                 </div>
//                 <p className="text-3xl font-semibold text-gray-800 mt-4">{product.name}</p>
//                 <p className="text-2xl text-gray-500 line-clamp-1">{product.description}</p>
//                 <p className="text-xl font-semibold text-black">${product.price}</p>
//                 <button
//                   className="mt-2 p-2 bg-red-500 text-white rounded-lg"
//                   onClick={() => addToWishlist(product)}
//                 >
//                   ♥ Add to Wishlist
//                 </button>

//                 {/* Rating Stars */}
//                 <div className="flex items-center mt-2">
//                   {renderStars(product._id, product.rating)}
//                 </div>
//                 </Link>
//               </div>
              
//             ))}
//           </div>

//           {/* Customer Rating and Review Button */}
//           <div className="mt-10">
//             <h3 className="text-3xl font-bold text-purple-600 mb-4">Customer Rating and Review</h3>
//             <Link href="/customerReviewsRating">
//               <button className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
//                 Go to Customer Reviews and Ratings
//               </button>
//             </Link>
//           </div>
//         </div>
//       </main>

//       <Feature />
//     </div>
//   );
// };

// export default Shop;


'use client';
import React, { useEffect, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { HiOutlineViewGrid } from "react-icons/hi";
import { RxDividerVertical } from "react-icons/rx";
import { BsViewList } from "react-icons/bs";
import Image from 'next/image';

import Link from 'next/link';

import { fetchProducts } from '../components/product';
import { useWishlist } from '../components/Wishlist';
import { FaGreaterThan } from 'react-icons/fa';

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  rating: number;
  category?: string;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [sort, setSort] = useState<'price_low_high' | 'price_high_low'>('price_low_high');
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts({ name: searchQuery, category, sort });
      setProducts(data);
    };
    getProducts();
  }, [searchQuery, category, sort]);

  const [ratings, setRatings] = useState<{ [key: string]: number }>({});

  const handleStarClick = (productId: string, star: number, e: React.MouseEvent) => {
    e.preventDefault();
    setRatings(prevRatings => ({
      ...prevRatings,
      [productId]: star
    }));
  };

  const renderStars = (productId: string, rating: number) => {
    const totalStars = 5;
    const filledStars = Math.round(rating);
    return Array.from({ length: totalStars }, (_, i) => (
      <span
        key={i}
        onClick={(e) => handleStarClick(productId, i + 1, e)}
        className={`cursor-pointer text-xl md:text-2xl ${i < (ratings[productId] || filledStars) ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };


  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="relative bg-cover bg-center h-60">
      <div 
    className="flex justify-center flex-col wrapper items-center w-full h-[166.5px] bg-no-repeat bg-center gap-8" 
    style={{ backgroundImage: "url('/images/13.svg')" }}
  > <Image src="/images/29.svg" alt="" height={40.5} width={77}/>
  <h2 className="text-2xl font-bold ">Shop</h2>
      <h3 className="text-md flex  items-baseline gap-1"><Link href="/">Home</Link><FaGreaterThan /><Link href="/shop">Shop</Link></h3>
     
  </div>
       
      </header>

      <section className="flex justify-evenly w-full h-[100px] bg-[#FAF4F4] mt-[47px]">
        <div className="flex items-center gap-5">
          <SlidersHorizontal size={28} />
          <h6 className="text-[20px] ml-2">Filter</h6>
          <HiOutlineViewGrid size={28} />
          <BsViewList size={28} />
          <RxDividerVertical size={28} />
          <h2 className="text-[16px] font-semibold">Showing {products.length} results</h2>
        </div>
        <div className="flex items-center gap-5">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="">All Categories</option>
            <option value="Sofa">Sofa</option>
            <option value="Bed">Bed</option>
            <option value="Chair">Chair</option>
            <option value="Table">Table</option>
            {/* Add more categories as needed */}
          </select>
          <select
  value={sort}
  onChange={(e) => setSort(e.target.value as 'price_low_high' | 'price_high_low')}
  className="p-2 border rounded-lg"
>
  <option value="">Default</option>
  <option value="price_low_high">Price: Low to High</option>
  <option value="price_high_low">Price: High to Low</option>
</select>
        </div>
      </section>

      <main className="px-4 py-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold text-black mb-4">All Products</h2>

          {/* Search bar */}
          <div className="mb-6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a product"
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <div className="grid grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product._id} className="text-left flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
                <Link href={`/shop/${product._id}`} key={product._id}>
                <div className="w-full h-[350px] relative">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
                <p className="text-3xl font-semibold text-gray-800 mt-4">{product.name}</p>
                <p className="text-2xl text-gray-500 line-clamp-1">{product.description}</p>
                <p className="text-xl font-semibold text-black">${product.price}</p>
                <button
                  className="mt-2 p-2 bg-red-500 text-white rounded-lg"
                  onClick={() => addToWishlist(product)}
                >
                  ♥ Add to Wishlist
                </button>

                {/* Rating Stars */}
                <div className="flex items-center mt-2">
                  {renderStars(product._id, product.rating)}
                </div>
                </Link>
              </div>
              
            ))}
          </div>

          {/* Customer Rating and Review Button */}
          <div className="mt-10">
            <h3 className="text-3xl font-bold text-purple-600 mb-4">Customer Rating and Review</h3>
            <Link href="/customerReviewsRating">
              <button className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
                Go to Customer Reviews and Ratings
              </button>
            </Link>
          </div>
        </div>
      </main>

      <section className="py-12 flex bg-[#FAF4F4]   wrapper ">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Free Delivery Section */}
          <div className="bg-[#FAF4F4] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-black">Free Delivery</h3>
            <p className="text-gray-700 mt-2">
              For all orders over $50, consectetur adipim scing elit.
            </p>
          </div>

          {/* 90 Days Return Section */}
          <div className="bg-[#FAF4F4] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-black">90 Days Return</h3>
            <p className="text-gray-700 mt-2">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>

          {/* Secure Payment Section */}
          <div className="bg-[#FAF4F4] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-black">Secure Payment</h3>
            <p className="text-gray-700 mt-2">
              100% secure payment, consectetur adipim scing elit.
            </p>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default Shop;