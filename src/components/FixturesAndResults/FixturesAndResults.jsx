import React, {useState} from 'react'
import ScoreCard from "../ScoreCard.jsx";
import './fixturesAndResults.css'

export default function FixturesAndResults() {

    const dummyData=[
        {
            sport: "Chess",
            status: "Upcoming",
            time: "14:50",
            date: "22nd November, 2022",
            team1: "NIT Silchar", 
            team2: "NIT Patna", 
            team1score: 2,
            team2score: 0,
            image: "link",
            addInfo: "Base of 3" 
        },
        {
            sport: "Chess",
            status: "Completed",
            time: "14:50",
            date: "22nd November, 2022",
            team1: "NIT Silchar", 
            team2: "NIT Patna", 
            team1score: 2,
            team2score: 3,
            image: "link",
            addInfo: "Base of 3" 
        },
        {
            sport: "Chess",
            status: "Upcoming",
            time: "14:50",
            date: "22nd November, 2022",
            team1: "NIT Silchar", 
            team2: "NIT Patna", 
            team1score: 2,
            team2score: 0,
            image: "link",
            addInfo: "Base of 3" 
        },

    ]

    const [sport, setSport] = useState("Badminton");
    const [sortBy, setSortBy] = useState("Upcoming");
    const [click, setClick] = useState(0);

    function handleClick(){
        if(sortBy==="Upcoming"){
            setSortBy("Completed")
        }else{
            setSortBy("Upcoming")
        }
        setClick(0);
    }

    return (
        <div>
            <div className="sport-categories">
                <ul className="sport-cat-container">
                    <li value="Badminton" onClick={() => setSport("Badminton")} className={sport==="Badminton" && "selected"}>BADMINTON</li>
                    <li value="Chess" onClick={() => setSport("Chess")} className={sport==="Chess" && "selected"}>CHESS</li>
                    <li value="Table Tennis" onClick={() => setSport("Table Tennis")} className={sport==="Table Tennis" && "selected"}>TABLE TENNIS</li>
                </ul>
            </div>
            <div className="sort-cat">
                <span className="sort-by">Sort by : </span>
                <div className="dropdown">
                    <button className="dropbtn" onClick={() => setClick(1)}>{sortBy}<img src={require('./down.png')} alt="down" className={click && "invert"} /></button>
                    <div className={`dropdown-content ${click && "show"}`}>
                        <a value="Completed" onClick={() => handleClick()}>{sortBy==="Upcoming"?"Completed":"Upcoming"}</a>
                    </div>
                </div>
            </div>
            <div className="scores">
                {dummyData.map((elem, i) => 
                (<ScoreCard
                    key={i}
                    data={elem}
                />)

                )}
            </div>
        </div>
    )
}
