import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Grid } from "@mui/material";
import * as Yup from "yup";

const SupplierForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Supplier name is required"),
    phoneNumber: Yup.string().required("phoneNumber is required"),
    city: Yup.string().required("City is required")
  
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      city: ""

    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
     
      try {
        const token = localStorage.getItem('token');
        let result = await fetch("http://localhost:8000/api/insertSupplier", {
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
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Supplier Name"
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
            label="Phone Number"
            name="phoneNumber"
            type="text"
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
            label="City"
            name="city"
            type="text"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
        </Grid>
        
        <Grid container justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Add Supplier
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default SupplierForm;
