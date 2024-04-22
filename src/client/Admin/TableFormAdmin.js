import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Grid } from "@mui/material";
import * as Yup from "yup";

const TableForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Table is required"),
    capacity: Yup.string().required("Capacity is required"),
  
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      capacity: "",

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
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Table Name"
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
            label="Capacity"
            name="capacity"
            value={formik.values.capacity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.capacity && Boolean(formik.errors.capacity)}
            helperText={formik.touched.capacity && formik.errors.capacity}
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
              Add Table
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default TableForm;
