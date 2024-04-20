import React, { useState } from "react";
import { styled } from "@mui/system";
import { Card, CardContent, CardMedia, Typography, Pagination } from "@mui/material";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import Tiramisu from "../img/Tiramisu.jpg";

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
  gap: "16px",
  paddingBottom: "20px",
  justifyContent: "center",
});


const StyledCard = styled(Card)({
  maxWidth: 345,
});


const StyledCardMedia = styled(CardMedia)({
  height: 140,
});

const Menu = () => {
  const dishesData = [
    { img: img1, title: "Tasty Dish 1", price: "$10.99", rating: 4.5, description: "Delicious dish with a perfect blend of flavors." },
    { img: img2, title: "Tasty Dish 2", price: "$12.99", rating: 4.0, description: "Savory dish that will satisfy your taste buds." },
    { img: img3, title: "Tasty Dish 3", price: "$10.99", rating: 4.2, description: "A mouthwatering dish that leaves a lasting impression." },
    { img: img4, title: "Tasty Dish 4", price: "$11.99", rating: 4.7, description: "Exquisite dish crafted with premium ingredients." },
    { img: img5, title: "Tasty Dish 5", price: "$10.99", rating: 4.3, description: "Irresistible dish that brings joy with every bite." },
    { img: img6, title: "Tasty Dish 6", price: "$12.99", rating: 4.8, description: "A culinary masterpiece that exceeds expectations." },
    { img: Tiramisu, title: "Tiramisu", price: "$1.50", rating: 4.5, description: "Tasty Cake" },
  ];

  const itemsPerPage = 5;
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;

  return (
    <RootContainer>
      <Typography variant="h4" align="center" gutterBottom sx={{ paddingTop: { xs: 8, lg: 16 }, paddingBottom: 10 }}>
        Top Dishes
      </Typography>

      <DishesContainer>
        {dishesData.slice(startIndex, endIndex).map((dish, index) => (
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

      <Pagination
        count={Math.ceil(dishesData.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        sx={{ marginTop: '20px' }}
      />
    </RootContainer>
  );
};

export default Menu;
