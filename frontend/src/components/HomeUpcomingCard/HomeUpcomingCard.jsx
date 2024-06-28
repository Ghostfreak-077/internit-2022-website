import React from "react";
import "./HomeUpcomingCard.css";

function HomeUpcomingCard({ data }) {
  return (
    <>
      {data.map((item) => (
        <div className="upcoming-card-holder col-12 col-lg-4">
          <div className="upcoming-image-holder" key={item.id}>
            <img className="upcoming-image" src={item.src} alt="" />
          </div>
          <h3 className="upcoming-image-title">{item.name}</h3>
        </div>
      ))}
    </>
  );
}

export default HomeUpcomingCard;
