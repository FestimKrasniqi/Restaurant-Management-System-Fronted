import { TextField, Button, Grid } from "@mui/material";
import React,{ useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const EditSupplierForm = () => {
    const { id } = useParams();
   
    const [supplierField, setSupplierField] = useState({
        name: "",
        phoneNumber: "",
        city: ""
        
    });

    useEffect(() => {
        fetchSupplier();
    }, [id]); 

    const fetchSupplier = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:8000/api/getSupplierById/${id}`, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const result = await response.json(); 
            setSupplierField(result);
        } catch (err) {
            console.log("Something went wrong:", err);
        }
    };

    const changeUserFieldHandler = (e) => {
        setSupplierField({
            ...supplierField,
            [e.target.name]: e.target.value,
           
        });
       
    };
     
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await fetch(`http://localhost:8000/api/updateSupplier/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(supplierField) 
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
                            label="Supplier Name"
                            name="name"
                            type="text"
                            value={supplierField.name}
                            onChange={changeUserFieldHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="phoneNumber"
                            type="text"
                            name="phoneNumber"
                            value={supplierField.phoneNumber}
                            onChange={changeUserFieldHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="City"
                            type="text"
                            name="city"
                            value={supplierField.city}
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

export default EditSupplierForm;
