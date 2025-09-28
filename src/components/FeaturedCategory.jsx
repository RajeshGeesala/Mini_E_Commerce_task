import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../api';

export default function FeaturedCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data.slice(0, 4)); // only take first 4 categories
      } catch (err) {
        console.error('Failed to fetch categories:', err);
      }
    };

    getCategories();
  }, []);

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Featured Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category?.slug}
            className="flex items-center justify-center h-32 bg-gradient-to-br from-indigo-400 to-purple-500 text-white cursor-default rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <span className="text-lg font-semibold capitalize">{category?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
