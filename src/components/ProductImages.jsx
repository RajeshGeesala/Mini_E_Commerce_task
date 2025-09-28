import React from "react";

export default function ProductImages({ images, currentImage, setCurrentImage }) {
  return (
    <div className="relative">
      <img
        src={images[currentImage]}
        alt="Product"
        className="w-full h-[400px] object-cover rounded-lg shadow"
      />
      <div className="flex gap-2 mt-2 justify-center">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={idx}
            onClick={() => setCurrentImage(idx)}
            className={`w-16 h-16 rounded cursor-pointer border ${
              currentImage === idx ? "border-blue-600" : "border-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
