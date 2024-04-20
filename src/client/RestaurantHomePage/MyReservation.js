
import React from 'react';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button,Box } from '@mui/material';

const MyReservation = () => {
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
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Number of Guests</TableCell>
              <TableCell>Date and Time</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Festim</TableCell>
              <TableCell>FK50@gmail.com</TableCell>
              <TableCell>+38349765343</TableCell>
              <TableCell>3</TableCell>
              <TableCell>5-5-2024</TableCell>
              <TableCell>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button variant="outlined" color="primary">Edit</Button>
                <Button variant="outlined" color="error">Delete</Button>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyReservation;
