import { TextField, Button, Grid } from "@mui/material";
import React,{ useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


const EditBookingForm = () => {
    const { id } = useParams();
   
    const [bookingField, setBookingField] = useState({
       
        phoneNumber: "",
        dateTime: "",
        number_of_guests: "",
    });

    useEffect(() => {
        fetchBooking();
    }, [id]); 

    const fetchBooking = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:8000/api/getBookingById/${id}`, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const result = await response.json(); 
            setBookingField(result);
        } catch (err) {
            console.log("Something went wrong:", err);
        }
    };

    const changeUserFieldHandler = (e) => {
        setBookingField({
            ...bookingField,
            [e.target.name]: e.target.value,
            user : {
                ...bookingField.user,
                [e.target.name] : e.target.value
            }
        });
       
    };
     
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await fetch(`http://localhost:8000/api/updateBooking/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(bookingField) 
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
                            label="Phone Number"
                            name="phoneNumber"
                            type="text"
                            value={bookingField.user ? bookingField.user.phoneNumber : ''}
                            onChange={changeUserFieldHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Date and Time"
                            type="datetime"
                            name="dateTime"
                            value={bookingField.dateTime}
                            onChange={changeUserFieldHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Number Of Guests"
                            name="number_of_guests"
                            type="number"
                            value={bookingField.number_of_guests}
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

export default EditBookingForm;
