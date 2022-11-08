import React from 'react'

const ScoreCard = ({data}) => {
  return (
    <div className="score-container" style={{borderTop: `1px solid ${data.completed==="Upcoming"?"red":"gray"}`}}>
        <span className="match-title" style={{backgroundColor: `${data.completed==="upcoming"?"#878787":"#e73725"}`}}>Match 1 - {data.completed}</span>
        <div className="match-details">
            <span className="match-time">
                Time :- {data.time}
            </span> | <span className="match-date">
                Date :- {data.date}
            </span>
        </div>
        <div className="team1">
            <span className="team-name1">{data.team1}</span>
            <img src={"https://picsum.photos/200" || data.link} alt="team-logo" className="team-logo" />      
        </div>
        <div className="score-box">
            <div className="score">
                {data.completed === 'completed'? data.team1Point:''}
            </div>
            <div className="vs">
                - VS -
            </div>
            <div className="score">
                {data.completed === 'completed'? data.team2Point:''}
            </div>
        </div>
        <div className="team2">
            <img src="https://picsum.photos/200" alt="team-logo" className="team-logo" />      
            <span className="team-name2">{data.team2}</span>         
        </div>
        <div className="add-info">
            {data.matchType}
        </div>
    </div>
  )
}
export default ScoreCard

