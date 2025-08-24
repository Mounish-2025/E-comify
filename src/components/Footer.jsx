import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => (
  <Box sx={{ mt: 10, py: 4, borderTop: '1px solid #eee', background: '#fff' }}>
    <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ px: { xs: 2, md: 12 } }}>
      <Stack direction="row" spacing={6}>
        <Link href="#" underline="none" color="text.primary">About Us</Link>
        <Link href="#" underline="none" color="text.primary">Contact</Link>
        <Link href="#" underline="none" color="text.primary">FAQ</Link>
        <Link href="#" underline="none" color="text.primary">Privacy Policy</Link>
      </Stack>
      <Stack direction="row" spacing={2}>
        <InstagramIcon fontSize="small" />
        <TwitterIcon fontSize="small" />
      </Stack>
    </Stack>
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
      ©2024 E-comify. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
