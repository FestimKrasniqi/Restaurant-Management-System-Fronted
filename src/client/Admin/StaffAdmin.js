
import React,{useState,useEffect} from 'react';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button,Box } from '@mui/material';
import { Link } from 'react-router-dom';

const StaffAdmin = () => {

  const[staff,setStaff] = useState([]);

  useEffect(() => {
    const fetchstaff = async () => {
      try{
        const token = localStorage.getItem('token');
        const response = await fetch("http://localhost:8000/api/allStaff", {
          method: "GET",
          headers: {
            'Content-type' : 'application/json',
            'Accept': 'application/json',
            'Authorization' : `Bearer ${token}`
          }
        });

        if(!response.ok) {
          console.log("Failed to fetch staff");
        }
        const data = await response.json();
        setStaff(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchstaff();
  },[]);

  const Forget = async (id) => {
    try{
      const token = localStorage.getItem('token');{
      const response = await fetch(`http://localhost:8000/api/deleteStaff/${id}`, {
        method : "DELETE",
        headers : {
          "Content-type" : "application/json",
          'Accept' : 'application/json',
          'Authorization' : `Bearer ${token}`
        }
      });

      if(!response.ok) {
        console.log("Failed to delete");
      }

    const newstaff = staff.filter((staff2) => {
      return (
        staff2.id !== id
      )
    })


    setStaff(newstaff);
      
    } 
  } catch(error) {
    console.log(error);
  }
}


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
              <TableCell>FullName</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Start Time</TableCell>
              <TableCell>End Time</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staff.map(staff1 => (
               <TableRow>
               <TableCell>{staff1.id}</TableCell>
               <TableCell>{staff1.FullName}</TableCell>
               <TableCell>{staff1.salary}€</TableCell>
               <TableCell>{staff1.role}</TableCell>
               <TableCell>{staff1.shift.start_time}</TableCell>
               <TableCell>{staff1.shift.end_time}</TableCell>
               <TableCell>
               <Box sx={{ display: 'flex', gap: 1 }}>
               <Button variant="outlined" color="primary" component={Link} to={`/editStaff/${staff1.id}`} >Edit</Button>
                 <Button variant="outlined" color="error" onClick={() => Forget(staff1.id)}>Delete</Button>
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

export default StaffAdmin;
