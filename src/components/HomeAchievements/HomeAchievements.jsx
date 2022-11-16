import React from "react";
import "./HomeAchievements.css";
// import HomeAchievementsCard from "../HomeAchievementsCard/HomeAchievementsCard";

function HomeAchievements() {
  return (
    <div className="achievements-bg container-fluid">
      <div className="achievements-container container">
        <h2 className="achievements-heading">Previous Year</h2>
        <h2 className="achievements-heading mb-5 sm:fs-1">Achievements</h2>
        {/* <HomeAchievementsCard /> */}
        <div className="achieve">
          <div className="small-achieve">
            <h2 className="pt-3">1st Runner Up |</h2>
            <h2>Inter NIT 2019</h2>
            <h6>Table tennis Men's double</h6>
            <span className="mt-2">  1. Riddon Kakoti</span>
            <span className="mb-3">  2. Zoheb Hassan</span>
          </div>
          <div className="small-achieve">
            <h2 className="pt-3">1st Runner Up |</h2>
            <h2>Inter NIT 2019</h2>
            <h6>Table tennis Women's double</h6>
            <span className="mt-2">  1. Akanksha Kedia</span>
            <span className="mb-3">  2. Lamnganbi Khuman</span>
          </div>
          <div className="small-achieve">
            <h2 className="pt-3"mt-2>2nd Runner Up |</h2>
            <h2>Inter NIT 2019</h2>
            <h6>Yoga Women's</h6>
            <span className="mt-2">  1. Sonam Khumukcham</span>
            <span>  2. Akta Singh</span>
            <span>  3. Ashapriya Borgohain</span>
            <span>  4. Purobi Sorong</span>
            <span className="mb-3">  5. Kangkana Moran</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAchievements;
