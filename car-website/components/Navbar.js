// components/Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#88835C' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Box
            component="div"
            sx={{
              backgroundColor: '#C3CEDB',
              padding: '8px 16px',
              borderRadius: '4px',
              color: '#88835C',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Home
          </Box>
          <Box
            component="div"
            sx={{
              backgroundColor: '#C3CEDB',
              padding: '8px 16px',
              borderRadius: '4px',
              color: '#000',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Products
          </Box>
          <Box
            component="div"
            sx={{
              backgroundColor: '#C3CEDB',
              padding: '8px 16px',
              borderRadius: '4px',
              color: '#000',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Pages
          </Box>
          <Box
            component="div"
            sx={{
              backgroundColor: '#C3CEDB',
              padding: '8px 16px',
              borderRadius: '4px',
              color: '#000',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Blog
          </Box>
          <Box
            component="div"
            sx={{
              backgroundColor: '#C3CEDB',
              padding: '8px 16px',
              borderRadius: '4px',
              color: '#000',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Contact Us
          </Box>
          {/* Logo Image */}
          <img
            src="/car_logo.png"
            alt="Car Logo"
            style={{ height: '70px', maxWidth: '100%', cursor: 'pointer' }}
          />
          <Typography variant="h6" component="div" sx={{ textAlign: 'center', color: '#fff' }}>
            {/* Navigation Content Goes Here */}
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Hero Image */}
      <div style={{ position: 'relative' }}>
        <Typography
          variant="h4"
          component="div"
          sx={{
            position: 'absolute',
            top: '5%',
            left: '5%',
            color: '#1C3659',
            fontWeight: 'bold',
            zIndex: 1,
            fontSize: '4vw', // Responsive font size
          }}
        >
          Wisdom Guides Your Perfect Ride.
        </Typography>
        <img
          src="/hero_image.webp"
          alt="Hero Image"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default Navbar;
