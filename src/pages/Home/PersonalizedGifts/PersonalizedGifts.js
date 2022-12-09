import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import PersonalizedGiftCard from "./PersonalizedGiftCard/PersonalizedGiftCard.js";
import personalizedGifts1 from "../../../assets/personalizedGifts/personalizedGifts1.png";
import personalizedGifts2 from "../../../assets/personalizedGifts/personalizedGifts2.png";
import personalizedGifts3 from "../../../assets/personalizedGifts/personalizedGifts3.png";
import personalizedGifts4 from "../../../assets/personalizedGifts/personalizedGifts4.png";

const PersonalizedGiftsSection = styled(Box)(({ theme }) => ({
  textAlign: "center",
}));

const gifts = [
  { img: personalizedGifts1 },
  { img: personalizedGifts2 },
  { img: personalizedGifts3 },
  { img: personalizedGifts4 },
];

const PersonalizedGifts = () => {
  return (
    <PersonalizedGiftsSection>
      <Typography
        color="textSecondary"
        sx={{ fontSize: "38px", fontWeight: "600" }}
      >
        Shop our popular gift category
      </Typography>

      <Grid container spacing={3} sx={{ marginTop: "50px" }}>
        {gifts.map((gift, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <PersonalizedGiftCard
              key={index}
              image={gift.img}
            ></PersonalizedGiftCard>
          </Grid>
        ))}
      </Grid>
    </PersonalizedGiftsSection>
  );
};

export default PersonalizedGifts;
