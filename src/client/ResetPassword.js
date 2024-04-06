import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import {formik,useFormik} from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

function ResetPassword() {
  const formik = useFormik({
initialValues : {
 
    password : '',
    confirm_password : ''

},

validationSchema:Yup.object ({

    password:Yup.string().required("Password is required").min(8),
    confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm Password is required'),
}),

onSubmit: values => {
    console.log(values)
  },


  });
  

  return (
    <ThemeProvider theme={createTheme()}>
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>
            <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="password"
                autoFocus
                value = {formik.values.password}
                onChange = {formik.handleChange}
                error = {formik.touched.password && Boolean(formik.errors.password)}
                helperText = {formik.touched.password && formik.errors.password}
              />
              <TextField 
              margin = "normal"
              required
              fullWidth
              id="confirm_password"
              label="confirm password"
              name="confirm_password"
              autoComplete="password"
              autoFocus
              value = {formik.values.confirm_password}
              onChange = {formik.handleChange}
              error = {formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
              helperText = {formik.touched.confirm_password && formik.errors.confirm_password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Reset Password
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/" variant="body2">
                    Back to Login
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
       
        </Container>
    </ThemeProvider>
  );
}

export default ResetPassword;