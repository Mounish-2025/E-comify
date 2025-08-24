import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
  Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [fields, setFields] = useState({ username: '', password: '', remember: false });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      fields.username === "mounish2002" &&
      fields.password === "12345"
    ) {
      setError('');
      navigate('/home');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Box
          sx={{
            mt: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              alignSelf: 'center',
              width: '100%',
              mb: 4,
              fontWeight: 700,
              textAlign: 'center',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Welcome
          </Typography>
          <Box component="form" sx={{ width: '100%' }} onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              placeholder="Enter your username"
              variant="outlined"
              InputLabelProps={{ sx: { fontFamily: "'Poppins', sans-serif" } }}
              sx={{ mb: 2, fontFamily: "'Poppins', sans-serif" }}
              name="username"
              value={fields.username}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              placeholder="Enter your password"
              variant="outlined"
              InputLabelProps={{ sx: { fontFamily: "'Poppins', sans-serif" } }}
              sx={{ mb: 2, fontFamily: "'Poppins', sans-serif" }}
              name="password"
              value={fields.password}
              onChange={handleChange}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="remember"
                  checked={fields.remember}
                  onChange={handleChange}
                />
              }
              label="Remember me"
              sx={{
                mb: 2,
                fontFamily: "'Poppins', sans-serif",
                '& .MuiFormControlLabel-label': { fontFamily: "'Poppins', sans-serif" },
              }}
            />
            {error && (
              <Typography sx={{ color: 'red', mt: 0.5, mb: 0.5, fontFamily: "'Poppins', sans-serif" }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                mb: 2,
                fontWeight: 600,
                bgcolor: '#ea2222',
                '&:hover': { bgcolor: '#d01919' },
                borderRadius: 2,
                fontFamily: "'Poppins', sans-serif",
                fontSize: '1rem'
              }}
            >
              Sign In
            </Button>
            {/* Stack the links side by side and center them */}
            <Grid container justifyContent="center" spacing={4} sx={{ mt: 2 }}>
              <Grid item>
                <Link href="#" variant="body2" underline="hover" sx={{ fontFamily: "'Poppins', sans-serif" }}>
                  Forgot your password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" underline="hover" sx={{ fontFamily: "'Poppins', sans-serif" }}>
                  Don&apos;t have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;