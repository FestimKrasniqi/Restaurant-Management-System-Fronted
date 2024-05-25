import { TextField, Button, Grid } from "@mui/material";
import React,{ useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const EditMenuForm = () => {
    const { id } = useParams();
   
    const [menuField, setMenuField] = useState({
        name: "",
        price: "",
        description: "",
        category_name: "",
        image_url: "",
    });

    useEffect(() => {
        fetchMenu();
    }, [id]); 

    const fetchMenu = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:8000/api/menu/${id}`, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const result = await response.json(); 
            setMenuField(result);
        } catch (err) {
            console.log("Something went wrong:", err);
        }
    };

    const changeUserFieldHandler = (e) => {
        setMenuField({
            ...menuField,
            [e.target.name]: e.target.value,
            category: {
               ...menuField.category,
               [e.target.name] : e.target.value
            }
        });
       
    };
     
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await fetch(`http://localhost:8000/api/updateMenu/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(menuField) 
            });
        } catch (err) {
            console.log("Something went wrong:", err);
        }
    };

    return(
        <div className="container">
            <h1>Edit Form</h1>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Name"
                            placeholder="Enter Your Name"
                            name="name"
                            type="text"
                            value={menuField.name}
                            onChange={changeUserFieldHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Price"
                            type="number"
                            placeholder="Enter Price"
                            name="price"
                            value={menuField.price}
                            onChange={changeUserFieldHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Description"
                            placeholder="Enter Description"
                            name="description"
                            type="text"
                            value={menuField.description}
                            onChange={changeUserFieldHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Category"
                            placeholder="Enter Category"
                            name="category_name"
                            type="text"
                            value={menuField.category ? menuField.category.category_name : ''}
                            onChange={changeUserFieldHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="file"
                            label="Image"
                            id="image_url"
                            name="image_url"
                            InputLabelProps={{ shrink: true }}
                            inputProps={{ accept: 'image/*' }} 
                            onChange={changeUserFieldHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={onSubmitChange}
                        >
                            Update
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default EditMenuForm;
