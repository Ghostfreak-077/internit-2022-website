import React from 'react'
import ScoreCard from "./ScoreCard.jsx";

export default function FixturesAndResults() {
    return (
        <div>
            <div className="sport-categories">
                <ul className="sport-cat-container">
                    <li>Badminton</li>
                    <li>Chess</li>
                    <li>Table Tennis</li>
                </ul>
            </div>
            <div className="sort-cat">
                <span>Sort by : </span>
                <span className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" href="#">Dropdown item</button></li>
                        <li><button className="dropdown-item" href="#">Dropdown item</button></li>
                    </ul>
                </span>
            </div>
            <div className="scores">
                <ScoreCard
                    color="red"
                />
            </div>



        </div>
    )
}
