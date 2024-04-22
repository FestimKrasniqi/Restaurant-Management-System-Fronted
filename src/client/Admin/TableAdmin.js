
import React from 'react';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button,Box } from '@mui/material';

const TableAdmin = () => {
  return (
    <div>
       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h4">Table Capacity</Typography>
        <Button variant="contained" color="primary" href="tableformadmin">Add Table</Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Capacity</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Tavolina 1</TableCell>
              <TableCell>4</TableCell>
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

export default TableAdmin;
