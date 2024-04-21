import React from "react";
import { styled } from "@mui/system";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import ChickenFinger from "../img/chicken-fingers.jpg";
import Beef from "../img/Beef.jpeg";
import img2 from "../img/img2.jpg";


const RootContainer = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px",
});


const DishesContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
  justifyContent: "center",
});


const StyledCard = styled(Card)({
  maxWidth: 345,
});


const StyledCardMedia = styled(CardMedia)({
  height: 140,
});

const Meat = () => {
  const dishesData = [
    {img:ChickenFinger,title:"Chicken Finger",price:"$2.50",rating:5.0,description:"Delicious chicken with a good taste"},
    {img:Beef,title:"Beef",price:"$5.00",rating:6.0,description:"Enjoy your meal"},
    {img:img2,title:"File Pule",price:"$3.50",rating:6.0,description:"Delicious chicken with a good taste"}
  ];

  return (
    <RootContainer>
      <Typography variant="h4" align="center" gutterBottom sx={{ paddingTop: { xs: 8, lg: 16 }, paddingBottom: 10 }}>
        Our Meats
      </Typography>

      <DishesContainer>
        {dishesData.map((dish, index) => (
          <StyledCard key={index}>
            <StyledCardMedia
              component="img"
              image={dish.img}
              alt={dish.title}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                {dish.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Price: {dish.price}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Rating: {dish.rating}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description: {dish.description}
              </Typography>
            </CardContent>
          </StyledCard>
        ))}
      </DishesContainer>
    </RootContainer>
  );
};

export default Meat;
