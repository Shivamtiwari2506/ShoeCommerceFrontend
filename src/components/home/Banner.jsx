import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className=" mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:flex lg:items-center lg:justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight animate-fade-in-down">
            Stride in Monochrome
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 animate-fade-in-up">
            Explore our curated collection of stylish, timeless footwear designed for every step.
          </p>
          <div className="mt-8 flex space-x-4">
            <Link
              to="/shop"
              className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition transform hover:scale-105"
            >
              Discover Now
            </Link>
            <Link
              to="/shop"
              className="inline-block border border-gray-300 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition transform hover:scale-105"
            >
              New Arrivals
            </Link>
          </div>
        </div>
        {/* Image Content */}
        <div className="mt-10 lg:mt-0 lg:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale"
            alt="Monochrome sneakers"
            className="w-full h-auto object-cover rounded-lg shadow-2xl filter grayscale transform transition duration-500 hover:scale-105 "
          />
          {/* Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
        </div>
      </div>
      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
  <svg
    className="w-full h-20 text-gray-300"
    fill="currentColor"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" />
  </svg>
</div>

    </section>
  );
};

export default Banner;