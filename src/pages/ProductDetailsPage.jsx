import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Breadcrumbs,
  Link,
  Typography,
  Grid,
  Box,
  Rating,
  Divider,
  LinearProgress,
  Avatar,
  Stack,
} from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  featuredItems as womenFeatured,
  newArrivals as womenNewArrivals,
} from '../data/womenProducts';
import { featuredItems as menFeatured, newArrivals as menNewArrivals } from '../data/menProducts';
import {
  featuredItems as accFeatured,
  newArrivals as accNewArrivals,
} from '../data/accessoriesProducts';

// Sample customer reviews data
const reviews = [
  {
    name: 'Ramesh Kumar',
    date: 'June 15, 2023',
    rating: 5,
    review:
      'Absolutely love this dress! The fit is perfect, and the fabric is so comfortable. I received so many compliments when I wore it to a summer wedding.',
    likes: 25,
    comments: 5,
  },
  {
    name: 'Vijayram',
    date: 'May 22, 2023',
    rating: 4,
    review:
      "The dress is beautiful and fits well, but the colors are slightly less vibrant than in the pictures. Overall, I'm happy with my purchase.",
    likes: 18,
    comments: 3,
  },
  {
    name: 'Karthick',
    date: 'April 10, 2023',
    rating: 5,
    review:
      "This dress is stunning! The floral print is gorgeous, and the quality is excellent. It's my new favorite dress for special occasions.",
    likes: 30,
    comments: 2,
  },
];

// Helper to get all products for a given category
const getAllProducts = (category) => {
  if (category === 'women') return [...womenFeatured, ...womenNewArrivals];
  if (category === 'men') return [...menFeatured, ...menNewArrivals];
  if (category === 'accessories') return [...accFeatured, ...accNewArrivals];
  return [];
};

const ReviewBar = ({ value, percent }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
    <Typography sx={{ width: 25, textAlign: 'right', mr: 1, fontSize: { xs: 12, sm: 14 } }}>{value}</Typography>
    <LinearProgress
      variant="determinate"
      value={percent}
      sx={{ flex: 1, height: 8, borderRadius: 5, mr: 1, bgcolor: '#f0eaea' }}
    />
    <Typography sx={{ minWidth: 32, fontSize: { xs: 12, sm: 14 } }}>{percent}%</Typography>
  </Box>
);

const ProductDetailsPage = () => {
  const { category, productId } = useParams();

  const product = getAllProducts(category).find(
    (item) => (item.id || item.title.toLowerCase().split(' ').join('-')) === productId
  );

  // Use a gallery of images if available, else use main image
  const galleryImages = product?.gallery || [product?.image];

  if (!product) {
    return (
      <>
        <Navbar />
        <Container sx={{ mt: 5 }}>
          <Typography variant="h5" color="error" sx={{ fontFamily: "'Poppins', sans-serif" }}>
            Product not found.
          </Typography>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 3, fontFamily: "'Poppins', sans-serif" }}>
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 2 }} aria-label="breadcrumb">
          <Link
            component={RouterLink}
            to="/home"
            underline="hover"
            color="inherit"
            sx={{ cursor: 'pointer', fontSize: { xs: 13, sm: 15 } }}
          >
            Home
          </Link>
          <Link
            component={RouterLink}
            to={`/${category}`}
            underline="hover"
            color="inherit"
            sx={{ cursor: 'pointer', fontSize: { xs: 13, sm: 15 } }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
          <Typography color="text.primary" sx={{ fontSize: { xs: 13, sm: 15 } }}>
            {product.title}
          </Typography>
        </Breadcrumbs>

        {/* Product Images Gallery */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={7}>
            <Box sx={{ mb: 2 }}>
              <img
                src={galleryImages[0]}
                alt={product.title}
                style={{ width: '100%', borderRadius: 10 }}
              />
            </Box>
            <Grid container spacing={1}>
              {galleryImages.slice(1).map((img, idx) => (
                <Grid item xs={4} key={idx}>
                  <img
                    src={img}
                    alt={`${product.title} ${idx + 2}`}
                    style={{ width: '100%', borderRadius: 8 }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Product Information */}
          <Grid item xs={12} sm={5}>
            <Typography variant="h5" fontWeight={700} gutterBottom sx={{ fontSize: { xs: 22, sm: 26 } }}>
              {product.title}
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2, fontSize: { xs: 14, sm: 15 } }}>
              Brand: Trendify
            </Typography>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 1, fontSize: { xs: 20, sm: 22 } }}>
              {product.price}
            </Typography>
            <Typography sx={{ mb: 2, fontSize: { xs: 14, sm: 15 } }}>
              {product.description ||
                'This elegant item is made from high-quality materials and designed for comfort and style. Available in multiple sizes.'}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, fontSize: { xs: 13, sm: 15 } }}>
              Available in sizes XS-XL.
            </Typography>
          </Grid>
        </Grid>

        {/* Customer Reviews Section */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom sx={{ fontSize: { xs: 20, sm: 22 } }}>
            Customer Reviews
          </Typography>

          {/* Average Rating and Breakdown */}
          <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2, mt: 1 }}>
            <Typography variant="h3" sx={{ mr: 2, fontSize: { xs: 36, sm: 42 } }}>
              4.5
            </Typography>
            <Box>
              <Rating value={4.5} precision={0.5} readOnly size="large" />
              <Typography color="text.secondary" sx={{ fontSize: { xs: 13, sm: 15 } }}>
                150 reviews
              </Typography>
            </Box>
          </Box>

          <Box sx={{ maxWidth: 380, mb: 3 }}>
            <ReviewBar value={5} percent={40} />
            <ReviewBar value={4} percent={30} />
            <ReviewBar value={3} percent={15} />
            <ReviewBar value={2} percent={10} />
            <ReviewBar value={1} percent={5} />
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Individual Reviews */}
          <Stack spacing={4}>
            {reviews.map((r, i) => (
              <Box key={i}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                  <Avatar sx={{ width: 32, height: 32, mr: 1 }}>{r.name[0]}</Avatar>
                  <Stack>
                    <Typography fontWeight={500} sx={{ fontSize: { xs: 14, sm: 16 } }}>{r.name}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: 12, sm: 14 } }}>
                      {r.date}
                    </Typography>
                  </Stack>
                </Box>
                <Rating value={r.rating} readOnly size="small" />
                <Typography sx={{ my: 1, fontSize: { xs: 14, sm: 15 } }}>{r.review}</Typography>
                <Stack direction="row" spacing={2}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: 12, sm: 14 } }}>
                    👍 {r.likes}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: 12, sm: 14 } }}>
                    💬 {r.comments}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
