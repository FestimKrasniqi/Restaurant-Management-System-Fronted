import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Grid } from "@mui/material";
import * as Yup from "yup";


const MenuFormAdmin = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.mixed().required("Food Name is required"),
    image_url: Yup.string().required("Image is required"),
    price: Yup.number().required("Price is required").positive("Price must be positive"),
    description: Yup.string().required("Description is required"),
    category_name: Yup.string().required("Category is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      image_url: "",
      price: "",
      description: "",
      category_name: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values,{resetForm}) => {
    try{
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('price', values.price);
      formData.append('description', values.description);
      formData.append('category_name', values.category_name);
      formData.append('image_url', values.image_url);




      let result = await fetch("http://localhost:8000/api/create-menu", {
        method : "POST",
        body: formData,
        headers : {
          'Authorization' : `Bearer ${token}`
         }
      });
      result = await result.json();
      console.log(result);
      resetForm();
    } catch(error) {
      console.log("Error:", error)
    }
      
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off" encType="multipart/form-data">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Food Name"
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
            label="Image"
            type="file"
            name="image_url"
            InputLabelProps={{ shrink: true }}
            inputProps={{ accept: 'image/*' }} 
            onChange={(event) => {
              formik.setFieldValue("image_url", event.target.files[0]);
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.image_url && Boolean(formik.errors.image_url)}
            helperText={formik.touched.image_url && formik.errors.image_url}
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
          name="category_name"
          value={formik.values.category_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.category_name && Boolean(formik.errors.category_name)}
          helperText={formik.touched.category_name && formik.errors.category_name}
          />
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
             
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
