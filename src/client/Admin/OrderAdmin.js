
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState,useEffect } from 'react';




export default function OrderAdmin() {


    const [orders,setOrders] = useState([]);
    
    useEffect(()=>{
    const fetchorder =  async () => {
        try {
          const token = localStorage.getItem('token');
            const response = await fetch("http://localhost:8000/api/getAllOrders", {
              method:"GET",
              headers: {
                'Content-type' : 'application/json',
                'Accept': 'application/json',
                'Authorization' : `Bearer ${token}`
    
              }
            });
            if(!response.ok) {
                console.error("Failed to fetch order");
            }
            const data = await response.json();
            setOrders(data);
        } catch(error) {
            console.log(error);
        }
    
    };
    fetchorder();
    },[]);
    



  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First</TableCell>
            <TableCell>Last</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>FoodItem</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Bill</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.user.first}</TableCell>
              <TableCell>{order.user.last}</TableCell>
              <TableCell>{order.user.email}</TableCell>
              <TableCell>{order.user.address}</TableCell>
              <TableCell>{order.user.phoneNumber}</TableCell>
              <TableCell>{order.menu.name}</TableCell>
              <TableCell>{order.quantity}</TableCell>
              <TableCell>{order.bill}€ </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
