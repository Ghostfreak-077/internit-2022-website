import React from "react";
import "./HomeCarouselTwo.css";

import HomeCarouselTwoCard from "../HomeCarouselTwoCard/HomeCarouselTwoCard";
import HomeCarouselTwoData from "../HomeCarouselTwoCard/HomeCarouselTwoData";

function HomeCarouselTwo() {
  return (
    <div className="carousel-two-bg">
      <div className="carousel-two-container container">
        <h2 class="carousel-two-heading">Checkout our</h2>
        <h2 class="carousel-two-heading">Previous year pictures</h2>
        <HomeCarouselTwoCard data={HomeCarouselTwoData} />
      </div>
    </div>
  );
}

export default HomeCarouselTwo;
