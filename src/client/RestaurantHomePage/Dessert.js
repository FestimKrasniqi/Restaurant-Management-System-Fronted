import React,{useState,useEffect} from "react";
import { styled } from "@mui/system";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";



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
  
  const[menus,setMenus] = useState([]);

  useEffect(() => {
    const fetchmenu = async () => {
      try{
        const token = localStorage.getItem('token');
        const response = await fetch("http://localhost:8000/api/menus/Dessert", {
          method: "GET",
          headers: {
            'Content-type' : 'application/json',
            'Accept': 'application/json',
            'Authorization' : `Bearer ${token}`
          }
        });

        if(!response.ok) {
          console.log("Failed to fetch menu");
        }
        const data = await response.json();
        setMenus(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchmenu();
  },[]);


  return (
    <RootContainer>
      <Typography variant="h4" align="center" gutterBottom sx={{ paddingTop: { xs: 8, lg: 16 }, paddingBottom: 10 }}>
        Our Desserts
      </Typography>

      <DishesContainer>
        {menus.map((menu, index) => (
          <StyledCard key={index}>
            <StyledCardMedia
              component="img"
              image={"http://localhost:8000/" + menu.image_url}
              alt={menu.name}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                {menu.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Price: {menu.price}€
              </Typography>
             
              <Typography variant="body2" color="textSecondary" component="p">
                Description: {menu.description}
              </Typography>
            </CardContent>
          </StyledCard>
        ))}
      </DishesContainer>
    </RootContainer>
  );
};

export default Dessert;
