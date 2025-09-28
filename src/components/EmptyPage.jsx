import React from "react";
import { Link } from "react-router-dom";

export default function EmptyPage({ title = "Nothing here", message, linkText = "Go Shopping", linkTo = "/products", image }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 p-4 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{title}</h2>
      {message && <p className="text-gray-600 text-sm sm:text-base">{message}</p>}
      <Link
        to={linkTo}
        className="px-6 py-3 text-sm sm:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {linkText}
      </Link>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-32 sm:w-48 h-32 sm:h-48 mt-4 opacity-50"
        />
      )}
    </div>
  );
}
