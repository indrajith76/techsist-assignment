import React from "react";
import Banner from "./Banner/Banner";
import CustomDesignCake from "./CustomDesignCake/CustomDesignCake";
import CustomGifts from "./CustomGifts/CustomGifts";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import FlowerBouquetsGifts from "./FlowerBouquets/FlowerBouquets";
import GetExclusiveOffer from "./GetExclusiveOffer/GetExclusiveOffer";
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
      <CustomDesignCake></CustomDesignCake>
      <FlowerBouquetsGifts></FlowerBouquetsGifts>
      <FeaturedProducts></FeaturedProducts>
      <Testimonial></Testimonial>
      <GetExclusiveOffer></GetExclusiveOffer>
    </div>
  );
};

export default Home;
