import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const ProductCard = ({ title, image, price, onAddToCart, showAddToCart = false }) => (
  <Card
    elevation={0}
    sx={{
      borderRadius: 3,
      width: 200,
      minHeight: 250,
      mx: 1,
      mb: 2,
      background: "#fafafa",
      boxShadow: "0 1px 4px rgba(50,50,93,.05)",
    }}
  >
    <CardMedia
      component="img"
      image={image}
      alt={title}
      sx={{
        height: 160,
        objectFit: "cover",
        borderRadius: 3,
        background: "#fff",
      }}
    />
    <CardContent sx={{ textAlign: "center", p: 2 }}>
      <Typography variant="body1" fontWeight={500}>
        {title}
      </Typography>
      {price && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          {price}
        </Typography>
      )}
      {showAddToCart && (
        <Button
          variant="contained"
          size="small"
          sx={{
            mt: 1,
            borderRadius: 2,
            fontWeight: 600,
            textTransform: "none",
            bgcolor: "#ea2222",
            color: "#fff",
            boxShadow: "none",
            '&:hover': {
              bgcolor: "#d01919",
              boxShadow: "0 2px 8px rgba(234,34,34,0.10)",
            },
          }}
          onClick={onAddToCart}
        >
          Add to Cart
        </Button>
      )}
    </CardContent>
  </Card>
);

export default ProductCard;