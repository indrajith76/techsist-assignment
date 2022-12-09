import { Box, Button, Container, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../../assets/icons/Facebook.png";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/instagram.png";

const FooterComponents = styled(Box)(({ theme }) => ({
  backgroundColor: "#691B70",
  color: "#fff",
  padding: "80px 0 80px 0",
}));

const Footer = () => {
  return (
    <FooterComponents>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h6">OUR STORE</Typography>
            <Typography sx={{ my: "20px" }}>
              We promise we’ll get back to you promptly– your
              <br /> gifting needs are always on our minds!
            </Typography>
            <Typography>1066, Avenue 7, Road 7, Mirpur DOHS </Typography>
            <Typography sx={{ fontWeight: "600", mt: "20px" }}>
              Monday – Friday 8am – 6pm pts.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ mb: "20px" }}>
              INFORMATION
            </Typography>
            <Typography sx={{ mb: "10px" }}>My account</Typography>
            <Typography sx={{ mb: "10px" }}>Track Orders</Typography>
            <Typography sx={{ mb: "10px" }}>Reminder Service</Typography>
            <Typography sx={{ mb: "10px" }}>Shipping & Returns</Typography>
            <Typography sx={{ mb: "10px" }}>Sign Up</Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ mb: "20px" }}>
              SERVICES
            </Typography>
            <Typography sx={{ mb: "10px" }}>Size Charts</Typography>
            <Typography sx={{ mb: "10px" }}>Contact Us </Typography>
            <Typography sx={{ mb: "10px" }}>How To Order</Typography>
            <Typography sx={{ mb: "10px" }}>Size Charts</Typography>
          </Box>
        </Box>
        <hr />
        <Box
          sx={{ display: "flex", justifyContent: "space-between", alignItems:'center',mt: "20px" }}
        >
          <Typography sx={{}}>Copyright© All Rights Reserved</Typography>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Link>
              <img src={Facebook} alt="" />
            </Link>
            <Link>
              <img src={twitter} alt="" />
            </Link>
            <Link>
              <img src={instagram} alt="" />
            </Link>
          </Box>
        </Box>
      </Container>
    </FooterComponents>
  );
};

export default Footer;
