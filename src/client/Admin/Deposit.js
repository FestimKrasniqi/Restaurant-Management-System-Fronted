import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function OrdersSummary() {
  const [orderCount, setOrderCount] = useState(0);
  const [orderSum, setOrderSum] = useState(0);
  const [bookingCount, setBookingCount] = useState(0);

  useEffect(() => {
    fetchOrderCount();
    fetchOrderSum();
    fetchBookingCount();
  }, []);

  const fetchOrderCount = async () => {
    try {
      const token = localStorage.getItem('token');
      const orderCountResponse = await fetch('http://localhost:8000/api/count',{
        method:"GET",
        headers: {
          'Content-type' : 'application/json',
          'Accept': 'application/json',
          'Authorization' : `Bearer ${token}`

        }
      });

      if (orderCountResponse.ok) {
        const data = await orderCountResponse.json();
        JSON.stringify(data);
        setOrderCount(data);
      }
    } catch (error) {
      console.error('Error fetching order count:', error);
    }
  };

  const fetchOrderSum = async () => {
    try {
      const token = localStorage.getItem('token');
      const orderSumResponse = await fetch('http://localhost:8000/api/sum',{
        method:"GET",
        headers: {
          'Content-type' : 'application/json',
          'Accept': 'application/json',
          'Authorization' : `Bearer ${token}`

        }
      });
      if (orderSumResponse.ok) {
        const data = await orderSumResponse.json();
        localStorage.setItem("orderSum", JSON.stringify(data));
        setOrderSum(data);
      }
    } catch (error) {
      console.error('Error fetching order sum:', error);
    }
  };

  const fetchBookingCount = async () => {
    try {
      const token = localStorage.getItem('token');

      const bookingCountResponse = await fetch('http://localhost:8000/api/count1',{
        method:"GET",
        headers: {
          'Content-type' : 'application/json',
          'Accept': 'application/json',
          'Authorization' : `Bearer ${token}`

        }
      });
      if (bookingCountResponse.ok) {
        const data = await bookingCountResponse.json();
        JSON.stringify(data);
        setBookingCount(data);
      }
    } catch (error) {
      console.error('Error fetching booking count:', error);
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Orders Summary
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Orders Count</TableCell>
              <TableCell>Orders Total</TableCell>
              <TableCell>Bookings Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{orderCount}</TableCell>
              <TableCell>{orderSum}€</TableCell>
              <TableCell>{bookingCount}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default OrdersSummary;
