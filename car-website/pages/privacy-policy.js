// components/PrivacyPolicy.js

import React from 'react';
import Head from 'next/head';
import { Container, Typography } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Container>
        <Typography variant="h1">Privacy Policy</Typography>

        <Typography paragraph>
          This Privacy Policy outlines how we collect, use, and protect information that you provide when using our website.
        </Typography>

        <Typography variant="h2">Information We Collect</Typography>

        <Typography paragraph>
          We may collect personal information, including but not limited to, your name, email address, and other contact details when you interact with our website.
        </Typography>

        <Typography variant="h2">How We Use Your Information</Typography>

        <Typography paragraph>
          We use the collected information for purposes such as providing and improving our services, communicating with you, and ensuring the security of our website.
        </Typography>

        <Typography variant="h2">Security</Typography>

        <Typography paragraph>
          We take appropriate measures to protect your personal information from unauthorized access or disclosure.
        </Typography>

        <Typography variant="h2">Cookies</Typography>

        <Typography paragraph>
          Our website may use cookies to enhance your browsing experience. You can adjust your browser settings to refuse cookies or notify you when a cookie is set.
        </Typography>

        <Typography variant="h2">Third-Party Links</Typography>

        <Typography paragraph>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites.
        </Typography>

        <Typography variant="h2">Changes to This Privacy Policy</Typography>

        <Typography paragraph>
          We reserve the right to update this Privacy Policy. Any changes will be effective immediately upon posting the revised policy on this page.
        </Typography>

        <Typography variant="h2">Contact Us</Typography>

        <Typography paragraph>
          If you have any questions or concerns about our Privacy Policy, please contact us at{' '}
          <a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a>.
        </Typography>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
