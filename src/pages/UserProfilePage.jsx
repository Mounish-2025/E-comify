import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function UserProfilePage() {
  // Dummy form state
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setInfo({ ...info, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle update logic here
    alert("Account updated!");
  };

  return (
    <>
      <Navbar />
      <Container
        maxWidth="md"
        sx={{
          mt: 5,
          mb: 10,
          fontFamily: "'Poppins',sans-serif",
          px: { xs: 2, sm: 3, md: 0 },
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ mb: 4, fontSize: { xs: 28, sm: 32, md: 36 } }}
        >
          My Account
        </Typography>

        {/* Tab bar with only one tab for now */}
        <Box sx={{ borderBottom: 1, borderColor: "#eee", mb: 3 }}>
          <Tabs value={0} TabIndicatorProps={{ style: { background: "#111" } }}>
            <Tab
              label={
                <span style={{ fontWeight: 600, color: "#111" }}>
                  Account Details
                </span>
              }
              disableRipple
              sx={{
                textTransform: "none",
                minWidth: 150,
                px: 0,
                mr: 3,
              }}
            />
          </Tabs>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ maxWidth: 540, bgcolor: "#fff", mx: "auto" }}
          autoComplete="off"
        >
          {/* Personal Information Section */}
          <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
            Personal Information
          </Typography>

          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            size="small"
            margin="normal"
            value={info.name}
            onChange={handleChange}
            InputProps={{ style: { fontSize: 16 } }}
          />

          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            size="small"
            margin="normal"
            type="email"
            value={info.email}
            onChange={handleChange}
            InputProps={{ style: { fontSize: 16 } }}
          />

          <TextField
            label="Phone Number"
            name="phone"
            variant="outlined"
            fullWidth
            size="small"
            margin="normal"
            value={info.phone}
            onChange={handleChange}
            InputProps={{ style: { fontSize: 16 } }}
          />

          {/* Password Section */}
          <Typography variant="h6" fontWeight={700} sx={{ mt: 5, mb: 2 }}>
            Password
          </Typography>

          <TextField
            label="Current Password"
            name="currentPassword"
            type="password"
            variant="outlined"
            fullWidth
            size="small"
            margin="normal"
            value={info.currentPassword}
            onChange={handleChange}
            InputProps={{ style: { fontSize: 16 } }}
          />

          <TextField
            label="New Password"
            name="newPassword"
            type="password"
            variant="outlined"
            fullWidth
            size="small"
            margin="normal"
            value={info.newPassword}
            onChange={handleChange}
            InputProps={{ style: { fontSize: 16 } }}
            placeholder="Enter new password"
          />

          <TextField
            label="Confirm New Password"
            name="confirmPassword"
            type="password"
            variant="outlined"
            fullWidth
            size="small"
            margin="normal"
            value={info.confirmPassword}
            onChange={handleChange}
            InputProps={{ style: { fontSize: 16 } }}
            placeholder="Confirm new password"
          />

          <Box sx={{ textAlign: "right", mt: 4 }}>
            <Button
              type="submit"
              variant="contained"
              color="error"
              sx={{
                borderRadius: 2,
                fontWeight: 600,
                fontSize: 15,
                bgcolor: "#ea2222",
                "&:hover": { bgcolor: "#d01919" },
                textTransform: "none",
                px: 4,
              }}
            >
              Update Account
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
