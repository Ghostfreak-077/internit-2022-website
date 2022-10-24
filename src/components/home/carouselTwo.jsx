import React from "react";
import "./home.css";

const CarouselTwo = () => {
  return (
    <div className="container-fluid home-carousel-two">
      <div className="container">
        <h2 className="home-carousel-two-heading">
          Check out our previous year pictures
        </h2>
        <div className="row gx-5">
          <div className="col-4">
            <img
              src="https://i.picsum.photos/id/431/354/472.jpg?hmac=YkyFS9lv-6D5EsSufXA9O7Ht2yMbn71nO1R58mtyS9g"
              alt=""
              className="home-carousel-two-img"
            />
          </div>
          <div className="col-4">
            <img
              src="https://i.picsum.photos/id/431/354/472.jpg?hmac=YkyFS9lv-6D5EsSufXA9O7Ht2yMbn71nO1R58mtyS9g"
              alt=""
              className="home-carousel-two-img"
            />
          </div>
          <div className="col-4">
            <img
              src="https://i.picsum.photos/id/431/354/472.jpg?hmac=YkyFS9lv-6D5EsSufXA9O7Ht2yMbn71nO1R58mtyS9g"
              alt=""
              className="home-carousel-two-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselTwo;
