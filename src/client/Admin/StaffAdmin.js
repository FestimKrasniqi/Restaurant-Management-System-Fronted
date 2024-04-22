
import React from 'react';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button,Box } from '@mui/material';

const StaffAdmin = () => {
  return (
    <div>
       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h4">Staff Members</Typography>
        <Button variant="contained" color="primary" href="staffformadmin">Add Staff</Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First</TableCell>
              <TableCell>Last</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Start Time</TableCell>
              <TableCell>End Time</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Filan</TableCell>
              <TableCell>Fisteku</TableCell>
              <TableCell>500$</TableCell>
              <TableCell>Waiter</TableCell>
              <TableCell>8 AM</TableCell>
              <TableCell>4 PM</TableCell>
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

export default StaffAdmin;
