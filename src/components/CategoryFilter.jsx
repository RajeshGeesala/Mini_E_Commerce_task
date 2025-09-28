import React, { useEffect, useState } from "react";
import { fetchCategories } from "../api";

export default function CategoryFilter({ selected, onSelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then((res) => {
        const catStrings = res.map((c) => (typeof c === "string" ? c : c.name || c.slug));
        setCategories(catStrings);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="bg-white shadow rounded p-4 mb-6">
      <h3 className="font-bold mb-2">Filter by Category</h3>
      <ul className="space-y-1">
        <li key="all">
          <button
            onClick={() => onSelect("")}
            className={`block w-full text-left px-2 py-1 rounded ${
              selected === "" ? "bg-blue-600 text-white" : "hover:bg-gray-100"
            }`}
          >
            All
          </button>
        </li>
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => onSelect(cat)}
              className={`block w-full text-left px-2 py-1 rounded ${
                selected === cat
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
