'use client'; // Add this at the top of the file

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // For routing

const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  // Define the list of possible pages
  const pages = [
    'checkout',
    'cart',
    'home',
    'Shop',
    'Account',
    'Blog',
    'About',
    'Contact',
    'profile',
    'customerFeedback',
    'customerReviewsRating',
    'wishlist',
  ];

  // Function to handle input change and filter suggestions
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setQuery(searchTerm);

    // Filter pages based on search term
    const filtered = pages.filter((page) =>
      page.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  // Function to handle selecting a suggestion
  const handleSuggestionClick = (page: string) => {
    router.push(`/${page}`); 
    setQuery(''); // Clear the input after selection
    setFilteredSuggestions([]); // Clear the suggestions
  };

  return (
    <div className="search-container p-8 wrapper">
      
      <input
        type="text"
        value={query}
        onChange={handleSearch} // Trigger handleSearch on change
        placeholder="Search for products or pages..."
        className="border p-2 w-full mb-4"
      />
      {/* Suggestions dropdown */}
      {filteredSuggestions.length > 0 && (
        <ul className="border border-t-0 p-2 bg-white rounded-lg shadow-md mt-2 max-h-40 overflow-y-auto">
          {filteredSuggestions.map((suggestion) => (
            <li
              key={suggestion}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.charAt(0).toUpperCase() + suggestion.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;