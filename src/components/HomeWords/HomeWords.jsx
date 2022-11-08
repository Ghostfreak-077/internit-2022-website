import React, { Component } from "react";
import HomeWordsData from "./HomeWordsData";
import "./HomeWords.css";

class HomeWords extends Component {
  render() {
    this.state = HomeWordsData;
    return (
      <div className="home-words-container container">
        {/* <h2 className="home-words-heading">Some words from</h2>
        <h2 className="home-words-heading my-2">Our team heads</h2> */}
        {this.state.map((wordInfo) => {
          return (
            <div className={`home-words-content-container flex-col-r container `}>
              <h3 className="home-words-content-person-desk home-words-title">
                From the {wordInfo.desg}'s desk
              </h3>
              <div className={`home-words-content-container ${wordInfo.id === 2 ? 'flex-row-reverse' : ''}`}>

                <div className="home-words-content-person">
                  <img
                    src={wordInfo.src}
                    alt=""
                    className="home-words-content-img"
                  />
                  <h3 className="home-words-content-person-name">
                    {wordInfo.name}
                  </h3>
                  <h4 className="home-words-content-person-desg">
                    {wordInfo.desg}
                  </h4>
                </div>
                <p className="home-words-content-words">{wordInfo.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default HomeWords;
