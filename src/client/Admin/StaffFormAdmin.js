import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Grid } from "@mui/material";
import * as Yup from "yup";

const StaffForm = () => {
  const validationSchema = Yup.object().shape({
    FullName: Yup.string().required("Full Name is required"),
    salary: Yup.number().required("Salary is required").positive("Salary must be positive"),
    role: Yup.string().required("Role is required"),
    start_time: Yup.string().required("Start Time is required"),
    end_time: Yup.string().required("End Time is required"),
  });

  const formik = useFormik({
    initialValues: {
      FullName: "",
      salary: "",
      role: "",
      start_time:"",
      end_time:"",
    },
    validationSchema: validationSchema,
    onSubmit: async  (values) => {
      try {
        const token = localStorage.getItem('token');
        let result = await fetch("http://localhost:8000/api/add-staff", {
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
            label="Full Name"
            name="FullName"
            value={formik.values.FullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.FullName && Boolean(formik.errors.FullName)}
            helperText={formik.touched.FullName && formik.errors.FullName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Salary"
            name="salary"
            type="number"
            value={formik.values.salary}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.salary && Boolean(formik.errors.salary)}
            helperText={formik.touched.salary && formik.errors.salary}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Role"
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.role && Boolean(formik.errors.role)}
            helperText={formik.touched.role && formik.errors.role}
          />
        </Grid>
        <Grid item xs = {12}>
          <TextField
          fullWidth
          label="startTime"
          name="start_time"
          type="time"
          value={formik.values.start_time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.start_time && Boolean(formik.errors.end_time)}
          helperText={formik.touched.start_time && formik.errors.start_time}
          />
        </Grid>
        <Grid item xs = {12}>
          <TextField
          fullWidth
          label="endTime"
          name="end_time"
          type="time"
          value={formik.values.end_time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.end_time && Boolean(formik.errors.end_time)}
          helperText={formik.touched.end_time && formik.errors.end_time}
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
              Add Staff
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default StaffForm;
