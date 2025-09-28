import React, { useEffect, useState } from "react";
import { fetchProducts, fetchProductsByCategory } from "../api";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSideBar";

export default function PLP() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  // Sidebar toggle for mobile
  const [showSidebar, setShowSidebar] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      if (category) {
        const data = await fetchProductsByCategory(category);
        setProducts(data);
      } else {
        const data = await fetchProducts(50);
        setProducts(data);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const filtered = products
    .filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortValue === "low") return a.price - b.price;
      if (sortValue === "new") return b.id - a.id;
      if (sortValue === "rating_low") return a.rating - b.rating;
      if (sortValue === "rating_high") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="flex flex-col lg:flex-row min-h-screen gap-6">
      {/* Sidebar toggle button for mobile */}
      <div className="lg:hidden flex justify-end p-4">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {showSidebar ? "Close Filters" : "Show Filters"}
        </button>
      </div>

      {/* Sidebar */}
      {(showSidebar || window.innerWidth >= 1024) && (
        <div className="flex-none w-full lg:w-60">
          <FilterSidebar
            selectedCategory={category}
            onCategoryChange={setCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortValue={sortValue}
            onSortChange={setSortValue}
          />
        </div>
      )}

      {/* Product Grid */}
      <div className="flex-1 max-h-screen overflow-auto p-4 scrollbar-none">
        <h2 className="text-2xl font-bold mb-4">All Products</h2>

        {loading ? (
          <div className="text-center py-20 text-gray-500">Loading products...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">No products found.</div>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <ProductCard products={filtered} />
          </div>
        )}
      </div>
    </div>
  );
}
