import React from "react";
import "../Home/What_We_Offer.css";
import Badminton_Vector from "./Assets_Images/Badminton_Vector.png";
import Chess_Vec from "./Assets_Images/Chess_Vector.png";
import TT_Vector from "./Assets_Images/TT_Vector.png";

export default function What_We_Offer() {
  return (
    <div className="Parent_DIVw mx-5">
      <p className="ourFeatures">OUR FEATURES</p>
      <p className="whatWeOffer mb-4">WHAT WE OFFER</p>
      <div className="flex-container">
        <div className="inside">
          <div className="Round_VecB my-3">
            <img
              className="Round_Vec"
              src={Badminton_Vector}
              alt="Badminton"
            ></img>
          </div>
          <div className="ListWhat">
            <ul className="WriteList">
              <li>2 separate complexes</li>
              <li>
                One of them is equipped with National standard wooden courts
              </li>
              <li>Other one is for yet developing their skills</li>
            </ul>
          </div>
        </div>
        <div className="inside">
          <div className="Round_VecB my-3">
            <img className="Round_Vec" src={Chess_Vec} alt="Chess"></img>
          </div>
          <div className="ListWhat">
            <ul className="WriteList">
              <li>Available Stopwatches</li>
              <li>Good quality boards and pieces</li>
            </ul>
          </div>
        </div>
        <div className="inside">
          <div className="Round_VecB my-3">
            <img className="Round_Vec" src={TT_Vector} alt="Table Tennis"></img>
          </div>
          <div className="ListWhat">
            <ul className="WriteList">
              <li>Functional and sturdy tables</li>
              <li>Paddles and Ping pong balls</li>
              <li>Favorable environment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
