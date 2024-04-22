
import React,{useState,useEffect} from 'react';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button,Box } from '@mui/material';

const UserAdmin = () => {

const [users,setUsers] = useState([]);

useEffect(()=>{
const fetchuser =  async () => {
    try {
        const response = await fetch("http://localhost:8000/api/user1");
        if(!response.ok) {
            throw new Error("Failed to fetch user");
        }
        const data = await response.json();
        setUsers(data);
    } catch(error) {
        console.log(error);
    }

};
fetchuser();
},[]);


return (
    <div>
        <Typography variant="h4">Users Info</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First</TableCell>
              <TableCell>Last</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
                 <TableRow>
                 <TableCell>{user.id}</TableCell>
                 <TableCell>{user.first}</TableCell>
                 <TableCell>{user.last}</TableCell>
                 <TableCell>{user.address}</TableCell>
                 <TableCell>{user.phoneNumber}</TableCell>
                 <TableCell>{user.email}</TableCell>
                 <TableCell>{user.role}</TableCell>
               </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserAdmin;
