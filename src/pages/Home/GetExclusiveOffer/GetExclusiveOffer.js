import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";

const GetExclusiveOffer = () => {
  return (
    <Box sx={{ mb: "100px" }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", textAlign: "center", mb: "30px " }}
        color="#3A3A3A"
      >
        Get Exclusive Offers
      </Typography>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <TextField
          sx={{ width: "370px" }}
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
        />
        <Button>Subscribe Now</Button>
      </FormControl>
    </Box>
  );
};

export default GetExclusiveOffer;
