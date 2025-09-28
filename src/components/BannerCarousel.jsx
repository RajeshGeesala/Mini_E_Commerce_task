import React, { useState, useEffect } from 'react';
import banner1 from '../assets/image-1.jpeg';
import banner2 from '../assets/image-2.jpg';
import banner3 from '../assets/image-3.jpg';

const images = [banner1, banner2, banner3];

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-lg overflow-hidden">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-64 object-cover"
      />

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === current ? 'bg-white' : 'bg-gray-400'
            }`}
          ></span>
        ))}
      </div>

      {/* Prev/Next buttons */}
      <button
        onClick={() => setCurrent((current - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={() => setCurrent((current + 1) % images.length)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
}
