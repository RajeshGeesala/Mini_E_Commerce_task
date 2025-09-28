import { useState, useEffect } from "react";
import toast from "react-hot-toast";

// Key used to store cart data in localStorage
const CART_KEY = "mini_ecom_cart_v1";

// Helper function to read cart from localStorage safely
function readCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    // Return empty array if parsing fails
    return [];
  }
}

// Custom hook to manage shopping cart
export function useCart() {
  // Initialize cart state from localStorage
  const [cart, setCart] = useState(readCart());

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  // Function to add a product to cart
  function addToCart(product) {
    setCart((prev) => {
      // Check if product already exists in cart
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        toast.success(`Increased quantity of ${product.title}`);
        // Increase quantity of existing product
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + (product.qty || 1) } : p
        );
      }
      // Add new product to cart
      toast.success(`${product.title} added to cart`);
      return [...prev, { ...product, qty: product.qty || 1 }];
    });
  }

  // Function to update quantity of a product in the cart
  function updateQty(id, qty) {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: qty > 0 ? qty : 1 } : p))
    );
  }

  // Function to remove a product from the cart
  function remove(id) {
    setCart((prev) => {
      const removedProduct = prev.find((p) => p.id === id);
      if (removedProduct) toast.error(`${removedProduct.title} removed from cart`);
      return prev.filter((p) => p.id !== id);
    });
  }

  return { cart, addToCart, updateQty, remove };
}

// Custom hook to manage wishlist
export function useWishlist() {
  // Initialize wishlist state from localStorage
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Function to toggle product in wishlist
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.includes(product.id)) {
        // Remove from wishlist
        toast(`Removed ${product.title} from wishlist`);
        return prev.filter((i) => i !== product.id);
      } else {
        // Add to wishlist
        toast.success(`${product.title} added to wishlist`);
        return [...prev, product.id];
      }
    });
  };

  return { wishlist, toggleWishlist };
}
