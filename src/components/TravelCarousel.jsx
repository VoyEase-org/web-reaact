import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import place1 from '../assets/img/place1.jpg';
import place2 from '../assets/img/place2.jpg';
import place3 from '../assets/img/place3.jpg';
import place4 from '../assets/img/place2.jpg';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const images = [place1, place2, place3, place4];

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    const totalSlides = isMobile ? images.length - 1 : images.length - 3;
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    const totalSlides = isMobile ? images.length - 1 : images.length - 3;
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides : prevIndex - 1));
  };

  return (
    <>
      <div className="carousel-container relative w-full max-w-screen-xl mx-auto mt-12 h-[18cm] md:h-[20cm] overflow-hidden pb-0">
        <div
          className="carousel-inner flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / (isMobile ? 1 : 3))}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="carousel-item w-full sm:w-full md:w-1/3 flex-shrink-0 px-4 sm:px-6 md:px-8 lg:px-10 py-6"
            >
              <img
                src={image}
                alt={`Place ${index + 1}`}
                className="w-full h-[10cm] sm:h-[12cm] md:h-[13cm] lg:h-[12cm] object-cover rounded-2xl shadow-xl"
              />
             
              {index === 0 && (
                <div className="mt-4 text-center">
                  <h2 className="text-2xl sm:text-2xl font-semi-bold mb-2">Explore with Tour Buddies</h2>
                  <h3 className="text-lg sm:text mb-4">Your Friends in Every Destination</h3>
                  <p className="text-lg:text-gray-800 sm:text-gray-800 mb-4">
                  At Tour Buddies, we don’t just guide you — we journey with you, like a trusted friend. Our goal is to make your travel experience personal, fun, and unforgettable. Whether you’re uncovering hidden gems or navigating popular spots, we’re by your side, sharing stories, local insight, and the best tips for an authentic adventure.
                  </p>
                </div>
              )}
              {index === 2 && (
                <div className="mt-4 text-center">
                  <h4 className="text-2xl sm:text-2xl font-semi-bold mb-2">THE BEST TOUR GUIDES ARE HERE</h4>
                  <p className="text-lg:text-gray-800 sm:text-gray-800 mb-4">
                    Unbeatable Tours at Unmatched Prices. Explore hidden gems, shop for unique finds, and uncover the best-kept secrets with our local tour guides. Turn every journey into an unforgettable adventure. Ready to embark? Let’s go!
                  </p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 focus:outline-none">
                      DOWNLOAD THE APP
                    </button>
                    <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 focus:outline-none">
                      BOOK NOW
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          className="absolute left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 sm:p-4 rounded-full hover:bg-gray-600 focus:outline-none shadow-lg"
          onClick={prevSlide}
        >
          <FaArrowLeft />
        </button>

        {/* Right Arrow */}
        <button
          className="absolute right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 sm:p-4 rounded-full hover:bg-gray-600 focus:outline-none shadow-lg"
          onClick={nextSlide}
        >
          <FaArrowRight />
        </button>
      </div>
    </>
  );
};

export default ImageCarousel;
