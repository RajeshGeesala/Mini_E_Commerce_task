import React, { useEffect, useState } from "react";
import { fetchCategories } from "../api";

export default function FilterSidebar({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortValue,
  onSortChange,
}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data.slice(0, 10));
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    getCategories();
  }, []);

  return (
    <div className="border p-4 rounded-lg bg-white shadow-md w-full lg:w-60 max-h-screen lg:sticky lg:top-4 overflow-auto">
      <h3 className="font-bold mb-3 text-lg">Search</h3>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <h3 className="font-bold mb-3 text-lg">Sort</h3>
      <select
        value={sortValue}
        onChange={(e) => onSortChange(e.target.value)}
        className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Sort By</option>
        <option value="low">Price Low → High</option>
        <option value="new">Newest</option>
        <option value="rating_low">Rating Low → High</option>
        <option value="rating_high">Rating High → Low</option>
      </select>

      <h3 className="font-bold mb-3 text-lg">Categories</h3>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => onCategoryChange(category.slug)}
            className={`text-left p-2 rounded ${
              selectedCategory === category.slug
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
