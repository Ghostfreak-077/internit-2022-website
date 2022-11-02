import React, { Component } from "react";
import Slider from "react-slick";
import HomeAchievementsData from "./HomeAchievementsData";

import "./HomeAchievementsCard.css";
import Cards from "../Cards/Cards";
export default class HomeAchievementsCard extends Component {
  render() {
    this.state = HomeAchievementsData;
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        {this.state.map((cardInfo) => {
          return (
            <div className="position-relative m-3">
              <Cards banner={cardInfo.banner} img={cardInfo.src} name={cardInfo.name} pya={true} pyp={false}/>
            </div>
          );
        })}
      </Slider>
    );
  }
}
