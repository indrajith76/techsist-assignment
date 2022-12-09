import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <Box>
      <Container>
        <Header />
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default Main;
