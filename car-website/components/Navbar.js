// components/Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from 'next/link';

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
              marginRight: '8px',
            }}
          />
          <Button variant="contained" color="primary" size="small">
            Submit
          </Button>
        </div>
        <img
          src="/hero_image.webp"
          alt="Hero Image"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <Typography
        variant="h4"
        component="div"
        sx={{
          textAlign: 'center',
          marginTop: '40px',
          marginBottom: '20px',
          color: '#1C3659',
          fontWeight: 'bold',
        }}
      >
        Customer Testimonials
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
        {/* First Testimonial Box */}
        <div
          style={{
            backgroundColor: '#C3CEDB',
            borderRadius: '6px',
            padding: '20px',
            textAlign: 'center',
            width: '30%',
            position: 'relative',
          }}
        >
          {/* Testimonial Image */}
          <img
            src="/testimonial_image1.jpg"
            alt="Testimonial"
            style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '10px', position: 'relative', top: '-40px' }}
          />
          {/* Testimonial Title */}
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: '#000',
              fontWeight: 'bold',
              marginTop: '-30px',
            }}
          >
            Stephanie Karl
          </Typography>
          {/* Testimonial Quote */}
          <Typography
            variant="body1"
            component="div"
            sx={{ color: '#000', marginTop: '10px' }}
          >
            "The guidance I received here was invaluable. It's not just about cars; it's about making a wise choice for your lifestyle.
            I appreciated the thoughtful recommendations and transparent details that empowered me to make an informed decision."
          </Typography>
          {/* Other Testimonial Content Goes Here */}
        </div>

        {/* Second Testimonial Box */}
        <div
          style={{
            backgroundColor: '#C3CEDB',
            borderRadius: '6px',
            padding: '20px',
            textAlign: 'center',
            width: '30%',
            position: 'relative',
          }}
        >
          {/* Testimonial Image */}
          <img
            src="/testimonial_image2.jpeg"
            alt="Testimonial"
            style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '10px', position: 'relative', top: '-40px' }}
          />
          {/* Testimonial Title */}
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: '#000',
              fontWeight: 'bold',
              marginTop: '-30px',
            }}
          >
            Joseph Patel
          </Typography>
          {/* Updated Testimonial Quote */}
          <Typography
            variant="body1"
            component="div"
            sx={{ color: '#000', marginTop: '10px' }}
          >
            "Choosing a car on this website felt like consulting with a wise mentor. The information provided was insightful, helping me make a decision that aligns perfectly with my needs and values."
          </Typography>
          {/* Other Testimonial Content Goes Here */}
        </div>

        {/* Third Testimonial Box */}
        <div
          style={{
            backgroundColor: '#C3CEDB',
            borderRadius: '6px',
            padding: '20px',
            textAlign: 'center',
            width: '30%',
            position: 'relative',
          }}
        >
          {/* Testimonial Image */}
          <img
            src="/testimonial_image3.jpg"
            alt="Testimonial"
            style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '10px', position: 'relative', top: '-40px' }}
          />
          {/* Testimonial Title */}
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: '#000',
              fontWeight: 'bold',
              marginTop: '-30px',
            }}
          >
            Elliot Rodger
          </Typography>
          {/* Testimonial Quote */}
          <Typography
            variant="body1"
            component="div"
            sx={{ color: '#000', marginTop: '10px' }}
          >
            "In a world filled with options, this platform stood out as a beacon of wisdom.
            The insights provided helped me see beyond the surface, making my car-buying journey a mindful and fulfilling experience."
          </Typography>
          {/* Other Testimonial Content Goes Here */}
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <div
          style={{
            backgroundColor: '#C3CEDB',
            borderRadius: '6px',
            padding: '20px',
            width: '60%',
            margin: 'auto',
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: '#000',
              fontWeight: 'bold',
              marginBottom: '20px',
            }}
          >
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ color: '#000' }}
          >
            Our Models are engineered with precision and expertise.
            Its cutting-edge technology ensures a seamless driving experience, while its safety features have earned it a 5-star rating.
            Explore the future of our automotive innovation.
          </Typography>
        </div>
        <Button
          variant="contained"
          color="primary" // Background color #43D9BC
          sx={{ marginTop: '20px', color: '#fff', marginBottom: '20px', textTransform: 'capitalize' }} // White font color
        >
          Schedule Test Drive
        </Button>
      </div>

      {/* New Section Below Schedule Test Drive Button */}
      <div style={{ backgroundColor: '#333', padding: '40px 0', color: '#fff', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* First Text Section */}
          <div style={{ width: '30%' }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: '#43D9BC',
                marginBottom: '20px',
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ color: '#000' }}
            >
              Email: info@dealership.com
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ color: '#000' }}
            >
              Phone: (555)123-4567
            </Typography>
          </div>
          {/* Second Text Section */}
          <div style={{ width: '30%' }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: '#43D9BC',
                fontweight: 'bold',
                marginBottom: '20px',
              }}
            >
              Quick Links
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ color: '#000', marginBottom: '10px' }}
            >
              <a href="#">Home</a>
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ color: '#000', marginBottom: '10px' }}
            >
              <a href="#">Products</a>
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ color: '#000', marginBottom: '10px' }}
            >
              <a href="#">Pages</a>
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ color: '#000', marginBottom: '10px' }}
            >
              <a href="#">Blog</a>
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ color: '#000', marginBottom: '10px' }}
            >
              <a href="#">Contact Us</a>
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ color: '#000', marginBottom: '10px' }}
            >
              <Link href="/privacy-policy">Privacy Policy</Link>
            </Typography>
          </div>
          {/* Third Text Section */}
          <div style={{ width: '30%' }}>
            <Typography variant="h6"
              component="div"
              sx={{
                color: '#43D9BC',
                fontWeight: 'bold',
                marginBottom: '20px',
              }}
            >
              Follow Us
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <img src="/facebook_icon.png" alt="Social Media Icon 1" style={{ width: '30px', height: '30px' }} />
              <img src="/instagram_icon.png" alt="Social Media Icon 2" style={{ width: '30px', height: '30px' }} />
              <img src="/twitter_icon.png" alt="Social Media Icon 3" style={{ width: '30px', height: '30px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
