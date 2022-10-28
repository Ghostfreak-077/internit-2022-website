import React from "react";
import About_Inter_Nit from "./Home/About_Inter_Nit";
import ImageSlider from "./Home/ImageSlider";
import images from "./Home/Images";
import What_We_Offer from "./Home/What_We_Offer";

import HomeCarouselTwo from "./HomeCarouselTwo/HomeCarouselTwo";
import HomeUpcoming from "./HomeUpcoming/HomeUpcoming";
import HomeAchievements from "./HomeAchievements/HomeAchievements";
import HomeWords from "./HomeWords/HomeWords";
const Home = () => {
  return (
    <div>
      <ImageSlider images={images}></ImageSlider>

      <HomeCarouselTwo />

      <About_Inter_Nit></About_Inter_Nit>

      <HomeUpcoming />

      <What_We_Offer></What_We_Offer>

      <HomeWords />
      <HomeAchievements />
    </div>
  );
};

export default Home;
