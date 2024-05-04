
import React,{useState,useEffect} from 'react';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button,Box } from '@mui/material';
import {Link} from 'react-router-dom';

const TableAdmin = () => {

  const [table,setTable] = useState([]);

  useEffect(()=>{
  const fetchtable =  async () => {
      try {
        const token = localStorage.getItem('token');
          const response = await fetch("http://localhost:8000/api/getAllTables", {
            method:"GET",
            headers: {
              'Content-type' : 'application/json',
              'Accept': 'application/json',
              'Authorization' : `Bearer ${token}`
  
            }
          });
          if(!response.ok) {
              console.error("Failed to fetch table");
          }
          const data = await response.json();
          setTable(data);
      } catch(error) {
          console.log(error);
      }
  
  };
  fetchtable();
  },[]);
  
  const Forget = async (id) => {
    try{
      const token = localStorage.getItem('token');{
      const response = await fetch(`http://localhost:8000/api/deleteTable/${id}`, {
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

    const newtable = table.filter((table2) => {
      return (
        table2.id !== id
      )
    })


    setTable(newtable);
      
    } 
  } catch(error) {
    console.log(error);
  }
}


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
            {table.map(table1 => (
              <TableRow>
              <TableCell>{table1.id}</TableCell>
              <TableCell>{table1.table_name}</TableCell>
              <TableCell>{table1.capacity}</TableCell>
              <TableCell>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button variant="outlined" color="primary" component={Link} to={`/editTable/${table1.id}`}>Edit</Button>
                <Button variant="outlined" color="error" onClick={() => Forget(table1.id)}>Delete</Button>
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

export default TableAdmin;
