import React from "react";
import { styled } from "@mui/system";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import PizzaMargherita from "../img/Pizza-Margherita.jpg";
import PizzaPeperoni from "../img/Pepperoni-Pizza.jpg";
import NewYorkPizza from "../img/New York Pizza.jpg";


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

const Pizza = () => {
  const dishesData = [
    {img:PizzaMargherita,title:"Pizza Margherita",price:"$2.50",rating:5.0,description:"Taste this delicious pizza"},
    {img:PizzaPeperoni,title:"Pizza Peperoni",price:"$2.90",rating:5.3,description:"Enjoy this delicious pizza made by us"},
    {img:NewYorkPizza,title:"New York Pizza",price:"$3.00",rating:4.8,description:"Taste this delicious new york pizza "}
   
  ];

  return (
    <RootContainer>
      <Typography variant="h4" align="center" gutterBottom sx={{ paddingTop: { xs: 8, lg: 16 }, paddingBottom: 10 }}>
        Our Pizzas
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

export default Pizza;