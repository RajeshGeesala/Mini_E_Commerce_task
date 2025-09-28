import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import PLP from './pages/PLP';
import PDP from './pages/PDP';
import Cart from './pages/Cart';
import { useCart } from './utils/cart';
import Navbar from './components/Navbar';
import { WishlistPage } from './pages/WishlistPage';
import { Toaster } from 'react-hot-toast';
import NotFound from './pages/NotFound';

export default function App() {

  return (
    <div>
      {/* Navbar is displayed on all pages */}
      <Navbar/>

      {/* Main content container */}
      <main className="max-w-6xl mx-auto p-4">

        {/* Toast notifications container */}
        <Toaster 
          position="top-right" 
          reverseOrder={false}    
          toastOptions={{ duration: 1000 }} 
        />

        {/* Application routes */}
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* Product Listing Page */}
          <Route path="/products" element={<PLP />} />

          {/* Product Details Page with dynamic product id */}
          <Route path="/products/:id" element={<PDP />} />

          {/* Shopping Cart Page */}
          <Route path="/cart" element={<Cart />} />

          {/* Wishlist Page */}
          <Route path="/wishlist" element={<WishlistPage/>} />

          {/* 404 Page for unmatched routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
