import React from 'react';
import { Container, Box, Typography, Button, Stack, Paper } from '@mui/material';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { featuredProducts, newArrivals } from '../data/products';
import backimg from '../assets/HomePage/land.png';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  // Handles category navigation on featured card click
  const handleFeaturedClick = (category) => {
    if (category === "Women's Collection") return navigate('/women');
    if (category === "Men's Collection") return navigate('/men');
    if (category === "Accessories") return navigate('/accessories');
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 5, fontFamily: "'Poppins', sans-serif" }}>
        {/* Hero Section */}
        <Paper
          sx={{
            mb: 5,
            p: 0,
            borderRadius: 4,
            backgroundImage: `url(${backimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: { xs: 220, md: 330 },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box sx={{ ml: 6, color: '#440f0fff', maxWidth: 400 }}>
            <Typography variant="h3" fontWeight={700} sx={{ mb: 2 }}>
              Elevate Your Style
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }} fontWeight={500}>
              Discover the latest trends and timeless classics to express your unique personality.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#ea2222',
                px: 4,
                py: 1,
                fontWeight: 600,
                borderRadius: 2,
                '&:hover': { bgcolor: '#d01919' }
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Paper>

        {/* Featured Products */}
        <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
          Featured Products
        </Typography>
        <Stack direction="row" spacing={3} sx={{ mb: 6 }}>
          {featuredProducts.map((item, idx) => (
            <Box
              key={idx}
              onClick={() => handleFeaturedClick(item.title)}
              sx={{ cursor: 'pointer' }}
            >
              <ProductCard title={item.title} image={item.image} />
            </Box>
          ))}
        </Stack>

        {/* New Arrivals */}
        <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
          New Arrivals
        </Typography>
        <Stack direction="row" spacing={3} sx={{ mb: 8 }}>
          {newArrivals.map((item, idx) => (
            <ProductCard key={idx} title={item.title} image={item.image} />
          ))}
        </Stack>

        {/* Community Signup Section */}
        <Paper elevation={0} sx={{
          background: '#fafafa',
          borderRadius: 4,
          textAlign: 'center',
          p: 5,
          mb: 10
        }}>
          <Typography variant="h5" fontWeight={700} sx={{ mb: 1 }}>
            Join Our Community
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Stay updated on the latest trends, exclusive offers, and style tips.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#ea2222',
              fontWeight: 600,
              borderRadius: 2,
              px: 4,
              '&:hover': { bgcolor: '#d01919' }
            }}
          >
            Sign Up
          </Button>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
