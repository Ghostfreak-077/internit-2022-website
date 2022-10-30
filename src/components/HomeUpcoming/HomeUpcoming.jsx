import React from "react";
import "./HomeUpcoming.css";
import HomeUpcomingCard from "../HomeUpcomingCard/HomeUpcomingCard";
import HomeUpcomingCardData from "../HomeUpcomingCard/HomeUpcomingCardData";

function HomeUpcoming() {
  return (
    <div className="my-5">
      <h2 className="home-upcoming-heading my-4">Upcoming Inter NIT Events</h2>
      <div className="container home-upcoming-container">
        <div className="row">
          <HomeUpcomingCard data={HomeUpcomingCardData} />
        </div>
      </div>
    </div>
  );
}

export default HomeUpcoming;
