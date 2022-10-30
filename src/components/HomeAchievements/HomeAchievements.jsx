import React from "react";
import "./HomeAchievements.css";
import HomeAchievementsCard from "../HomeAchievementsCard/HomeAchievementsCard";

function HomeAchievements() {
  return (
    <div className="achievements-bg container-fluid">
      <div className="achievements-container container">
        <h2 className="achievements-heading">Previous Year</h2>
        <h2 className="achievements-heading mb-5">Achievements</h2>
        <HomeAchievementsCard />
      </div>
    </div>
  );
}

export default HomeAchievements;
