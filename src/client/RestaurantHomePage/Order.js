import React from "react";
import { TextField, Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const OrderForm = () => {
  const initialValues = {
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    foodItem: "",
    quantity: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    address: Yup.string().required("Address is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    foodItem: Yup.string().required("Food Item is required"),
    quantity: Yup.number()
      .typeError("Quantity must be a number")
      .required("Quantity is required")
      .positive("Quantity must be greater than zero"),
  });

  const onSubmit = (values) => {
    console.log(values);
    formik.resetForm();
    
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Food Item"
            name="foodItem"
            value={formik.values.foodItem}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.foodItem && Boolean(formik.errors.foodItem)}
            helperText={formik.touched.foodItem && formik.errors.foodItem}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Quantity"
            name="quantity"
            value={formik.values.quantity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.quantity && Boolean(formik.errors.quantity)}
            helperText={formik.touched.quantity && formik.errors.quantity}
          />
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Button variant="contained" color="secondary" type="submit" disabled={formik.isSubmitting}>
              Place Order
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default OrderForm;
