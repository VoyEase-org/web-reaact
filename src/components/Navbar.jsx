import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import logo from '../assets/img/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (section) => {
    if (location.pathname !== '/') {
      // Navigate to home route and then scroll to the section
      navigate('/');
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      }, 100); 
    } else {
      
      setActiveSection(section);
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBlogNavigation = () => {
    setActiveSection('blog');
    navigate('/blog');
  };

  return (
    <div className="bg-white sticky top-0 z-50 flex justify-between items-center px-8 h-20 shadow-md">
    
      <div>
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links for Desktop */}
      <nav className="hidden md:flex space-x-8">
        <ul className="flex space-x-8">
          <li
            className={`cursor-pointer relative ${activeSection === 'home' ? 'text-orange-600 ' : ''} font-semibold`}
            onClick={() => handleScroll('home')}
          >
            Home
            {activeSection === 'home' && (
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-600 rounded-tl-full rounded-tr-full"></div>
            )}
          </li>
          <li
            className={`cursor-pointer relative ${activeSection === 'about' ? 'text-orange-600' : ''} font-semibold`}
            onClick={() => handleScroll('about')}
          >
            About Us
            {activeSection === 'about' && (
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-600 rounded-tl-full rounded-tr-full"></div>
            )}
          </li>
          <li
            className={`cursor-pointer relative ${activeSection === 'contact' ? 'text-orange-600' : ''} font-semibold`}
            onClick={() => handleScroll('contact')}
          >
            Contact Us
            {activeSection === 'contact' && (
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-600 rounded-tl-full rounded-tr-full"></div>
            )}
          </li>
          <li
            className={`cursor-pointer relative ${activeSection === 'blog' ? 'text-orange-600' : ''} font-semibold`}
            onClick={handleBlogNavigation}
          >
            Our Blog
            {activeSection === 'blog' && (
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-600 rounded-tl-full rounded-tr-full"></div>
            )}
          </li>
          <li>
            <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition duration-300">
              Download App
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu (only visible when toggled open) */}
      {isOpen && (
        <nav className="absolute top-20 left-0 w-full bg-white shadow-lg md:hidden z-50">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="cursor-pointer font-semibold" onClick={() => handleScroll('home')}>
              Home
            </li>
            <li className="cursor-pointer font-semibold" onClick={() => handleScroll('about')}>
              About Us
            </li>
            <li className="cursor-pointer font-semibold" onClick={() => handleScroll('contact')}>
              Contact Us
            </li>
            <li className="cursor-pointer font-semibold" onClick={handleBlogNavigation}>
              Our Blog
            </li>
            <li>
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition duration-300">
                Download App
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
