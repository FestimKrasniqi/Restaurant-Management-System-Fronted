
import React,{useState,useEffect} from 'react';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button,Box } from '@mui/material';
import { Link } from 'react-router-dom';

const MenuAdmin = () => {

  const[menus,setMenus] = useState([]);

  useEffect(() => {
    const fetchmenu = async () => {
      try{
        const token = localStorage.getItem('token');
        const response = await fetch("http://localhost:8000/api/allMenus", {
          method: "GET",
          headers: {
            'Content-type' : 'application/json',
            'Accept': 'application/json',
            'Authorization' : `Bearer ${token}`
          }
        });

        if(!response.ok) {
          console.log("Failed to fetch menu");
        }
        const data = await response.json();
        setMenus(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchmenu();
  },[]);


  const Forget = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8000/api/delete-menu/${id}`,{
        method : "DELETE",
        headers : {
          'Content-type' : 'application/json',
            'Accept': 'application/json',
            'Authorization' : `Bearer ${token}`
        }
      });

      
      if(!response.ok) {
        console.log("Failed to delete");
      } 

      const newuserData = menus.filter((item)=> {
        return (
          item.id !==id
        )
      })
      setMenus(newuserData)

     
    } catch(error) {
      console.log(error);
    }

  }



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
          {menus.map(menu => (
          <TableRow key={menu.id}>
              <TableCell>{menu.id}</TableCell>
              <TableCell>{menu.name}</TableCell>
              <TableCell><img  src = {"http://localhost:8000/" + menu.image_url} style={{ maxWidth: '100px', maxHeight: '100px' }}></img></TableCell>
              <TableCell>{menu.price}€</TableCell>
              <TableCell>{menu.description}</TableCell>
             <TableCell>{menu.category.category_name}</TableCell>
              <TableCell>
              <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
            variant="outlined"
            color="primary"
            component={Link} 
            to={`/editMenu/${menu.id}`} 
        >
            Edit
        </Button>
                <Button variant="outlined" color="error" onClick = {()=> Forget(menu.id)}>Delete</Button>
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

export default MenuAdmin;
