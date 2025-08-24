import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Avatar, Button, InputBase } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import profile from '../assets/HomePage/profile.png';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 2 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6" color="textPrimary" sx={{ fontWeight: 'bold' }}>
            E-comify
          </Typography>
        </Box>
        {/* Menu */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Button color="inherit" component={RouterLink} to="/home">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/men">
            Men
          </Button>
          <Button color="inherit" component={RouterLink} to="/women">
            Women
          </Button>
          <Button color="inherit" component={RouterLink} to="/accessories">
            Accessories
          </Button>
          {/* <Button color="inherit" component={RouterLink} to="/sale">
            Sale
          </Button> */}
          {/* Search Bar */}
          <Box sx={{ bgcolor: '#f5ecec', px: 2, py: 0.5, borderRadius: 2, mx: 1, display: 'flex', alignItems: 'center' }}>
            <InputBase placeholder="Search" sx={{ width: 90, color: '#89595e' }} />
          </Box>
          {/* Wishlist icon */}
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          {/* Cart icon navigates to CartPage */}
          <IconButton onClick={() => navigate('/cart')}>
            <ShoppingBagOutlinedIcon />
          </IconButton>
          {/* User Avatar */}
          <IconButton onClick={() => navigate('/account')}>
            <Avatar sx={{ bgcolor: '#f5c6cb', width: 32, height: 32 }} src={profile} alt='Profile'/>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;