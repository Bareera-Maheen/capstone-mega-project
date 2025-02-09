"use client"
import { createClient } from '@sanity/client';

const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your actual project ID
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ,       // Replace with your dataset
    useCdn: false,                // Enable CDN for faster reads
    apiVersion: "2025-01-13",    // Replace with your preferred API version
});

interface ProductFilters {
    name?: string;
    category?: string;
    sort?: 'price_low_high' | 'price_high_low';
  }
  
  export const fetchProducts = async ({ name, category, sort }: ProductFilters = {}) => {
    try {
      let query = `*[_type == "product"]`;
  
      // Apply filters dynamically
      const filters: string[] = [];
  
      if (name) {
        filters.push(`name match "*${name}*"`);
      }
  
      if (category) {
        filters.push(`category == "${category}"`);
      }
  
      if (filters.length > 0) {
        query += `[${filters.join(' && ')}]`;
      }
  
      // Sorting Logic
      if (sort === 'price_low_high') {
        query += ` | order(price asc)`;
      } else if (sort === 'price_high_low') {
        query += ` | order(price desc)`;
      }
  
      query += `{
        _id,
        name,
        price,
        isFeaturedProduct,
        description,
        discountPercentage,
        "imageUrl": image.asset->url,
        tags
      }`;
  
      const products = await sanityClient.fetch(query);
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      return []; // Return an empty array on error
    }
  };
