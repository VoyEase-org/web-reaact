import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TravelCarousel from './components/TravelCarousel';
import Reason from './components/Reason';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import CustomerTerms from './Pages/CustomerTerms.jsx';
import TourGuideTerms from './Pages/Tourguide.jsx';
import TourBuddyTerms from './Pages/TourBuddies.jsx';
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx';
import Blog from './Pages/Blog.jsx';
import BlogOne from './BlogPages/BlogOne.jsx';
import AdminPanel from './Pages/Admin.jsx';


function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <TravelCarousel />
                <Reason />
              </>
            }
          />

          <Route path="/customer-terms" element={<CustomerTerms />} />


          <Route path="/tour-guide-terms" element={<TourGuideTerms />} />


          <Route path="/tour-buddy-terms" element={<TourBuddyTerms />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="/blog-one" element={<BlogOne />} />

          <Route path="/admin" element={<AdminPanel />} />

          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
