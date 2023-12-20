// pages/index.js

import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import CookieConsent from '../components/CookieConsent';

const Home = () => {
  return (
    <div>
      <Head>
        {/* Specify the title of the page */}
        <title>Cars4Sale</title>
        {/* Add meta tags for description, keywords, etc. */}
        <meta name="description" content="Cars4Sale Main Page" />
        <meta name="keywords" content="sage, cars" />
      </Head>

      {/* Google Analytics script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0ZJDGGPYNZ');
          `,
        }}
      />

      <Navbar />
      {/* Add more content as needed */}
      <CookieConsent />
    </div>
  );
};

export default Home;
