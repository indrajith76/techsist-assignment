import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import person from "../../../assets/testimonial/person.png";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

const TestimonialSection = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginTop: "100px",
  marginBottom: "150px",
  marginTop: "150px",
  
}));

const Testimonial = () => {
  return (
    <TestimonialSection>
      <Typography
        sx={{ fontSize: "38px", fontWeight: "600", color: "#231F20" }}
      >
        Testimonial
      </Typography>

      <Grid container spacing={2} sx={{ marginTop: "50px", }}>
        {Array.from(Array(3)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TestimonialCard key={index} image={person}></TestimonialCard>
          </Grid>
        ))}
      </Grid>
    </TestimonialSection>
  );
};

export default Testimonial;
