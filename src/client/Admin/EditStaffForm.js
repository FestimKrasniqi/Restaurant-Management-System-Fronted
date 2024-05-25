import { TextField, Button, Grid } from "@mui/material";
import React,{ useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const EditStaffForm = () => {
    const { id } = useParams();
   
    const [staffField, setStaffField] = useState({
        FullName: "",
        salary: "",
        role: "",
        start_time: "",
        end_time: "",
    });

    useEffect(() => {
        fetchStaff();
    }, [id]); 

    const fetchStaff = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:8000/api/staff/${id}`, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const result = await response.json(); 
            setStaffField(result);
        } catch (err) {
            console.log("Something went wrong:", err);
        }
    };

    const changeUserFieldHandler = (e) => {
        setStaffField({
            ...staffField,
            [e.target.name]: e.target.value,
            shift : {
                ...staffField.shift,
                [e.target.name] : e.target.value
            }
        });
       
    };
     
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await fetch(`http://localhost:8000/api/updateStaff/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(staffField) 
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
                            label="FullName"
                            name="FullName"
                            type="text"
                            value={staffField.FullName}
                            onChange={changeUserFieldHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Salary"
                            type="number"
                            name="salary"
                            value={staffField.salary}
                            onChange={changeUserFieldHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Role"
                            name="role"
                            type="text"
                            value={staffField.role}
                            onChange={changeUserFieldHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="StartTime"
                            name="start_time"
                            type="time"
                            value={staffField.shift ? staffField.shift.start_time : ''}
                            onChange={changeUserFieldHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="time"
                            label="EndTime"
                            id="end_time"
                            name="end_time"
                            value={staffField.shift ? staffField.shift.end_time : ''}
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

export default EditStaffForm;
