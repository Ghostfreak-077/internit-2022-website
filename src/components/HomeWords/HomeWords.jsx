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
            <>
                <h1 className="home-words-content-person-desk">
                  From the {wordInfo.desg}'s desk
                </h1>
            <div className={`home-words-content-container container ${wordInfo.id===2?'flex-row-reverse':''}`}>
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
                <p className="home-word-content-words mx-5">{wordInfo.text}</p>
            </div>
            </>
          );
        })}
      </div>
    );
  }
}

export default HomeWords;
