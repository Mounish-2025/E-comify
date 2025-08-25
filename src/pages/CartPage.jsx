import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import polo from '../assets/Men/Polo-tshirt.png';
import shoes from '../assets/Men/Leather-boots.png';

const initialCart = [
  {
    id: "classic-cotton-tshirt",
    title: "Classic Cotton T–Shirt",
    image: polo,
    size: "M",
    price: 30.0,
    quantity: 1,
  },
  {
    id: "leather-ankle-boots",
    title: "Leather Ankle Boots",
    image: shoes,
    size: "8",
    price: 25.0,
    quantity: 1,
  },
];

export default function CartPage() {
  const [cart, setCart] = React.useState(initialCart);
  const navigate = useNavigate();

  const changeQuantity = (id, diff) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + diff),
            }
          : item
      )
    );
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const estimatedTax = 5.5;
  const total = subtotal + shipping + estimatedTax;

  return (
    <>
      <Navbar />
      <Container
        maxWidth="sm"
        sx={{
          mt: 5,
          minHeight: "60vh",
          fontFamily: "'Poppins', sans-serif",
          px: { xs: 2, sm: 3 },
        }}
      >
        <Typography variant="body2" sx={{ color: "#b79da5", mb: 2 }}>
          Home &nbsp;/&nbsp; Shopping Bag
        </Typography>

        <Typography variant="h4" fontWeight={700} sx={{ mb: 4, fontSize: { xs: 26, sm: 32 } }}>
          Shopping Bag ({cart.length})
        </Typography>

        <Stack spacing={3} sx={{ mb: 5 }}>
          {cart.map((item) => (
            <Box key={item.id} sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                variant="rounded"
                src={item.image}
                alt={item.title}
                sx={{
                  height: 60,
                  width: 60,
                  bgcolor: "#f5f5f5",
                  mr: 2,
                }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography fontWeight={500} sx={{ fontSize: { xs: 15, sm: 16 } }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: 13, sm: 14 } }}>
                  Size {item.size}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  onClick={() => changeQuantity(item.id, -1)}
                  sx={{
                    color: "#b79da5",
                    bgcolor: "#f5ecec",
                    "&:hover": { bgcolor: "#923640", color: "#fff" },
                    mx: 1,
                  }}
                  size="small"
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}>{item.quantity}</Typography>
                <IconButton
                  onClick={() => changeQuantity(item.id, 1)}
                  sx={{
                    color: "#b79da5",
                    bgcolor: "#f5ecec",
                    "&:hover": { bgcolor: "#923640", color: "#fff" },
                    mx: 1,
                  }}
                  size="small"
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Stack>

        <Typography variant="h6" fontWeight={700} sx={{ mb: 2, fontSize: { xs: 19, sm: 21 } }}>
          Order Summary
        </Typography>
        <Box sx={{ color: "#b79da5", fontWeight: 500, fontSize: 16 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <span>Subtotal</span>
            <span style={{ color: "#333" }}>${subtotal.toFixed(2)}</span>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <span>Shipping</span>
            <span style={{ color: "#333" }}>Free</span>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <span>Estimated Tax</span>
            <span style={{ color: "#333" }}>${estimatedTax.toFixed(2)}</span>
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
          <Typography variant="body1" fontWeight={700} sx={{ color: "#111" }}>
            Total
          </Typography>
          <Typography variant="h6" fontWeight={700} sx={{ color: "#111" }}>
            ${total.toFixed(2)}
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="error"
          size="large"
          sx={{
            borderRadius: 2,
            px: 5,
            fontWeight: 600,
            fontSize: { xs: 16, sm: 18 },
            bgcolor: "#ea2222",
            '&:hover': { bgcolor: '#d01919' },
            textTransform: 'none',
            display: "block",
            ml: "auto",
            mr: 0,
          }}
          onClick={() => navigate('/checkout')}
        >
          Checkout
        </Button>
      </Container>
      <Footer />
    </>
  );
}
