import React from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import polo from "../assets/Men/Polo-tshirt.png";
import shoes from "../assets/Men/Leather-boots.png";

const orderData = {
  orderNumber: "#123456789",
  orderDate: "July 26, 2024",
  total: 125.0,
  paymentMethod: "Credit Card",
  items: [
    {
      title: "Classic Cotton T-Shirt",
      image: polo,
      size: "M",
      price: 30.0,
    },
    {
      title: "Leather Ankle Boots",
      image: shoes,
      size: "8",
      price: 25.0,
    },
  ],
  shipping: {
    name: "Mounish",
    address: "197/N8, Washington Nagar, Tiruppur",
    city: "Tiruppur",
    state: "TamilNadu",
    zip: "641666",
  },
};

export default function OrderConfirmationPage() {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="md"
        sx={{
          mt: 5,
          mb: 10,
          fontFamily: "'Poppins', sans-serif",
          px: { xs: 2, sm: 3 },
        }}
      >
        {/* Breadcrumbs */}
        <Typography
          variant="body2"
          sx={{ color: "#b79da5", mb: 2, fontSize: { xs: 13, sm: 15 } }}
        >
          Home &nbsp;/&nbsp; Order Confirmation
        </Typography>

        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ mb: 2, fontSize: { xs: 24, sm: 28 } }}
        >
          Thank you for your order!
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ mb: 4, fontSize: { xs: 14, sm: 16 } }}
        >
          Your order has been placed and is being processed. You will receive an
          email confirmation shortly with tracking information.
        </Typography>

        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ mt: 3, mb: 1, fontSize: { xs: 20, sm: 22 } }}
        >
          Order Summary
        </Typography>
        <TableContainer>
          <Table size="small" sx={{ mb: 2 }}>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{ color: "#b79da5", border: 0, fontSize: { xs: 14, sm: 15 } }}
                >
                  Order Number
                </TableCell>
                <TableCell sx={{ border: 0, fontSize: { xs: 14, sm: 15 } }}>
                  {orderData.orderNumber}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ color: "#b79da5", border: 0, fontSize: { xs: 14, sm: 15 } }}
                >
                  Order Date
                </TableCell>
                <TableCell sx={{ border: 0, fontSize: { xs: 14, sm: 15 } }}>
                  {orderData.orderDate}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ color: "#b79da5", border: 0, fontSize: { xs: 14, sm: 15 } }}
                >
                  Total
                </TableCell>
                <TableCell sx={{ border: 0, fontSize: { xs: 14, sm: 15 } }}>
                  ${orderData.total.toFixed(2)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ color: "#b79da5", border: 0, fontSize: { xs: 14, sm: 15 } }}
                >
                  Payment Method
                </TableCell>
                <TableCell sx={{ border: 0, fontSize: { xs: 14, sm: 15 } }}>
                  {orderData.paymentMethod}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ mt: 3, mb: 1, fontSize: { xs: 20, sm: 22 } }}
        >
          Items Purchased
        </Typography>
        <Box sx={{ mb: 4 }}>
          {orderData.items.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1.5,
                fontSize: 15,
                maxWidth: 500,
                width: "100%",
              }}
            >
              <Avatar
                variant="rounded"
                src={item.image}
                alt={item.title}
                sx={{
                  height: 40,
                  width: 40,
                  bgcolor: "#f5f5f5",
                  mr: 1.5,
                }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography fontWeight={500} fontSize={15}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Size: {item.size}
                </Typography>
              </Box>
              <Typography sx={{ fontWeight: 500, fontSize: { xs: 14, sm: 15 } }}>
                ${item.price.toFixed(2)}
              </Typography>
            </Box>
          ))}
        </Box>

        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ mt: 3, mb: 1, fontSize: { xs: 20, sm: 22 } }}
        >
          Shipping Information
        </Typography>
        <TableContainer>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{ color: "#b79da5", border: 0, width: 110, fontSize: { xs: 14, sm: 15 } }}
                >
                  Name
                </TableCell>
                <TableCell sx={{ border: 0, fontSize: { xs: 14, sm: 15 } }}>
                  {orderData.shipping.name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ color: "#b79da5", border: 0, fontSize: { xs: 14, sm: 15 } }}
                >
                  Address
                </TableCell>
                <TableCell sx={{ border: 0, fontSize: { xs: 14, sm: 15 } }}>
                  {orderData.shipping.address}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ color: "#b79da5", border: 0, fontSize: { xs: 14, sm: 15 } }}
                >
                  City
                </TableCell>
                <TableCell sx={{ border: 0, fontSize: { xs: 14, sm: 15 } }}>
                  {orderData.shipping.city}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ color: "#b79da5", border: 0, fontSize: { xs: 14, sm: 15 } }}
                >
                  State
                </TableCell>
                <TableCell sx={{ border: 0, fontSize: { xs: 14, sm: 15 } }}>
                  {orderData.shipping.state}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ color: "#b79da5", border: 0, fontSize: { xs: 14, sm: 15 } }}
                >
                  Zip Code
                </TableCell>
                <TableCell sx={{ border: 0, fontSize: { xs: 14, sm: 15 } }}>
                  {orderData.shipping.zip}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Button
          variant="contained"
          color="error"
          sx={{
            mt: 4,
            borderRadius: 2,
            px: 3,
            fontWeight: 600,
            fontSize: { xs: 16, sm: 18 },
            bgcolor: "#ea2222",
            "&:hover": { bgcolor: "#d01919" },
            textTransform: "none",
          }}
        >
          View Order Details
        </Button>
      </Container>
      <Footer />
    </>
  );
}
