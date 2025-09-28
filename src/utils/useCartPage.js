import { useState } from "react";
import { useCart as useCartStorage } from "../utils/cart"; // Custom hook for cart logic
import toast from "react-hot-toast";

// Hook to manage cart page state and logic
export function useCartPage() {
  // Get cart and helper functions from global cart hook
  const { cart, updateQty, remove } = useCartStorage();

  // State for discount code input
  const [code, setCode] = useState("");

  // State to toggle checkout modal visibility
  const [showCheckout, setShowCheckout] = useState(false);

  // Calculate discount based on code
  const discount = code === "SAVE10" ? 10 : 0;

  // Calculate subtotal of all items in cart
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  // Calculate tax (5% of subtotal)
  const tax = subtotal * 0.05;

  // Calculate total amount after discount and tax
  const total = subtotal - discount + tax;

  // Show checkout modal
  const handleCheckout = () => setShowCheckout(true);

  // Handle order submission
  const handleSubmit = () => {
    setShowCheckout(false); // Close modal
    toast.success("Order placed successfully!"); // Show success toast
  };

  // Close checkout modal without submitting
  const handleClose = () => {
    setShowCheckout(false);
  };

  // Remove an item from cart
  const handleRemove = (item) => {
    remove(item.id);
  };

  // Update quantity of an item in the cart
  const handleQtyChange = (id, qty) => {
    updateQty(id, qty);
  };

  // Return all state and functions needed by the cart page
  return {
    cart,
    code,
    setCode,
    showCheckout,
    handleCheckout,
    handleSubmit,
    handleRemove,
    handleQtyChange,
    handleClose,
    subtotal,
    tax,
    discount,
    total,
  };
}
