import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import { Grid, Typography } from "@mui/material";
import img1 from "../img/pic1.png";
import img2 from "../img/pic2.png";

const reviews = [
  { img: img1, name: "Festim Krasniqi", text: "Great experience, loved the food!" },
  { img: img2, name: "Dominik Pllashniku", text: "Highly recommend this restaurant. Delicious dishes!" },
  
];

const Review = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <Typography variant="h4" align="center" gutterBottom sx={{ paddingTop: { xs: 8, lg: 16 }, paddingBottom: 10 }}>
        Customer's Review
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {reviews.map((review, index) => (
          <ReviewCard key={index} img={review.img} name={review.name} text={review.text} />
        ))}
      </Grid>
    </div>
  );
};

export default Review;
