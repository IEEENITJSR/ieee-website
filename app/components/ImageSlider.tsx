'use client';

import React, { useState, useEffect } from 'react';

const ImageSlider: React.FC = () => {
  const images = [
    {
      url: 'https://ieeenitjsr.netlify.app/static/media/ieee6.4af4cb7aef3eabfee3c3.jpeg',
      description: 'Description for Image 1',
    },
    {
      url: 'https://ieeenitjsr.netlify.app/static/media/ieee1.ca7fb18c5fce993bb4a6.jpg',
      description: 'Description for Image 2',
    },
    {
      url: 'https://ieeenitjsr.netlify.app/static/media/ieee3.6e4e610f412055c4d279.jpg',
      description: 'Description for Image 3',
    },
    {
      url: 'https://ieeenitjsr.netlify.app/static/media/ieee4.dd058b3a4c3d1b98a788.jpg',
      description: 'Description for Image 4',
    },
    {
      url: 'https://ieeenitjsr.netlify.app/static/media/ieee5.2ae562ce89cc5e750d65.jpg',
      description: 'Description for Image 5',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div id="indicators-carousel" className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]" data-carousel="static">
        <div className="relative overflow-hidden h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              data-carousel-item={index === currentIndex ? 'active' : undefined}
            >
              <img
                src={image.url}
                className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              aria-current={index === currentIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-gray-800 dark:text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-gray-800 dark:text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div className="mx-auto p-4 text-center text-sm sm:text-base">
        {images[currentIndex].description}
      </div>
    </>
  );
};

export default ImageSlider;