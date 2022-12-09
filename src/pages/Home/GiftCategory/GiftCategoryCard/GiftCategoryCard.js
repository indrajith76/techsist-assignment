import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import basketShopping from "../../../../assets/icons/basketShopping.png";

const GiftCategoryCard = ({ image }) => {
  return (
    <Card sx={{ boxShadow: "none" }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia component="img" image={image} alt="green iguana" />
        <Button
          sx={{
            position: "absolute",
            right: "28%",
            py: "14px",
            bottom: "32px",
            px: "56px",
            bgcolor: "white",
            color: "#691B70",
            fontWeight: "600",
            "&:hover": {
              bgcolor: "#691B70",
              color: "#FFF",

            },
          }}
        >
          Buy Now
        </Button>
      </Box>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <img src={basketShopping} alt="" />
          <Box>
            <Typography sx={{ textAlign: "left" }} variant="h6">
              Weirdly meaningful art
            </Typography>
            <Typography sx={{ textAlign: "left" }}>
              Millions of designs on over 70 high quality products.
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default GiftCategoryCard;
