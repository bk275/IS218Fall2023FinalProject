// components/CookieConsent.js
import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const CookieConsent = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem('cookieConsent', 'true');
  };

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (hasConsent) {
      setOpen(false);
    }
  }, []);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="This website uses cookies to ensure you get the best experience on our website."
      action={
        <React.Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
  );
};

export default CookieConsent;
