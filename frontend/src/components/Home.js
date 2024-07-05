import React from "react";
import AboutInterNit from "./Home/About_Inter_Nit";
import ImageSlider from "./Home/ImageSlider";
import images from "./Home/Images";
import WhatWeOffer from "./Home/What_We_Offer";

// import HomeCarouselTwo from "./HomeCarouselTwo/HomeCarouselTwo";
import HomeUpcoming from "./HomeUpcoming/HomeUpcoming";
import HomeAchievements from "./HomeAchievements/HomeAchievements";
import HomeWords from "./HomeWords/HomeWords";
import ParticipatingNits from "./Home/ParticipatingNit";
import PreviousYear from "./HomePreviousYears/Previousyear";
const Home = () => {
  return (
    <div>
      <ImageSlider images={images}/>

      {/* <HomeCarouselTwo /> */}
      <PreviousYear/>

      <AboutInterNit/>

      <HomeUpcoming />

      <WhatWeOffer/>

      <HomeWords />
      <ParticipatingNits/>
      <HomeAchievements />

    </div>
  );
};

export default Home;
