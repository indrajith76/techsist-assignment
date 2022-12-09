import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Rating } from "@mui/material"; 

const CustomDesignCakeCard = ({ image }) => {
  return (
    <Card sx={{ }}>
      <CardMedia component="img" image={image} alt="green iguana" />
      <CardContent>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" color="textSecondary">
            Hallmark Stuffed Snoopy
          </Typography>
          <Rating name="no-value" value={null} />
          <Box sx={{ display: "flex", justifyContent: "center" , gap:'10px'}}>
            <Typography color="textSecondary">৳1890</Typography>
            <Typography
              sx={{ textDecoration: "line-through" }}
              color="textSecondary"
            >
              ৳2890
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomDesignCakeCard;
