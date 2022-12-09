import React from "react";
import {
  Box,
  styled,
  Typography,
  Button,
  Stack, 
} from "@mui/material";
import banner from "../../../assets/banner/banner.png";

const BannerWrapper = styled(Box)(({ theme }) => ({ 
  position: "relative",
  '& > img' : {
    width: '100%'
  }
}));

const BannerCard = styled(Stack)(({ theme }) => ({
  position: "absolute",
  padding: "50px",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  width: "486px",
  right: "150px",
  top: "22%",
  borderRadius: "5px",
}));

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerCard spacing={2}>
        <Typography
          color="textPrimary"
          sx={{ fontSize: "2rem", fontWeight: "600", textAlign: "center" }}
          variant={"h2"}
        >
          Personalized Gift
        </Typography>
        <Typography color="textSecondary" sx={{ textAlign: "center" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button>Buy Now</Button>
        </Box>
      </BannerCard>
      <img src={banner} alt="" />
    </BannerWrapper>
  );
};

export default Banner;
