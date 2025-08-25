import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Button,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import profile from '../assets/HomePage/profile.png';

const navLinks = [
  { label: "Home", to: "/home" },
  { label: "Men", to: "/men" },
  { label: "Women", to: "/women" },
  { label: "Accessories", to: "/accessories" },
  // { label: "Sale", to: "/sale" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 2 }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, sm: 2 } }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6" color="textPrimary" sx={{ fontWeight: 'bold' }}>
            E-comify
          </Typography>
        </Box>

        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 3
          }}
        >
          {navLinks.map((link) => (
            <Button
              key={link.label}
              color="inherit"
              component={RouterLink}
              to={link.to}
              sx={{ fontWeight: 600, fontFamily: "'Poppins', 'Inter', Arial, sans-serif" }}
            >
              {link.label}
            </Button>
          ))}
          <Box sx={{
            bgcolor: '#f5ecec',
            px: 2, py: 0.5,
            borderRadius: 2, mx: 1,
            display: 'flex',
            alignItems: 'center'
          }}>
            <InputBase placeholder="Search" sx={{ width: 90, color: '#89595e' }} />
          </Box>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton onClick={() => navigate('/cart')}>
            <ShoppingBagOutlinedIcon />
          </IconButton>
          <IconButton onClick={() => navigate('/account')}>
            <Avatar sx={{ bgcolor: '#f5c6cb', width: 32, height: 32 }} src={profile} alt='Profile'/>
          </IconButton>
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: { xs: 0.5, sm: 1 } }}
            size="large"
            aria-label="open navigation"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 220 } }}
      >
        <Box sx={{ pt: 2, pb: 2 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(link.to);
                    setDrawerOpen(false);
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontFamily: "'Poppins', 'Inter', Arial, sans-serif"
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box sx={{ px: 2, pt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <InputBase placeholder="Search" sx={{ width: 90, color: '#89595e', bgcolor: '#f5ecec', px: 1, borderRadius: 1 }} />
          </Box>
          <Box sx={{ px: 2, pt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton onClick={() => { navigate('/cart'); setDrawerOpen(false); }}>
              <ShoppingBagOutlinedIcon />
            </IconButton>
            <IconButton onClick={() => { navigate('/account'); setDrawerOpen(false); }}>
              <Avatar sx={{ bgcolor: '#f5c6cb', width: 32, height: 32 }} src={profile} alt='Profile'/>
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
