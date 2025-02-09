'use client'; // Add this at the top of the file

import React from 'react';
import CustomerReviewsRating from '../components/customerReviewsrating';
import Link from 'next/link';
import Image from 'next/image';
import { FaGreaterThan } from 'react-icons/fa';


const CustomerReviewsRatingPage = () => {
  return (
    <div className="container mx-auto p-8 wrapper">
      <div 
    className="flex justify-center flex-col wrapper items-center w-full h-[166.5px] bg-no-repeat bg-center gap-8" 
    style={{ backgroundImage: "url('/images/13.svg')" }}
  > <Image src="/images/29.svg" alt="" height={40.5} width={77}/>
  <h2 className="text-2xl font-bold ">Customer Reveiws</h2>
      <h3 className="text-md flex  items-baseline gap-1"><Link href="/">Home</Link><FaGreaterThan /><Link href="/customerReviewsRating">Customer Reviews Rating</Link></h3>
     
  </div>
      <h1 className="text-3xl font-semibold text-center mb-8">Customer Reviews and Ratings</h1>
      <CustomerReviewsRating />
    </div>
  );
};

export default CustomerReviewsRatingPage;
