import { TextField, Button, Grid } from "@mui/material";
import React,{ useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


const EditOrderForm = () => {
    const { id } = useParams();
   
    const [orderField, setOrderField] = useState({
        address: "",
        phoneNumber: "",
        name: "",
        quantity: "",
    });

    useEffect(() => {
        fetchOrder();
    }, [id]); 

    const fetchOrder = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:8000/api/getOrderById/${id}`, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const result = await response.json(); 
            setOrderField(result);
        } catch (err) {
            console.log("Something went wrong:", err);
        }
    };

    const changeUserFieldHandler = (e) => {
        setOrderField({
            ...orderField,
            [e.target.name]: e.target.value,
            menu : {
                ...orderField.menu,
                [e.target.name] : e.target.value
            },
            user : {
                ...orderField.user,
                [e.target.name] : e.target.value
            }
        });
       
    };
     
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await fetch(`http://localhost:8000/api/updateOrder/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(orderField) 
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
                            label="Address"
                            name="address"
                            type="text"
                            value={orderField.user ? orderField.user.address : ''}
                            onChange={changeUserFieldHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Phone Number"
                            type="text"
                            name="phoneNumber"
                            value={orderField.user ? orderField.user.phoneNumber : ''}
                            onChange={changeUserFieldHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Food Item"
                            name="name"
                            type="text"
                            value={orderField.menu ? orderField.menu.name : ''}
                            onChange={changeUserFieldHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Quantity"
                            name="quantity"
                            type="number"
                            value={orderField.quantity }
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

export default EditOrderForm;
