import React from "react";
import img from "../img/about.jpg"
import { styled } from "@mui/system";


const RootContainer = styled('div')({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px",
  "& > img": {
    width: "100%",
    maxWidth: "400px",
    marginBottom: "20px",
    marginRight: "32px", 
  },
});


const ContentContainer = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-y",
  paddingTop: "14px",
  textAlign: "center",
  "& h1": {
    fontWeight: "bold",
    fontSize: "4xl",
    textAlign: "center",
  },
  "& p": {
    // Add your paragraph styles here
  },
  "& > div": {
    display: "flex",
    justifyContent: "center",
  },
});

const About = () => {
  return (
    <RootContainer>
      <img src={img} alt="img" />

      <ContentContainer>
        <h1>Why to choose us?</h1>
        <p>
        "Welcome! We are proud to offer you an authentic experience of Albanian cuisine. A journey of flavors and aromas, where tradition and kitchen come together to bring before you the people passionate about Albanian gastronomy. Visit our location and enjoy our delicious and fresh food, with authentic flavors and aromas of our traditional and international cuisine."
        </p>
       
      </ContentContainer>
    </RootContainer>
  );
};

export default About;
