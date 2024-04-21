import React from "react";
import { styled } from "@mui/system";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Tiramisu from "../img/Tiramisu.jpg";
import Trilece from "../img/Trilece.jpg";
import IceCream from "../img/Ice Cream.jpg"

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

const Dessert = () => {
  const dishesData = [
    { img: Tiramisu, title: "Tiramisu", price: "$2.50", rating: 4.5, description: "Delicious cake with perfect taste" },
    { img: Trilece, title: "Trilece", price: "$1.50", rating: 5.0, description: "Tasty cake from the Balkans" },
    {img:IceCream,title:"Ice Cream",price:"$1",rating:5.5,description:"Delicious Chocolate Ice Cream"}
     
  ];

  return (
    <RootContainer>
      <Typography variant="h4" align="center" gutterBottom sx={{ paddingTop: { xs: 8, lg: 16 }, paddingBottom: 10 }}>
        Our Desserts
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

export default Dessert;
