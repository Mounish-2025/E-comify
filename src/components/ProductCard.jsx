import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const ProductCard = ({
  title,
  image,
  price,
  onAddToCart,
  showAddToCart = false,
}) => (
  <Card
    elevation={0}
    sx={{
      borderRadius: 3,
      width: { xs: '90vw', sm: 210, md: 220, lg: 240 },
      minHeight: 250,
      mx: 'auto',
      mb: 2,
      background: "#fafafa",
      boxShadow: "0 1px 4px rgba(50,50,93,.05)",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <CardMedia
      component="img"
      image={image}
      alt={title}
      sx={{
        width: '100%',
        height: { xs: 155, sm: 160, md: 180 },
        objectFit: "cover",
        borderRadius: 3,
        background: "#fff",
        mt: 1,
      }}
    />
    <CardContent sx={{ textAlign: "center", p: 2, flexGrow: 1 }}>
      <Typography variant="body1" fontWeight={500} sx={{ fontSize: { xs: 15, sm: 16 } }}>
        {title}
      </Typography>
      {price && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 0.5, fontSize: { xs: 14, sm: 15 } }}
        >
          {price}
        </Typography>
      )}
      {showAddToCart && (
        <Button
          variant="contained"
          size="small"
          fullWidth
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
            fontSize: { xs: 13, sm: 14 }
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