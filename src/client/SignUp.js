import * as React from 'react';
import { Formik, useFormik } from 'formik';
import {useState} from 'react';
import * as Yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Restaurant Peja
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const restaurantTheme = createTheme({
  palette: {
    primary: {
      main: '#8BC34A',
    },
  },
});

export default function SignUp() {
 



  const formik = useFormik({
    initialValues: {
      first: '',
      last: '',
      email: '',
      password: '',
      confirm_password: '',
      subscribe: false,
    },
    validationSchema: Yup.object({
      first: Yup.string().required('First Name is required').max(255),
      last: Yup.string().required('Last Name is required ').max(255),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required').min(8, 'Password must have 8 characters'),
      confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm Password is required'),
    }),

    onSubmit: async (values,{resetForm}) => {
      try {
        const response = await fetch("http://localhost:8000/api/SignUp", {
          method: 'POST',
          body: JSON.stringify(formik.values),
          headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
          }
        });

       

        if(response.ok) {
          const result = await response.json();
          alert('User registered with success')
          resetForm();
        } else {
          alert('User Registration failed')
          resetForm();
        }
      } catch (error) {
        alert('Error:', error);
        
      }
    }
  });

  return (
    <ThemeProvider theme={restaurantTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <RestaurantIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Restaurant Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="first"
                  required
                  fullWidth
                  id="first"
                  label="First Name"
                  autoComplete="given-name"
                  value={formik.values.first}
                  onChange={formik.handleChange}
                  error={formik.touched.first && Boolean(formik.errors.first)}
                  helperText={formik.touched.first && formik.errors.first}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="last"
                  label="Last Name"
                  name="last"
                  autoComplete="family-name"
                  value={formik.values.last}
                  onChange={formik.handleChange}
                  error={formik.touched.last && Boolean(formik.errors.last)}
                  helperText={formik.touched.last && formik.errors.last}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm_password"
                  label="confirm-password"
                  type="password"
                  id="confirm_password"
                  autoComplete="same-password"
                  value={formik.values.confirm_password}
                  onChange={formik.handleChange}
                  error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
                  helperText={formik.touched.confirm_password && formik.errors.confirm_password}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox checked={formik.values.subscribe} onChange={formik.handleChange} name="subscribe" color="primary" />}
                  label="I want to receive offers, promotions, and news from the restaurant."
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
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
