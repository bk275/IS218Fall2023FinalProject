// components/Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#88835C' }}>
      <Toolbar>
        <Box
          component="div"
          sx={{
            backgroundColor: '#C3CEDB',
            padding: '8px 16px',
            borderRadius: '4px',
            color: '#88835C',
            fontSize: '1rem',
            cursor: 'pointer',
            marginRight: '16px',
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
            color: '#000', // Change font color to black
            fontSize: '1rem',
            cursor: 'pointer',
            marginRight: '16px',
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
            color: '#000', // Change font color to black
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Pages
        </Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', color: '#fff' }}>
          {/* Navigation Content Goes Here */}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
