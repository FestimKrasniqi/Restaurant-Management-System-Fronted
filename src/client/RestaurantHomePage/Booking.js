import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Grid } from "@mui/material";
import * as Yup from "yup";

const ReservationForm = () => {
  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string().required("Phone is required"),
    dateTime: Yup.date().required("Date and time are required"),
    number_of_guests: Yup.number().required("Number of guests is required").min(1, "Must be at least 1"),
  });

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      dateTime: "",
      number_of_guests: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const token = localStorage.getItem('token');
        let result = await fetch("http://localhost:8000/api/create-booking", {
          method: 'POST',
          body: JSON.stringify(formik.values),
          headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            'Authorization' : `Bearer ${token}`
          }
        });
  
        result = await result.json();
      console.log(result);
      formik.resetForm();
    } catch(error) {
      console.log("Error:", error)
    }
      
      
    
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone"
            type="tel"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Date and Time"
            type="datetime"
            name="dateTime"
            value={formik.values.dateTime}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.dateTime && Boolean(formik.errors.dateTime)}
            helperText={formik.touched.dateTime && formik.errors.dateTime}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Number of Guests"
            type="number"
            name="number_of_guests"
            value={formik.values.number_of_guests}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.number_of_guests && Boolean(formik.errors.number_of_guests)}
            helperText={formik.touched.number_of_guests && formik.errors.number_of_guests}
          />
          <br />
          <br />
          <br />
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Place Booking
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default ReservationForm;
