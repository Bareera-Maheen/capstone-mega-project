'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGreaterThan } from 'react-icons/fa';

const CustomerFeedback = () => {
  const [feedback, setFeedback] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setShowNotification(true);
  };

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  const handleButtonClick = (value: string) => {
    setFeedback(value); // Set the feedback value in the textarea
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg wrapper">
      <div 
        className="flex justify-center flex-col wrapper items-center w-full h-[166.5px] bg-no-repeat bg-center gap-8" 
        style={{ backgroundImage: "url('/images/13.svg')" }}
      > 
        <Image src="/images/29.svg" alt="" height={40.5} width={77}/>
        <h2 className="text-2xl font-bold ">Customer Feedback</h2>
        <h3 className="text-md flex  items-baseline gap-1">
          <Link href="/">Home</Link><FaGreaterThan /><Link href="/customerFeedback">Customer Feedback</Link>
        </h3>
      </div>
      {showNotification && (
        <div className="bg-blue-500 text-white p-4 rounded-md mb-6 text-center">
          <p className="font-bold">Thank you for your feedback!</p>
          <p>Your feedback: <strong>{feedback}</strong></p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Your Feedback</label>
          <textarea
            id="feedback"
            name="feedback"
            className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Write your feedback here"
            rows={4}
            value={feedback}
            onChange={handleFeedbackChange}
            required
          />
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <button
            type="button"
            className="px-6 py-3 text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => handleButtonClick('Excellent 😀')}
          >
            Excellent 😀
          </button>
          <button
            type="button"
            className="px-6 py-3 text-white bg-yellow-500 rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            onClick={() => handleButtonClick('Good 🙂')}
          >
            Good 🙂
          </button>
          <button
            type="button"
            className="px-6 py-3 text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => handleButtonClick('Bad ☹️')}
          >
            Bad ☹️
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerFeedback;