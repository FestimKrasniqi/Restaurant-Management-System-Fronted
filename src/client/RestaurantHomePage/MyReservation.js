
import {useState, useEffect } from 'react';
import React from 'react';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button,Box } from '@mui/material';
import { Link } from 'react-router-dom';

const MyReservation = () => {

  const [bookings,setBookings] = useState([]);
    
  useEffect(()=>{
  const fetchbooking =  async () => {
      try {
        const token = localStorage.getItem('token');
          const response = await fetch("http://localhost:8000/api/index", {
            method:"GET",
            headers: {
              'Content-type' : 'application/json',
              'Accept': 'application/json',
              'Authorization' : `Bearer ${token}`
  
            }
          });
          if(!response.ok) {
              console.error("Failed to fetch booking");
          }
          const data = await response.json();
          setBookings(data);
      } catch(error) {
          console.log(error);
      }
  
  };
  fetchbooking();
  },[]);

  const Forget = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8000/api/deleteBooking/${id}`,{
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

      const newBooking = bookings.filter((booking)=> {
        return (
          booking.id !==id
        )
      })
      setBookings(newBooking)

     
    } catch(error) {
      console.log(error);
    }

  }



  return (
    <div>
       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h4">My Bookings</Typography>
        <Button variant="contained" color="primary" href="booking">Add Booking</Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First</TableCell>
              <TableCell>Last</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Number of Guests</TableCell>
              <TableCell>Date and Time</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
              <TableCell>{booking.user.first}</TableCell>
              <TableCell>{booking.user.last}</TableCell>
              <TableCell>{booking.user.email}</TableCell>
              <TableCell>{booking.user.phoneNumber}</TableCell>
              <TableCell>{booking.number_of_guests}</TableCell>
              <TableCell>{booking.datetime}</TableCell>
              <TableCell>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button variant="outlined" color="primary" component={Link} to={`/editBooking/${booking.id}`}>Edit</Button>
                <Button variant="outlined" color="error" onClick={()=>Forget(booking.id)}>Delete</Button>
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

export default MyReservation;
