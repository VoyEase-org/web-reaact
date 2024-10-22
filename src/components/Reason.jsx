import React from 'react';
import place1 from '../assets/img/about_img1.png';
import place2 from '../assets/img/about_img11.png';
import place3 from '../assets/img/about_img2.png';
import place4 from '../assets/img/about_img22.png';
import place5 from '../assets/img/about_img3.png';
import place6 from '../assets/img/about_img33.png';
import place7 from '../assets/img/about_img4.png';
import place8 from '../assets/img/about_img44.png';
import place9 from '../assets/img/about_img5.png';
import place10 from '../assets/img/about_img55.png';
import appImage from '../assets/img/Group148.png'; 

const images = [
  place1, place2, place3, place4, place5,
  place6, place7, place8, place9, place10,
];

const Reason = () => {
  return (
    <div id="about" className="max-w-screen-xl mx-auto mt-12 px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
      
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={image} 
              alt={`Place ${index + 1}`} 
              className="object-cover w-full h-40 md:h-48 lg:h-56" 
            />
          </div>
        ))}
      </div>

      
      <div className="flex flex-col md:flex-row items-center mt-12">
       
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Download the App</h3>
          <p className="text-lg mb-6 px-4 md:px-0">
            Ready to explore new destinations like a local? Download our tour guide app and connect with friendly, knowledgeable buddies who'll show you around! Whether you're seeking hidden gems, cultural insights, or just someone to share the adventure with.
          </p>
          <div className="flex flex-col md:flex-row justify-start space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:outline-none">
              DOWNLOAD THE APP
            </button>
          </div>
        </div>
        
        
        <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
          <img src={appImage} alt="Download App" className="w-full max-w-md" /> 
        </div>
      </div>
    </div>
  );
};

export default Reason;
