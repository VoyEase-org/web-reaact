import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaFacebook, FaYoutubeSquare, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone, FaGlobe, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import makeInIndiaLogo from '../assets/img/made-in-india.png'; 
// import footerBg from '../assets/img/footer-bg.jpg'; // 

const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add handleSubmit functionality for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const url = "https://api.web3forms.com/submit";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("Our Team has received your message!");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending the message. Please try again later.");
    }
  };

  return (
    <footer className="bg-white text-gray-700 relative">

     
      <div
        className="relative bg-cover bg-center py-8"
        style={{
          // backgroundImage: `url(${footerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
       
        <div className="absolute inset-0 bg-black "></div>

        
        <div className="relative z-10 flex justify-center">
          <h2 className="text-4xl font-bold text-white">Contact Us</h2>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact" className="relative z-10 bg-white py-8">
        <div className="max-w-lg mx-auto p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="access_key" value="f697ed8c-5c6d-497d-9f13-51824b9c04b1" />
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message"
                className="mt-2 p-3 w-full h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
     
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-4 relative">

        {/* Logo and Contact Info */}
        <div>
          <img src={logo} alt="Logo" className="h-16 mb-4" />
          <hr className="border-t border-black mb-8 w-3/5" /> 
          <div className="space-y-4">
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Pune, Maharashtra, India
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2" /> support@voyease.in
            </p>
            <p className="flex items-center">
              <FaPhone className="mr-2" /> +91-9152851516
            </p>
            <p className="flex items-center">
              <FaGlobe className="mr-2" /> www.VoyEase.in
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-6">
            <a href="https://www.facebook.com/people/VoyEase/61559085701182/" className="hover:text-gray-800">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.youtube.com/@voyease" className="hover:text-gray-800">
              <FaYoutubeSquare size={24} />
            </a>
            <a href="https://www.instagram.com/voyease/?igsh=YzljYTk1ODg3Zg%3D%3D" className="hover:text-gray-800">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/company/voyease" className="hover:text-gray-800">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

       
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-black mx-auto hidden md:block"></div>

        
        <div className="flex space-x-8 mt-16"> 

          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="underline hover:text-gray-800 text">Home</Link></li>
              <li><Link to="/about" className="underline hover:text-gray-800">About Us</Link></li>
              <li><Link to="/contact" className="underline hover:text-gray-800">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="underline hover:text-gray-800">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div className='ml-10'>
            <h3 className="font-bold text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/customer-terms" className=" underline hover:text-gray-800">Customer Terms and Conditions</Link></li>
              <li><Link to="/tour-guide-terms" className="underline hover:text-gray-800">Tour Guide Terms and Conditions</Link></li>
              <li><Link to="/tour-buddy-terms" className="underline hover:text-gray-800">Tour Buddy Terms and Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>

     
      <div className="absolute bottom-10 right-10 flex flex-col items-center space-y-4 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 lg:bottom-14 lg:right-14">
       
        <button
          onClick={scrollToTop}
          className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition sm:p-3 md:p-4"
        >
          <FaArrowUp size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
        </button>

       
        <img
          src={makeInIndiaLogo}
          alt="Make in India"
          className="h-12 sm:h-10 md:h-12 lg:h-16" 
        />
      </div>


    </footer>
  );
};

export default Footer;
