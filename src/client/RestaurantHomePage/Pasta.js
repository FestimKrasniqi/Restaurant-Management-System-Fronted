import React from "react";
import { styled } from "@mui/system";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import MacaroniBolognese from '../img/Macaroni-Bolognese.jpg';
import SpaghetiBolognese from '../img/spaghetti-bolognaise.jpg';


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

const Pasta = () => {
  const dishesData = [
    {img:MacaroniBolognese,title:"Macaroni Bolognese",price:"$3.50",rating:5.0,description:"Enjoy your meal"},
    {img:SpaghetiBolognese,title:"Spagheti Bolognese",price:"$4.00",rating:5.2,description:"Taste this delicious spaghetti"}
   
   
  ];

  return (
    <RootContainer>
      <Typography variant="h4" align="center" gutterBottom sx={{ paddingTop: { xs: 8, lg: 16 }, paddingBottom: 10 }}>
        Our Pastas
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

export default Pasta;
