import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Divider,
  Avatar,
  FormControl,
  Breadcrumbs,
  Link,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import polo from "../assets/Men/Polo-tshirt.png";
import shoes from "../assets/Men/Leather-boots.png";

// Dummy review cart items for preview
const reviewItems = [
  {
    id: "classic-white-tee",
    title: "Classic Cotton T–Shirt",
    image: polo,
    size: "M",
    price: 30,
  },
  {
    id: "slim-fit-jeans",
    title: "Leather Ankle Boots",
    image: shoes,
    size: "32",
    price: 25,
  },
];

export default function CheckoutPage() {
  const [shipping, setShipping] = useState({
    fullName: "Mounish",
    address: "197/N8, Washington Nagar, Tiruppur",
    apt: "Home",
    city: "Tiruppur",
    state: "TamilNadu",
    zip: "641666",
    phone: "+91 6380517128",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [card, setCard] = useState({
    number: "1234 5678 9101 1121",
    expiry: "08/30",
    cvv: "849",
    name: "Mounish P",
  });

  const subtotal = reviewItems.reduce((sum, item) => sum + item.price, 0);
  const shippingFee = 0;
  const total = subtotal + shippingFee;

  const navigate = useNavigate();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    navigate("/order-confirmation");
  };

  return (
    <>
      <Navbar />
      <Container
        maxWidth="sm"
        sx={{
          mt: 5,
          mb: 10,
          fontFamily: "'Poppins', sans-serif",
          px: { xs: 2, sm: 3 },
        }}
      >
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 3 }} separator="›">
          <Link
            color="inherit"
            underline="hover"
            href="/cart"
            onClick={(e) => {
              e.preventDefault();
              navigate("/cart");
            }}
            sx={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Bag
          </Link>
          <Typography
            color="text.primary"
            sx={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Checkout
          </Typography>
        </Breadcrumbs>

        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ mb: 3, fontSize: { xs: 26, sm: 30 } }}
        >
          Checkout
        </Typography>

        <form onSubmit={handlePlaceOrder} autoComplete="off">
          {/* Shipping address */}
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{ mt: 1, mb: 2, fontSize: { xs: 20, sm: 22 } }}
          >
            Shipping address
          </Typography>
          <TextField
            label="Full name"
            variant="outlined"
            fullWidth
            size="small"
            margin="normal"
            value={shipping.fullName}
            onChange={(e) => setShipping({ ...shipping, fullName: e.target.value })}
          />
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            size="small"
            margin="normal"
            value={shipping.address}
            onChange={(e) => setShipping({ ...shipping, address: e.target.value })}
          />
          <TextField
            label="Apt, suite, etc. (optional)"
            variant="outlined"
            fullWidth
            size="small"
            margin="normal"
            value={shipping.apt}
            onChange={(e) => setShipping({ ...shipping, apt: e.target.value })}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="City"
                variant="outlined"
                fullWidth
                size="small"
                margin="normal"
                value={shipping.city}
                onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="State"
                variant="outlined"
                fullWidth
                size="small"
                margin="normal"
                value={shipping.state}
                onChange={(e) => setShipping({ ...shipping, state: e.target.value })}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Zip code"
                variant="outlined"
                fullWidth
                size="small"
                margin="normal"
                value={shipping.zip}
                onChange={(e) => setShipping({ ...shipping, zip: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                size="small"
                margin="normal"
                value={shipping.phone}
                onChange={(e) => setShipping({ ...shipping, phone: e.target.value })}
              />
            </Grid>
          </Grid>

          {/* Payment */}
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{ mt: 3, mb: 2, fontSize: { xs: 20, sm: 22 } }}
          >
            Payment
          </Typography>
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <RadioGroup
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              row
              aria-label="payment method"
              name="paymentMethod"
            >
              <FormControlLabel value="card" control={<Radio />} label="Credit card" />
              <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
            </RadioGroup>
          </FormControl>
          {paymentMethod === "card" && (
            <>
              <TextField
                label="Card number"
                variant="outlined"
                fullWidth
                size="small"
                margin="normal"
                value={card.number}
                onChange={(e) => setCard({ ...card, number: e.target.value })}
                sx={{
                  "& input": { color: "#b79da5" },
                }}
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Expiration date"
                    variant="outlined"
                    fullWidth
                    size="small"
                    margin="normal"
                    value={card.expiry}
                    onChange={(e) => setCard({ ...card, expiry: e.target.value })}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="CVV"
                    variant="outlined"
                    fullWidth
                    size="small"
                    margin="normal"
                    value={card.cvv}
                    onChange={(e) => setCard({ ...card, cvv: e.target.value })}
                  />
                </Grid>
              </Grid>
              <TextField
                label="Name on card"
                variant="outlined"
                fullWidth
                size="small"
                margin="normal"
                value={card.name}
                onChange={(e) => setCard({ ...card, name: e.target.value })}
              />
            </>
          )}

          {/* Review items and summary */}
          <Box sx={{ mt: 5, ml: 0, maxWidth: 370 }}>
            <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
              Review items
            </Typography>
            {reviewItems.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1.2,
                  fontSize: 15,
                  width: "100%",
                }}
              >
                <Avatar
                  variant="rounded"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    height: 38,
                    width: 38,
                    bgcolor: "#f5f5f5",
                    mr: 1.5,
                  }}
                />
                <Box sx={{ minWidth: 0 }}>
                  <Typography fontWeight={500} fontSize={15} sx={{ lineHeight: 1.1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Size {item.size}
                  </Typography>
                </Box>
                <Typography sx={{ ml: "auto", fontWeight: 500 }}>${item.price}</Typography>
              </Box>
            ))}

            <Box sx={{ mt: 1.5 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.3 }}>
                <Typography sx={{ color: "#b79da5", fontSize: 15 }}>Subtotal</Typography>
                <Typography sx={{ color: "#222", fontSize: 15 }}>${subtotal}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.3 }}>
                <Typography sx={{ color: "#b79da5", fontSize: 15 }}>Shipping</Typography>
                <Typography sx={{ color: "#222", fontSize: 15 }}>Free</Typography>
              </Box>
              <Divider sx={{ my: 1.3 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                <Typography sx={{ fontWeight: 700, color: "#222", fontSize: 16 }}>Total</Typography>
                <Typography sx={{ fontWeight: 700, color: "#222", fontSize: 16 }}>
                  ${total}
                </Typography>
              </Box>
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="error"
              size="large"
              fullWidth
              sx={{
                borderRadius: 2,
                fontWeight: 600,
                fontSize: { xs: 16, sm: 18 },
                bgcolor: "#ea2222",
                "&:hover": { bgcolor: "#d01919" },
                textTransform: "none",
                mt: 3,
              }}
            >
              Place Order
            </Button>
          </Box>
        </form>
      </Container>
      <Footer />
    </>
  );
}
