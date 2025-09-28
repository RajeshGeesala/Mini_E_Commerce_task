import React, { useEffect, useState } from "react";
import { fetchProducts, fetchProductsByCategory } from "../api";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSideBar";

export default function PLP() {
  // State for all products
  const [products, setProducts] = useState([]);

  // State for search input
  const [searchQuery, setSearchQuery] = useState("");

  // State for selected sort option
  const [sortValue, setSortValue] = useState("");

  // State for selected category
  const [category, setCategory] = useState("");

  // Loading state
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true); // Start loading
      if (category) {
        // Fetch products filtered by selected category
        const data = await fetchProductsByCategory(category);
        setProducts(data);
      } else {
        // Fetch default number of products
        const data = await fetchProducts(50);
        setProducts(data);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Fetch products on initial load and whenever category changes
  useEffect(() => {
    fetchData();
  }, [category]);

  // Filter and sort products based on search and sort criteria
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
    <div className="flex min-h-screen gap-6">
      {/* Sidebar for filters */}
      <div className="flex-none">
        <FilterSidebar
          selectedCategory={category}      
          onCategoryChange={setCategory} 
          searchQuery={searchQuery}         
          onSearchChange={setSearchQuery}  
          sortValue={sortValue}             
          onSortChange={setSortValue}      
        />
      </div>

      {/* Product grid */}
      <div className="flex-1 max-h-screen overflow-auto p-4 scrollbar-none">
        <h2 className="text-2xl font-bold mb-4">All Products</h2>

        {loading ? (
          <div className="text-center py-20 text-gray-500">Loading products...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">No products found.</div>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Pass filtered products as prop to ProductCard component */}
            <ProductCard products={filtered}/> 
          </div>
        )}
      </div>
    </div>
  );
}
