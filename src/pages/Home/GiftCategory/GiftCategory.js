import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import GiftCategoryCard from "./GiftCategoryCard/GiftCategoryCard";
import item1 from "../../../assets/giftCategory/item1.png";
import item2 from "../../../assets/giftCategory/item2.png";
import item3 from "../../../assets/giftCategory/item3.png";

const GiftCategorySection = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: "150px",
  marginTop: "100px",
}));

const gifts = [{ img: item1 }, { img: item2 }, { img: item3 }];

const GiftCategory = () => {
  return (
    <GiftCategorySection>
      <Typography
        color="textSecondary"
        sx={{ fontSize: "38px", fontWeight: "600" }}
      >
        Shop our popular gift category
      </Typography>

      <Grid container spacing={3} sx={{ marginTop: "50px" }}>
        {gifts.map((gift, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <GiftCategoryCard key={index} image={gift.img}></GiftCategoryCard>
          </Grid>
        ))}
      </Grid>
    </GiftCategorySection>
  );
};

export default GiftCategory;
