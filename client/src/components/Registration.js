import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Swal from 'sweetalert2';

const defaultTheme = createTheme();

export default function SignUp() {
  const [formErrors, setFormErrors] = useState({
    name: false,
    role: false,
    email: false,
    password: false
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    return emailRegex.test(email.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      name: data.get('name'),
      role: data.get('role'),
      email: data.get('email'),
      password: data.get('password'),
    };

    if (Object.values(formData).some(value => !value) || formData.role === "0") {
      setFormErrors({
        name: !formData.name,
        role: !formData.role,
        email: !formData.email,
        password: !formData.password
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormErrors({ ...formErrors, email: true });
      return;
    }

    axios.post('http://localhost:8081/insert', formData)
      .then((res) => {
        if (res.data.status === 'error') {
          Swal.fire({
            title: "Registration Error",
            text: res.data.error,
            icon: "error"
          });
        } else {
          Swal.fire({
            title: "Registration Successful",
            text: res.data.message,
            icon: "success"
          }).then(() => {
            const role = formData.role;
            if (role === '1') {
              window.location.href = "/admin";
            } else if (role === '2') {
              window.location.href = "/faculty";
            } else if (role === '3') {
              window.location.href = "/parent";
            } else if (role === '4') {
              window.location.href = "/volunteer";
            } else {
              window.location.href = "/login";
            }
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        Swal.fire({
          title: "Error",
          text: "An error occurred. Please try again later.",
          icon: "error"
        });
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={formErrors.name}
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  error={formErrors.role}
                  id="role"
                  label="Role"
                  name="role"
                  defaultValue={0}
                  fullWidth
                >
                  <MenuItem value={0}>Select Role</MenuItem>
                  <MenuItem value={1}>Admin</MenuItem>
                  <MenuItem value={2}>Faculty</MenuItem>
                  <MenuItem value={3}>Parent</MenuItem>
                  <MenuItem value={4}>Volunteer</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={formErrors.email}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={formErrors.password}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <p>Already have an account? <Link href="/login" variant="body2">
                  Sign in
                </Link></p>
              </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary" align="center">
              {'Copyright © '}
              <Link color="inherit" href="https://mui.com/">
                AMS
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
