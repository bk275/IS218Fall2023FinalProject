// components/Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#C3CEDB' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Box
            component="div"
            sx={{
              color: '#88835C',
              fontSize: '1.5rem',
              cursor: 'pointer',
            }}
          >
            Home
          </Box>
          <Box
            component="div"
            sx={{
                color: '#1E2859',
                fontSize: '1.5rem',
                cursor: 'pointer',
            }}
          >
            Products
          </Box>
          <Box
            component="div"
            sx={{
                color: '#1E2859',
                fontSize: '1.5rem',
                cursor: 'pointer',
            }}
          >
            Pages
          </Box>
          <Box
            component="div"
            sx={{
                color: '#1E2859',
                fontSize: '1.5rem',
                cursor: 'pointer',
            }}
          >
            Blog
          </Box>
          <Box
            component="div"
            sx={{
                color: '#1E2859',
                fontSize: '1.5rem',
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
            background: 'rgba(195, 206, 219, 0.4)',
            padding: '8px 16px',
            borderRadius: '4px',
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
        <Typography
          variant="h5"
          component="div"
          sx={{
            position: 'absolute',
            background: 'rgba(195, 206, 219, 0.4)',
            padding: '8px 16px',
            borderRadius: '4px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: '#1C3659',
            fontSize: '1.5vw',
            width: '25%',
          }}
        >
          Unleash the wisdom of a well-crafted driving experience. Receive curated content that reflects the sage within you.
        </Typography>
        <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '75%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}
      >
        <TextField
          id="email"
          label="Enter Email"
          variant="outlined"
          size="small"
          sx={{ 
            backgroundColor: '#fff', 
            borderRadius: '6px', 
            maxWidth: '250px',
            width: '100%',
            height: '5.5vh',
        }}
        />
      </div>
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
