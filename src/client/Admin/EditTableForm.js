import { TextField, Button, Grid } from "@mui/material";
import React,{ useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const EditTableForm = () => {
    const { id } = useParams();
   
    const [tableField, setTableField] = useState({
        table_name: "",
        capacity: "",
        
    });

    useEffect(() => {
        fetchTable();
    }, [id]); 

    const fetchTable = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:8000/api/getTableById/${id}`, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const result = await response.json(); 
            setTableField(result);
        } catch (err) {
            console.log("Something went wrong:", err);
        }
    };

    const changeUserFieldHandler = (e) => {
        setTableField({
            ...tableField,
            [e.target.name]: e.target.value,
           
        });
       
    };
     
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await fetch(`http://localhost:8000/api/updateTable/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(tableField) 
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
                            label="Table Name"
                            name="table_name"
                            type="text"
                            value={tableField.table_name}
                            onChange={changeUserFieldHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Capacity"
                            type="number"
                            name="capacity"
                            value={tableField.capacity}
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

export default EditTableForm;
