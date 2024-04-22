import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Grid } from "@mui/material";
import * as Yup from "yup";

const MenuFormAdmin = () => {
  const validationSchema = Yup.object().shape({
    foodItem: Yup.string().required("Food Name is required"),
    image: Yup.mixed().required("Image is required"),
    price: Yup.number().required("Price is required").positive("Price must be positive"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
  });

  const formik = useFormik({
    initialValues: {
      foodItem: "",
      image: "",
      price: "",
      description: "",
      category: "",
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
            label="Food Name"
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
            label="Image"
            type="file"
            name="image"
            InputLabelProps={{ shrink: true }}
            inputProps={{ accept: 'image/*' }} 
            onChange={(event) => {
              formik.setFieldValue("image", event.currentTarget.files[0]);
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.image && Boolean(formik.errors.image)}
            helperText={formik.touched.image && formik.errors.image}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Price"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
           
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>
        <Grid item xs = {12}>
          <TextField
          fullWidth
          label="Category"
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.category && Boolean(formik.errors.category)}
          helperText={formik.touched.category && formik.errors.category}
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
              Add Menu
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default MenuFormAdmin;
