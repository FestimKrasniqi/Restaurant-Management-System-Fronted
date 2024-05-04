import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Grid } from "@mui/material";
import * as Yup from "yup";

const TableForm = () => {
  const validationSchema = Yup.object().shape({
    table_name: Yup.string().required("Table is required"),
    capacity: Yup.string().required("Capacity is required"),
  
  });

  const formik = useFormik({
    initialValues: {
      table_name: "",
      capacity: "",

    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
     
      try {
        const token = localStorage.getItem('token');
        let result = await fetch("http://localhost:8000/api/insertTable", {
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
            label="Table Name"
            name="table_name"
            value={formik.values.table_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.table_name && Boolean(formik.errors.table_name)}
            helperText={formik.touched.table_name && formik.errors.table_name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Capacity"
            name="capacity"
            type="number"
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
