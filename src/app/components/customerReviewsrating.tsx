'use client'; // Add this at the top of the file

import React, { useState } from 'react';
import client from '@/sanity/lib/client';

const CustomerReviewsRating = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating && review) {
      try {
        // Create a new document in the 'review' schema
        const newReview = {
          _type: 'review', // Replace with your Sanity schema name
          rating: rating,
          review: review,
          likes: likes,
          dislikes: dislikes,
        };

        await client.create(newReview);

        setShowNotification(true);
        setRating(0);
        setReview('');
        setLikes(0);
        setDislikes(0);
      } catch (error) {
        console.error('Error submitting review:', error);
      }
    }
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg wrapper">
      <h2 className="text-2xl font-semibold text-center mb-6">Customer Reviews & Rating</h2>

      {showNotification && (
        <div className="bg-blue-500 text-white p-4 rounded-md mb-6 text-center">
          <p className="font-bold">Thank you for your review!</p>
          <p>Your rating: <strong>{rating}</strong></p>
          <p>Your review: <strong>{review}</strong></p>
        </div>
      )}

      <div className="flex justify-center items-center space-x-6 mb-6">
        <button
          className="flex items-center space-x-2 text-green-500 hover:text-green-600"
          onClick={handleLike}
        >
          <span className="text-2xl">👍</span>
          <span className="font-semibold">{likes}</span>
        </button>

        <button
          className="flex items-center space-x-2 text-red-500 hover:text-red-600"
          onClick={handleDislike}
        >
          <span className="text-2xl">👎</span>
          <span className="font-semibold">{dislikes}</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
          <div className="flex space-x-2 mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                className={`text-2xl ${rating >= star ? 'text-yellow-400' : 'text-gray-400'}`}
                onClick={() => handleRatingChange(star)}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="review" className="block text-sm font-medium text-gray-700">Your Review</label>
          <textarea
            id="review"
            name="review"
            className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Write your review here"
            rows={4}
            value={review}
            onChange={handleReviewChange}
            required
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={handleSubmit}
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerReviewsRating;