import React from "react";
import { Typography, Link, Grid, Box } from "@mui/material";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";


const Footer = () => {
  return (
    <Box sx={{ bgcolor: "black", color: "white", borderRadius: "20px 20px 0 0", mt: 8, md: { mt: 0 } }}>
      <Grid container justifyContent="space-between" p={4} sx={{ maxWidth: { md: "1200px" }, margin: "auto" }}>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            RestaurantPeja
          </Typography>
          <Typography variant="body2">
            Indulge in a symphony of flavors, where each plate is a canvas for culinary excellence.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight="bold" mb={2} mt={{ xs: 5, md: 0 }}>
            Links
          </Typography>
          <nav>
            <Link href="myreservation" variant="body2" sx={{ mr: 2, mb: 1, display: "block", color: "inherit" }}>
              MyBooking
            </Link>
            <Link href="myorder" variant="body2" sx={{ mr: 2, mb: 1, display: "block", color: "inherit" }}>
              MyOrders
            </Link>
            <Link href="about" variant="body2" sx={{ mr: 2, mb: 1, display: "block", color: "inherit" }}>
              About
            </Link>
            <Link href="menu" variant="body2" sx={{ mr: 2, mb: 1, display: "block", color: "inherit" }}>
              Menu
            </Link>
            <Link href="review" variant="body2" sx={{ mr: 2, mb: 1, display: "block", color: "inherit" }}>
              Reviews
            </Link>
          </nav>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight="bold" mb={2} mt={{ xs: 5, md: 0 }}>
            Contact Us
          </Typography>
          <nav>
            <Link href="mailto:RestaurantPeja@gmail.com" variant="body2" sx={{ mr: 2, mb: 1, display: "block", color: "inherit" }}>
              RestaurantPeja@gmail.com
            </Link>
            <Link href="/" variant="body2" sx={{ mr: 2, mb: 1, display: "block", color: "inherit" }}>
              +38349567843
            </Link>
            <Link href="/" variant="body2" sx={{ mr: 2, mb: 1, display: "block", color: "inherit" }}>
              <BsFacebook style={{ marginRight: 4 }} /> Facebook
            </Link>
            <Link href="/" variant="body2" sx={{ mr: 2, mb: 1, display: "block", color: "inherit" }}>
              <BsInstagram style={{ marginRight: 4 }} /> Instagram
            </Link>
            <Link href="/" variant="body2" sx={{ mr: 2, mb: 1, display: "block", color: "inherit" }}>
              <RiTwitterFill style={{ marginRight: 4 }} /> Twitter
            </Link>
          </nav>
        </Grid>
      </Grid>
      <Box sx={{ bgcolor: "black", color: "white", textAlign: "center", pt: 2 }}>
        <Typography variant="body2" sx={{ color: "inherit" }}>
          @copyright developed by
          <span style={{ color: "#4caf50" }}> champion programmers</span> | All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
