
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useState,useEffect} from 'react';



export default function BookingAdmin() {

  const [bookings,setBookings] = useState([]);
    
    useEffect(()=>{
    const fetchbooking =  async () => {
        try {
          const token = localStorage.getItem('token');
            const response = await fetch("http://localhost:8000/api/getAllBookings", {
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


  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First</TableCell>
            <TableCell>Last</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Number of Guests</TableCell>
            <TableCell>DateTime</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
