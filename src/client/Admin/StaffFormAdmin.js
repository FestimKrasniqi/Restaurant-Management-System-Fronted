import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Grid } from "@mui/material";
import * as Yup from "yup";

const StaffForm = () => {
  const validationSchema = Yup.object().shape({
    first: Yup.string().required("First Name is required"),
    last: Yup.string().required("Last Name is required"),
    Salary: Yup.number().required("Salary is required").positive("Salary must be positive"),
    Role: Yup.string().required("Role is required"),
    startTime: Yup.string().required("Start Time is required"),
    endTime: Yup.string().required("End Time is required"),
  });

  const formik = useFormik({
    initialValues: {
      first: "",
      last: "",
      Salary: "",
      Role: "",
      startTime:"",
      endTime:"",
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
            label="First Name"
            name="first"
            value={formik.values.first}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.first && Boolean(formik.errors.first)}
            helperText={formik.touched.first && formik.errors.first}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Last Name"
            name="last"
            value={formik.values.last}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.last && Boolean(formik.errors.last)}
            helperText={formik.touched.last && formik.errors.last}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Salary"
            name="Salary"
            type="number"
            value={formik.values.Salary}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Salary && Boolean(formik.errors.Salary)}
            helperText={formik.touched.Salary && formik.errors.Salary}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Role"
            name="Role"
            value={formik.values.Role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Role && Boolean(formik.errors.Role)}
            helperText={formik.touched.Role && formik.errors.Role}
          />
        </Grid>
        <Grid item xs = {12}>
          <TextField
          fullWidth
          label="startTime"
          name="startTime"
          value={formik.values.startTime}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.startTime && Boolean(formik.errors.startTime)}
          helperText={formik.touched.startTime && formik.errors.startTime}
          />
        </Grid>
        <Grid item xs = {12}>
          <TextField
          fullWidth
          label="endTime"
          name="endTime"
          value={formik.values.endTime}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.endTime && Boolean(formik.errors.endTime)}
          helperText={formik.touched.endTime && formik.errors.endTime}
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
