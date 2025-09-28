import React from "react";
import CartItem from "../components/CartItem";
import CheckoutModal from "../components/CheckoutModal";
import CheckoutSidebar from "../components/Checkoutsidebar";
import { useCartPage } from "../utils/useCartPage";
import EmptyPage from "../components/EmptyPage";

export default function Cart() {
  const {
    cart,
    code,
    setCode,
    showCheckout,
    handleClose,
    handleCheckout,
    handleSubmit,
    handleRemove,
    handleQtyChange,
    subtotal,
    tax,
    discount,
    total,
  } = useCartPage();

  const emptyImage = "https://cdn-icons-png.flaticon.com/512/1170/1170678.png";

  if (cart.length === 0) {
    return (
      <EmptyPage
        title="Your Cart is Empty"
        message="You haven’t added any products yet."
        linkText="Browse Products"
        linkTo="/products"
        image={emptyImage}
      />
    );
  }
  return (
    <div className="p-4 flex flex-col lg:flex-row gap-6">
      {/* Left: Product List */}
      <div className="flex-1 space-y-3">
     <CartItem
        cart={cart}
        onRemove={handleRemove}
        onQtyChange={handleQtyChange}
      />
      </div>

      {/* Right: Checkout Sidebar */}
      <CheckoutSidebar
        subtotal={subtotal}
        tax={tax}
        discount={discount}
        total={total}
        code={code}
        setCode={setCode}
        onCheckout={handleCheckout}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        visible={showCheckout}
        onClose={() => { handleClose()}}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
