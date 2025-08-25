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
  Grid,
  Paper,
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
    <Container
      maxWidth="xs"
      sx={{
        mt: { xs: 4, sm: 10 },
        mb: { xs: 4, sm: 8 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: { xs: '85vh', sm: '80vh' },
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          py: { xs: 4, sm: 5 },
          px: { xs: 2.5, sm: 5 },
          borderRadius: 4,
          width: '100%',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              mb: { xs: 3, sm: 4 },
              fontFamily: "'Poppins', sans-serif",
              fontSize: { xs: 28, sm: 32 },
              width: '100%'
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
                  size="small"
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
              <Typography sx={{ color: 'red', mt: 0.5, mb: 0.5, fontFamily: "'Poppins', sans-serif", fontSize: 15 }}>
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
                fontSize: { xs: '0.96rem', sm: '1rem' },
                py: 1.1
              }}
            >
              Sign In
            </Button>
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
      </Paper>
    </Container>
  );
};

export default LoginPage;
