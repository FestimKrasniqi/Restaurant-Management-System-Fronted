
import React,{useState,useEffect} from 'react';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button,Box } from '@mui/material';
import {Link} from 'react-router-dom';

const SupplierAdmin = () => {

const [supplier,setSupplier] = useState([]);

useEffect(()=>{
const fetchsupplier =  async () => {
    try {
      const token = localStorage.getItem('token');
        const response = await fetch("http://localhost:8000/api/getSupplier", {
          method:"GET",
          headers: {
            'Content-type' : 'application/json',
            'Accept': 'application/json',
            'Authorization' : `Bearer ${token}`

          }
        });
        if(!response.ok) {
            console.error("Failed to fetch supplier");
        }
        const data = await response.json();
        setSupplier(data);
    } catch(error) {
        console.log(error);
    }

};
fetchsupplier();
},[]);

const Forget = async (id) => {
    try{
      const token = localStorage.getItem('token');{
      const response = await fetch(`http://localhost:8000/api/deleteSupplier/${id}`, {
        method : "DELETE",
        headers : {
          "Content-type" : "application/json",
          'Accept' : 'application/json',
          'Authorization' : `Bearer ${token}`
        }
      });

      if(!response.ok) {
        console.log("Failed to delete");
      }

    const newsupplier = supplier.filter((supplier2) => {
      return (
        supplier2.id !== id
      )
    })


    setSupplier(newsupplier);
      
    } 
  } catch(error) {
    console.log(error);
  }
}



return (
    <div>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h4">Suppliers Info</Typography>
        <Button variant="contained" color="primary" href="supplierformadmin">Add Supplier</Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Supplier Name</TableCell>
              <TableCell>City</TableCell>
              <TableCell>PhoneNumber</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {supplier.map(supplier1 => (
                 <TableRow>
                 <TableCell>{supplier1.id}</TableCell>
                 <TableCell>{supplier1.name}</TableCell>
                 <TableCell>{supplier1.city}</TableCell>
                 <TableCell>{supplier1.phoneNumber}</TableCell>
                 <TableCell>
                 <Box sx={{ display: 'flex', gap: 1 }}>
                <Button variant="outlined" color="primary" component={Link} to={`/editSupplier/${supplier1.id}`}>Edit</Button>
                <Button variant="outlined" color="error" onClick={() => Forget(supplier1.id)}>Delete</Button>
                </Box>
                </TableCell>
               </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SupplierAdmin;
