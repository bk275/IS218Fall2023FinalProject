// pages/index.js
import React from 'react';
import Navbar from '../components/Navbar';
import CookieConsent from '../components/CookieConsent';

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Add more content as needed */}
      <CookieConsent />
    </div>
  );
};

export default Home;
