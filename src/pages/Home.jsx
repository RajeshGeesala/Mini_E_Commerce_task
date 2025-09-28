import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../api'
import ProductCard from '../components/ProductCard'
import FeaturedCategories from '../components/FeaturedCategory'
import BannerCarousel from '../components/BannerCarousel'

export default function Home() {
  const [trendingProducts, setTrendingProducts] = useState([]);

     const loadTrending = async () => {
      try {
        const products = await fetchProducts(12);
        setTrendingProducts(products);
      } catch (error) {
        console.error("Failed to fetch trending products:", error);
      }
    };

  useEffect(() => {
    loadTrending();
  }, []);
  return (
    <div>
      <div className="p-10 rounded-lg text-center text-2xl font-bold">
        <BannerCarousel/>
      </div>
     <FeaturedCategories/>
      <h3 className="text-xl font-semibold mt-8 mb-4">Trending Products</h3>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {/* Re-usable product card component */}
      <ProductCard products={trendingProducts} />
      </div>
    </div>
  )
}
