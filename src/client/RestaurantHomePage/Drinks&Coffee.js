import React from "react";
import { styled } from "@mui/system";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Cola from "../img/cola.jpg";
import GoldenEagle from "../img/GoldenEagle.jpeg";
import Macchiatto from "../img/Macchiatto.jpg";

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
  maxWidth: 346,
});


const StyledCardMedia = styled(CardMedia)({
  height: 320,
});

const DrinksAndCoffee = () => {
  const dishesData = [
    { img: Cola, title: "Coca-Cola", price: "$1", rating: 5.0, description: "The best selling soda in the world" },
    {img:GoldenEagle,title:"Golden-Eagle",price:"$0.50",rating:5.0,description:"Energy Drink made in Kosova"},
    {img:Macchiatto,title:"Macchiatto",price:"$1.20",rating:4.6,description:"Enjoy your Italian Coffee"}
    
     
  ];

  return (
    <RootContainer>
      <Typography variant="h4" align="center" gutterBottom sx={{ paddingTop: { xs: 8, lg: 16 }, paddingBottom: 10 }}>
        Our Drinks&Coffee
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

export default DrinksAndCoffee;
