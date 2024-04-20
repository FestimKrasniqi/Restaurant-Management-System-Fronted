import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import { BiRestaurant } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const [showNonMenus, setShowNonMenus] = useState(false);

  const toggleNonMenus = () => {
    setShowNonMenus(!showNonMenus);
  };


  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };


  return (
    <Box>
      <AppBar position="fixed" sx={{ backgroundColor: "#4caf50" }}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <BiRestaurant size={32} />
            <Typography variant="h6" component="div" sx={{ ml: 1 }}>
              RestaurantPeja
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleChange}
            >
              {menu ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>

          <Box sx={{mt: 2, display: 'flex', flexDirection: 'row', gap: 2 }}>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
              sx={{ mr: 2 }}
            >
              Home
            </ScrollLink>

            <ScrollLink
              to="booking"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
              sx={{ mr: 2 }}
            >
              Booking
            </ScrollLink>

            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
              sx={{ mr: 2 }}
            >
              About
            </ScrollLink>


            <div>
      <ScrollLink
        to="menu"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-brightColor transition-all cursor-pointer"
        sx={{ mr: 2 }}
      >
        Menu
      </ScrollLink>
      <BiChevronDown
        className="cursor-pointer"
        size={25}
        onClick={toggleNonMenus}
      />
      {showNonMenus && (
        <div id="menu">
          <ScrollLink
            to="dessert"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            sx={{ mr: 2 }}
          >
            Desserts
          </ScrollLink>
          <br/>
          <ScrollLink
            to="drinks&coffee"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            sx={{ mr: 2 }}
          >
            Drinks&Coffee
          </ScrollLink>
         <br/>
          <ScrollLink
            to="meat"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            sx={{ mr: 2 }}
          >
            Meats
          </ScrollLink>
          <br/>
          <ScrollLink
            to="pizza"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            sx={{ mr: 2 }}
          >
            Pizzas
          </ScrollLink>
          <br/>
          <ScrollLink
            to="pasta"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            sx={{ mr: 2 }}
          >
            Pastas
          </ScrollLink>
        </div>
      )}
    </div>

       

           <ScrollLink
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
              sx={{ mr: 2 }}
            >
              Reviews
            </ScrollLink>

            
            <Button color="inherit" variant="outlined" alignItems="right">
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={menu}
        onClose={handleChange}
      >
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            backgroundColor: "#4caf50"
          }}
        >
         <List>
            <ListItemButton>
              <ListItemText>
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                  onClick={closeMenu}
                  sx={{ color: "#fff" }}
                >
                  Home
                </ScrollLink>
              </ListItemText>
            </ListItemButton>

            <ListItemButton>
              <ListItemText>
                <ScrollLink
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                  onClick={closeMenu}
                  sx={{ color: "#fff" }}
                >
                  Dishes
                </ScrollLink>
              </ListItemText>
            </ListItemButton>

            <ListItemButton>
              <ListItemText>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                  onClick={closeMenu}
                  sx={{ color: "#fff" }}
                >
                  About
                </ScrollLink>
              </ListItemText>
            </ListItemButton>

            <ListItemButton>
              <ListItemText>
                <ScrollLink
                  to="menu"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                  onClick={closeMenu}
                  sx={{ color: "#fff" }}
                >
                  Menu
                </ScrollLink>
              </ListItemText>
            </ListItemButton>

            <ListItemButton>
              <ListItemText>
                <ScrollLink
                  to="review"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                  onClick={closeMenu}
                  sx={{ color: "#fff" }}
                >
                  Reviews
                </ScrollLink>
              </ListItemText>
            </ListItemButton>
          </List>

          <Divider />

          <Button variant="outlined" fullWidth onClick={closeMenu} sx={{ color: "#fff", borderColor: "#fff" }}>
            Login
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
