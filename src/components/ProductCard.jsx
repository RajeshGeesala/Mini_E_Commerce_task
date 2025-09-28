import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ products }) {
  const renderStars = (rating) => {
    const filledStars = "★".repeat(Math.floor(rating));
    const emptyStars = "☆".repeat(5 - Math.floor(rating));
    return filledStars + emptyStars;
  };

  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <>
      {products.map((p) => (
        <div key={p.id} className="bg-white shadow rounded-lg p-4 flex flex-col">
          <img
            className="w-full h-40 object-cover rounded"
            src={p.thumbnail || p.images?.[0]}
            alt={p.title}
          />
          <h4 className="mt-2 font-semibold text-lg">{p.title}</h4>
          <p className="text-sm text-gray-500">{p.brand}</p>
          <p className="font-bold mt-1">${p.price}</p>

          {/* Rating */}
          {p.rating && (
            <p className="text-yellow-500 mt-1 text-sm">
              {renderStars(p.rating)} ({p.rating.toFixed(1)})
            </p>
          )}

          <Link
            to={`/products/${p.id}`}
            className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-center"
          >
            View
          </Link>
        </div>
      ))}
    </>
  );
}
