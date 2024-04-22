// MyOrders.js
import React from 'react';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button,Box } from '@mui/material';

const MenuAdmin = () => {
  return (
    <div>
       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h4">Menu items</Typography>
        <Button variant="contained" color="primary" href="menuformadmin">Add Menu</Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Food Item</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Chicken Burger</TableCell>
              <TableCell>Foto</TableCell>
              <TableCell>2.50$</TableCell>
              <TableCell>Hamburger me mish Pule,sallate,pomfrit</TableCell>
              <TableCell>Meat</TableCell>
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

export default MenuAdmin;
