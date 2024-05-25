import React from "react";
import { Card, CardContent, Typography, CardHeader, Avatar, Grid } from "@mui/material";

const ReviewCard = (props) => {
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 345, margin: "auto", mb: 3 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.text}
          </Typography>
        </CardContent>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "primary.main" }} aria-label="recipe">
              {props.name[0]}
            </Avatar>
          }
          title={props.name}
        />
      </Card>
    </Grid>
  );
};

export default ReviewCard;
