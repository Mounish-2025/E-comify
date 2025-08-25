import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => (
  <Box sx={{ mt: 10, py: 4, borderTop: '1px solid #eee', background: '#fff' }}>
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={{ xs: "center", md: "flex-start" }}
      spacing={{ xs: 2, md: 0 }}
      sx={{ px: { xs: 2, md: 12 } }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center", md: "flex-start" }}
        spacing={3}
        sx={{ mb: { xs: 2, md: 0 } }}
      >
        <Link href="#" underline="none" color="text.primary" sx={{ fontFamily: "'Poppins', sans-serif" }}>About Us</Link>
        <Link href="#" underline="none" color="text.primary" sx={{ fontFamily: "'Poppins', sans-serif" }}>Contact</Link>
        <Link href="#" underline="none" color="text.primary" sx={{ fontFamily: "'Poppins', sans-serif" }}>FAQ</Link>
        <Link href="#" underline="none" color="text.primary" sx={{ fontFamily: "'Poppins', sans-serif" }}>Privacy Policy</Link>
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Link href="#" color="inherit" aria-label="Instagram">
          <InstagramIcon fontSize="small" />
        </Link>
        <Link href="#" color="inherit" aria-label="Twitter">
          <TwitterIcon fontSize="small" />
        </Link>
      </Stack>
    </Stack>
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2, fontFamily: "'Poppins', sans-serif" }}>
      ©2024 E-comify. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;