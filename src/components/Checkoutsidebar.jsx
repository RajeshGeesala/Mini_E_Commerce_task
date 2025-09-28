import React from "react";

export default function CheckoutSidebar({
  subtotal,
  tax,
  discount,
  total,
  code,
  setCode,
  onCheckout,
}) {
  return (
    <div className="w-full lg:w-1/3 flex-shrink-0">
      <div className="sticky top-20 space-y-4">
        <div className="p-4 bg-white shadow rounded space-y-2">
          <input
            placeholder="Promo code (try SAVE10)"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="border rounded p-2 w-full"
          />
          <p>Discount: ${discount.toFixed(2)}</p>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Tax (5%): ${tax.toFixed(2)}</p>
          <p className="font-bold">Total: ${total.toFixed(2)}</p>
        </div>
        <button
          onClick={onCheckout}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
