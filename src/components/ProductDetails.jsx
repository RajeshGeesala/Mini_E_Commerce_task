import React from "react";
import Button from "./Button";

export default function ProductDetails({
  product,
  qty,
  setQty,
  addToCart,
  wishlist,
  toggleWishlist,
}) {
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="flex-1 flex flex-col gap-4">
      <h2 className="text-3xl font-bold">{product.title}</h2>
      <p className="text-gray-600">{product.brand}</p>
      <p className="text-2xl font-bold mt-2">${product.price}</p>
      <p className="mt-4">{product.description}</p>

      <div className="flex items-center gap-3 mt-5">
        <label className="font-semibold">Qty:</label>
        <input
          type="number"
          min="1"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          className="border rounded p-2 w-20"
        />
        <Button onClick={() => addToCart({ ...product, qty })}>Add to Cart</Button>
        <Button
          onClick={() => toggleWishlist(product)}
          variant={isWishlisted ? "danger" : "secondary"}
        >
          {isWishlisted ? "♥ Wishlist" : "♡ Wishlist"}
        </Button>
      </div>
    </div>
  );
}
