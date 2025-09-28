import React from "react";

export default function SimilarProductsCarousel({
  similarProducts,
  carouselIndex,
  visibleItems,
  prevSlide,
  nextSlide,
  goToProduct,
}) {
  return (
    <div className="relative mt-8">
      <h3 className="text-xl font-semibold mb-3">Similar Products</h3>

      <button
        onClick={prevSlide}
        disabled={carouselIndex === 0}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded disabled:opacity-50 hover:bg-gray-300"
      >
        ‹
      </button>

      <div className="flex overflow-hidden gap-4">
        {similarProducts
          .slice(carouselIndex, carouselIndex + visibleItems)
          .map((sp) => (
            <div
              key={sp.id}
              onClick={() => goToProduct(sp.id)}
              className="w-1/3 flex-shrink-0 border rounded p-2 hover:shadow-lg cursor-pointer transition"
            >
              <img
                src={sp.images[0]}
                alt={sp.title}
                className="w-full h-40 object-cover rounded"
              />
              <p className="text-sm mt-1 font-semibold">{sp.title}</p>
              <p className="text-sm text-gray-600">${sp.price}</p>
              {sp.rating && (
                <p className="text-yellow-500 text-sm">
                  {"★".repeat(Math.floor(sp.rating)) +
                    "☆".repeat(5 - Math.floor(sp.rating))}{" "}
                  ({sp.rating.toFixed(1)})
                </p>
              )}
            </div>
          ))}
      </div>

      <button
        onClick={nextSlide}
        disabled={carouselIndex >= similarProducts.length - visibleItems}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded disabled:opacity-50 hover:bg-gray-300"
      >
        ›
      </button>
    </div>
  );
}
