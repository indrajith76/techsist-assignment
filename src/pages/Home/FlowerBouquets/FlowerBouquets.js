import { Box, Button, Grid, styled, Typography } from "@mui/material";
import React from "react";
import FlowerBouquetsGiftCard from "./FlowerBouquetsCard/FlowerBouquetsGiftCard.js";
import personalizedGifts1 from "../../../assets/personalizedGifts/personalizedGifts1.png";
import personalizedGifts2 from "../../../assets/personalizedGifts/personalizedGifts2.png";
import personalizedGifts3 from "../../../assets/personalizedGifts/personalizedGifts3.png";
import personalizedGifts4 from "../../../assets/personalizedGifts/personalizedGifts4.png";

const FlowerBouquetsSection = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginTop:'100px'
}));

const gifts = [
  { img: personalizedGifts1 },
  { img: personalizedGifts2 },
  { img: personalizedGifts3 },
  { img: personalizedGifts4 },
];

const FlowerBouquets = () => {
  return (
    <FlowerBouquetsSection>
      <Typography
        color="textSecondary"
        sx={{ fontSize: "38px", fontWeight: "600" }}
      >
        Fresh Flower Bouquets
      </Typography>

      <Grid container spacing={3} sx={{ marginTop: "50px" }}>
        {gifts.map((gift, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <FlowerBouquetsGiftCard
              key={index}
              image={gift.img}
            ></FlowerBouquetsGiftCard>
          </Grid>
        ))}
      </Grid>
    </FlowerBouquetsSection>
  );
};

export default FlowerBouquets;
