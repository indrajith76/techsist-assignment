import React from "react";
import Banner from "./Banner/Banner";
import CustomGifts from "./CustomGifts/CustomGifts";
import GiftCategory from "./GiftCategory/GiftCategory";
import PersonalizedGifts from "./PersonalizedGifts/PersonalizedGifts";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <CustomGifts></CustomGifts>
      <Banner></Banner>
      <GiftCategory></GiftCategory>
      <PersonalizedGifts></PersonalizedGifts>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
