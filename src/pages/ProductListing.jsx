import React from 'react';
import {
  Container,
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Button,
  Stack,
  Menu,
  MenuItem,
  Grid,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

const filterOptions = [
  { label: 'Size', values: ['XS', 'S', 'M', 'L', 'XL'] },
  { label: 'Color', values: ['Beige', 'Black', 'Brown', 'Navy'] },
  { label: 'Price', values: ['$0 - $50', '$51 - $100', '$101 - $200'] },
  { label: 'Brand', values: ['All', 'Zara', 'H&M', 'Uniqlo'] },
  { label: 'Material', values: ['Cotton', 'Linen', 'Polyester', 'Wool'] },
];

function FilterBar() {
  const [anchorEls, setAnchorEls] = React.useState({});

  const handleClick = (event, label) => {
    setAnchorEls((prev) => ({ ...prev, [label]: event.currentTarget }));
  };

  const handleClose = (label) => {
    setAnchorEls((prev) => ({ ...prev, [label]: null }));
  };

  return (
    <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: 'wrap' }}>
      {filterOptions.map((filter) => (
        <Box key={filter.label}>
          <Button
            variant="outlined"
            onClick={(e) => handleClick(e, filter.label)}
            endIcon={<NavigateNextIcon />}
            sx={{
              textTransform: 'none',
              borderRadius: 3,
              bgcolor: '#f6f6f6',
              borderColor: '#ececec',
              color: '#333',
              fontWeight: 500,
              fontFamily: "'Poppins', sans-serif",
              minWidth: 110,
            }}
          >
            {filter.label}
          </Button>
          <Menu
            anchorEl={anchorEls[filter.label]}
            open={Boolean(anchorEls[filter.label])}
            onClose={() => handleClose(filter.label)}
          >
            {filter.values.map((val) => (
              <MenuItem key={val} onClick={() => handleClose(filter.label)}>
                {val}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      ))}
    </Stack>
  );
}

const ProductListing = ({
  breadcrumbSection,
  heading,
  description,
  featuredItems,
  newArrivals,
}) => {
  const navigate = useNavigate();

  // Placeholder handler: replace with actual cart logic later
  const handleAddToCart = (item) => {
    console.log("Added to cart:", item);
    // Add your cart logic here.
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 5, fontFamily: "'Poppins', sans-serif" }}>
        {/* Breadcrumbs */}
        <Breadcrumbs separator="/" aria-label="breadcrumb" sx={{ mb: 3 }}>
          <Link
            color="inherit"
            underline="hover"
            href="/home"
            onClick={(e) => {
              e.preventDefault();
              navigate('/home');
            }}
            sx={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Home
          </Link>
          <Typography color="text.primary" sx={{ fontFamily: "'Poppins', sans-serif" }}>
            {breadcrumbSection}
          </Typography>
        </Breadcrumbs>

        {/* Heading and description */}
        <Typography variant="h4" fontWeight={700} sx={{ mb: 1, fontSize: { xs: 22, sm: 28, md: 32 } }}>
          {heading}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 600, fontSize: { xs: 14, sm: 16 } }}
        >
          {description}
        </Typography>

        {/* Filter Bar */}
        <FilterBar />

        {/* Featured Items */}
        <Typography variant="h6" fontWeight={600} sx={{ mb: 2, mt: 3 }}>
          Featured Items
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 3 }}>
          {featuredItems.map((item) => (
            <Grid
              item
              key={item.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'center' }}
            >
              <Box onClick={() => navigate(`/${breadcrumbSection.toLowerCase()}/${item.id}`)}>
                <ProductCard
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  showAddToCart={true}
                  onAddToCart={(e) => {
                    e.stopPropagation();
                    handleAddToCart(item);
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* New Arrivals */}
        <Typography variant="h6" fontWeight={600} sx={{ mb: 2, mt: 5 }}>
          New Arrivals
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 3 }}>
          {newArrivals.map((item) => (
            <Grid
              item
              key={item.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'center' }}
            >
              <Box onClick={() => navigate(`/${breadcrumbSection.toLowerCase()}/${item.id}`)}>
                <ProductCard
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  showAddToCart={true}
                  onAddToCart={(e) => {
                    e.stopPropagation();
                    handleAddToCart(item);
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ProductListing;
