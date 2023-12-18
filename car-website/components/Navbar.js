// components/Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#C3CEDB' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          {/* Navigation Content Goes Here */}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
