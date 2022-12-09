import React from "react";
import Banner from "./Banner/Banner";
import CustomGifts from "./CustomGifts/CustomGifts";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <CustomGifts></CustomGifts>
      <Banner></Banner>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
