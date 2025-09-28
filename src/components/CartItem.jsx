import React from "react";

export default function CartItem({ cart, onRemove, onQtyChange }) {
  return (
    <div className="flex-1 space-y-3">
      {cart.map((item) => (
        <div key={item.id} className="flex items-center gap-4 bg-white shadow p-4 rounded">
          <img
            src={item.thumbnail || item.images?.[0]}
            alt={item.title}
            className="w-24 h-24 object-cover rounded"
          />
          <div className="flex-1">
            <p className="font-semibold">{item.title}</p>
            <p className="text-gray-500">${item.price}</p>
            <div className="flex items-center gap-2 mt-1">
              <input
                type="number"
                min="1"
                value={item.qty}
                onChange={(e) => onQtyChange(item.id, Number(e.target.value))}
                className="border rounded p-1 w-20"
              />
              <button
                onClick={() => onRemove(item)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
