import * as React from 'react';
import {Formik,useFormik} from 'formik';
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
      firstName : '',
      lastName : '',
      email: '',
      password: '',
      confirmPassword: '',
      subscribe : false,
    },
    validationSchema: Yup.object ({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required '),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password:Yup.string().required('Password is required').min(8,'Password must have 8 characters'),
      confirmPassword:Yup.string().oneOf([Yup.ref('password'),null],'Password must match').required('Confirm Password is required'),
    }),
    
    onSubmit:values => {
  console.log(values);
    },

    
  });
  

  return (
    <ThemeProvider theme={restaurantTheme}>
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
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoComplete="given-name"
                  value = {formik.values.firstName}
                  onChange = {formik.handleChange}
                  error = {formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value = {formik.values.lastName}
                  onChange={formik.handleChange}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
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
                  value = {formik.values.email}
                  onChange = {formik.handleChange}
                  error = {formik.touched.email && Boolean(formik.errors.email)}
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
                  value = {formik.values.password}
                  onChange = {formik.handleChange}
                  error = {formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="confirm-password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="same-password"
                  value = {formik.values.confirmPassword}
                  onChange = {formik.handleChange}
                  error = {formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                  helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
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
