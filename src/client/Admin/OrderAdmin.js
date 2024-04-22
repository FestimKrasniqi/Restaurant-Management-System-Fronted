
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function createData(id, name, email, address, phoneNumber,foodItem,quantity,bill ) {
  return { id, name, email, address, phoneNumber,foodItem,quantity,bill };
}

const rows = [
  createData(
    1,
    'Festim',
    'FK50@gmail.com',
    'Street Haxhi Zeka',
    '+38349563245',
    'pizza',
    3,
    '10 euro'
  )
 
];

function preventDefault(event) {
  event.preventDefault();
}

export default function OrderAdmin() {
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>FoodItem</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Bill</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>{row.foodItem}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.bill} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
