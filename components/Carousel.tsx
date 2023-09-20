// components/Carousel.js
'use client'
import React, { useState } from 'react';

const images = [
  'flag.jpeg',
  'file.jpeg',
  'shopoth.jpeg',
  // Add more image URLs here
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            className="h-auto max-h-96 w-full transition-transform duration-300 transform hover:scale-110"
            src={`${images[currentImage]}`}
            alt={` ${currentImage + 1}`}
          />
        </div>
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
        >
          Previous
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
