import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Grid } from "@mui/material";
import * as Yup from "yup";

const ReservationForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    dateTime: Yup.date().required("Date and time are required"),
    guests: Yup.number().required("Number of guests is required").min(1, "Must be at least 1"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      dateTime: "",
      guests: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone"
            type="tel"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Date and Time"
            type="datetime-local"
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
            name="guests"
            value={formik.values.guests}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.guests && Boolean(formik.errors.guests)}
            helperText={formik.touched.guests && formik.errors.guests}
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
