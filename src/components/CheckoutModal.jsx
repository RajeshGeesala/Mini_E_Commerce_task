import React from "react";

export default function CheckoutModal({ visible, onClose, onSubmit }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-11/12 sm:w-1/2">
        <h3 className="text-xl font-bold mb-4">Checkout</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="flex flex-col gap-3"
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="border rounded p-2 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="border rounded p-2 w-full"
          />
          <input
            type="text"
            placeholder="Address"
            required
            className="border rounded p-2 w-full"
          />
          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
