import React from 'react';
import backgroundImage from '../assets/img/background.jpg';

const Hero = () => {
  return (
    <div 
      id="home" 
      className='relative bg-cover bg-center min-h-screen' 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-10'></div>

      <div className='relative z-10 flex flex-col justify-center items-center text-white text-center h-full'>
        <div className='mt-36'>
          <h1 className='text-4xl font-serif italic mb-4'>Trips Now Easy</h1>
          <h2 className='text-5xl font-bold font-sans'>PLAN YOUR NEXT TOUR</h2>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-lg mt-8 flex flex-col sm:flex-row gap-4">
          <a href="https://mobile.voyease.in/" target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-black hover:bg-orange-700 hover:outline hover:outline-2 hover:outline-white transition-all hover:shadow-xl">
              Register yourself as tour guide
            </button>
          </a>
          <a href="https://mobile.voyease.in/" target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-black hover:bg-orange-700 hover:outline hover:outline-2 hover:outline-white transition-all hover:shadow-xl">
              BOOK YOUR TOUR GUIDE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
