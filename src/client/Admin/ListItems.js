import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';

import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/dashboard"> 
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={Link} to="/OrderAdmin"> 
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton component={Link} to="/ReservationAdmin">
      <ListItemIcon>
        <EventSeatIcon />
      </ListItemIcon>
      <ListItemText primary="Reservation" />
    </ListItemButton>
    <ListItemButton component={Link} to="/MenuAdmin"> 
      <ListItemIcon>
        <FastfoodIcon />
      </ListItemIcon>
      <ListItemText primary="Menu" />
    </ListItemButton>
    <ListItemButton component={Link} to="/StaffAdmin">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Staff" />
    </ListItemButton>
    <ListItemButton component = {Link} to="/useradmin">
      <ListItemIcon>
        <PeopleIcon/>
      </ListItemIcon>
      <ListItemText primary="Users"/>

    </ListItemButton>
    <ListItemButton component = {Link} to = "/tableadmin">
      <ListItemIcon>
        <TableRestaurantIcon/>
      </ListItemIcon>
      <ListItemText primary="Table"/>

    </ListItemButton>

  </React.Fragment>
);
