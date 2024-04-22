
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function createData(id,  name, email,phoneNumber,numberOfGuests,datetime ) {
  return { id,  name, email,phoneNumber,numberOfGuests,datetime };
}

const rows = [
  createData(
    1,
    'Festim',
    'FK50@gmail.com',
    '+38349675421',
    5,
    '5-5-2024 15:30'
  )
];

function preventDefault(event) {
  event.preventDefault();
}

export default function BookingAdmin() {
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Number of Guests</TableCell>
            <TableCell>DateTime</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>{row.numberOfGuests}</TableCell>
              <TableCell >{row.datetime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
