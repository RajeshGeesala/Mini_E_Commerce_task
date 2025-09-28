import React, { useEffect, useState } from "react";
import { fetchProduct } from "../api";
import { Link } from "react-router-dom";
import { useWishlist } from "../utils/cart";
import HeartImage from "../assets/heart.png";
import EmptyPage from "./EmptyPAge";

export default function WishlistComponent() {
  const { wishlist, toggleWishlist } = useWishlist();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const loadProducts = async () => {
      if (wishlist.length === 0) {
        setProducts([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const prods = await Promise.all(
          wishlist.map((id) => fetchProduct(id))
        );
        setProducts(prods);
      } catch (err) {
        console.error("Failed to fetch wishlist products:", err);
        setError("Failed to load wishlist products. Please try again.");
      } finally {
        setLoading(false);
      }
    };
  useEffect(() => {
    loadProducts();
  }, [wishlist]);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-600">
        Loading your wishlist...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-600">
        {error}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <EmptyPage
        title="Your Wishlist is Empty"
        message="You haven’t added any products yet."
        linkText="Browse Products"
        linkTo="/products"
        image={HeartImage}
      />
    );
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
          <div className="mt-auto flex gap-2">
            <Link
              to={`/products/${p.id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded text-center flex-1"
            >
              View
            </Link>
            <button
              onClick={() => toggleWishlist(p)}
              className="bg-red-600 hover:bg-red-700 text-white py-1 px-2 rounded"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
