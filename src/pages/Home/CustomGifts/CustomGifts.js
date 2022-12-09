import React from "react";
import { Grid, styled, Box, Typography, Button } from "@mui/material";
import customGiftsImg from "../../../assets/customGift/customGiftImg.png";

const CustomGiftsSection = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: "100px",
  justifyContent: "center",
}));

const Item = styled(Box)(({ theme }) => ({
  "& > img": {
    height: "165px",
  },
}));

const pages = ["Shop", "Our Story", "Blog"];

const CustomGifts = () => {
  return (
    <CustomGiftsSection>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "flex", justifyContent: "center" },
        }}
      >
        {pages.map((page) => (
          <Button
            key={page}
            sx={{
              my: 2,
              color: "#691B70",
              fontWeight: "600",
              display: "block",
              bgcolor: "transparent",
              border:'none', 
              borderBottom:'hover',
              boxShadow:'none',
              borderBottom: '3px solid transparent',
              '&:hover':{
                boxShadow:'none',
                bgcolor:'transparent',
                borderBottom: '3px solid',
                borderRadius:'0'
              }
            }}
          >
            {page}
          </Button>
        ))}
      </Box>

      <Box sx={{ mb: "40px" }}></Box>
      <Typography
        variant="h3"
        color="textSecondary"
        sx={{ fontSize: "38px", fontWeight: "600", mb: "10px" ,color:'#231F20'}}
      >
        Custom-made Gifts
      </Typography>
      <Typography
        variant="h4"
        color="textSecondary"
        sx={{ fontSize: "24px", fontWeight: "600", mb: "40px" }}
      >
        Designer Cakes and Flower Bouquetsto Mesmerize your loved ones!
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, lg: 0 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={2} key={index}>
            <Item>
              <img src={customGiftsImg} alt="" />
              <Typography>Christmas Cards</Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </CustomGiftsSection>
  );
};

export default CustomGifts;
