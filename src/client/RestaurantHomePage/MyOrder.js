
import React,{useState,useEffect} from 'react';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button,Box } from '@mui/material';
import {Link} from 'react-router-dom';

const MyOrders = () => {

  const [orders,setOrders] = useState([]);
    
  useEffect(()=>{
  const fetchorder =  async () => {
      try {
        const token = localStorage.getItem('token');
          const response = await fetch("http://localhost:8000/api/index1", {
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


  const Forget = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8000/api/deleteOrder/${id}`,{
        method : "DELETE",
        headers : {
          'Content-type' : 'application/json',
            'Accept': 'application/json',
            'Authorization' : `Bearer ${token}`
        }
      });

      
      if(!response.ok) {
        console.log("Failed to delete");
      } 

      const newOrder = orders.filter((order)=> {
        return (
          order.id !==id
        )
      })
      setOrders(newOrder)

     
    } catch(error) {
      console.log(error);
    }

  }



  return (
    <div>
     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h4">My Orders</Typography>
        <Button variant="contained" color="primary" href="order">Add Order</Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First</TableCell>
              <TableCell>Last</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Food Item</TableCell>
              <TableCell>Quantity</TableCell>
              {/*<TableCell>Bill</TableCell>*/}
              <TableCell>Actions</TableCell>
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
              {<TableCell>{order.menu.name}</TableCell>}
              <TableCell>{order.quantity}</TableCell>
              {/*<TableCell>{order.bill1.total_amount}€ </TableCell>*/}
              <TableCell>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button variant="outlined" color="primary" component={Link} to={`/editOrder/${order.id}`}>Edit</Button>
                <Button variant="outlined" color="error" onClick={()=> Forget(order.id)}>Delete</Button>
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

export default MyOrders;
