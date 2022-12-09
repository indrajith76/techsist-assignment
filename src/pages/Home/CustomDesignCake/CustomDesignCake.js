import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import CustomDesignCakeCard from "./CustomDesignCakeCard/CustomDesignCakeCard";
import customDesignCake1 from "../../../assets/CustomDesignCake/customDesignCake1.png"; 
import customDesignCake2 from "../../../assets/CustomDesignCake/customDesignCake2.png"; 
import customDesignCake3 from "../../../assets/CustomDesignCake/customDesignCake3.png"; 
import customDesignCake4 from "../../../assets/CustomDesignCake/customDesignCake4.png"; 

const CustomDesignCakeSection = styled(Box)(({ theme }) => ({
  textAlign: "center",
}));

const gifts = [
  { img: customDesignCake1 },
  { img: customDesignCake2 },
  { img: customDesignCake3 },
  { img: customDesignCake4 },
];

const CustomDesignCake = () => {
  return (
    <CustomDesignCakeSection>
      <Typography
        color="textSecondary"
        sx={{ fontSize: "38px", fontWeight: "600", mt:'100px' }}
      >
        Popular Custom Designer Cakes
      </Typography>

      <Grid container spacing={3} sx={{ marginTop: "50px" }}>
        {gifts.map((gift, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <CustomDesignCakeCard
              key={index}
              image={gift.img}
            ></CustomDesignCakeCard>
          </Grid>
        ))}
      </Grid>
    </CustomDesignCakeSection>
  );
};

export default CustomDesignCake;
