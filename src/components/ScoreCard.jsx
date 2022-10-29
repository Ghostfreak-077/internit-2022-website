import React from 'react'

const ScoreCard = ({data}) => {
  return (
    <div className="score-container" style={{borderTop: `1px solid ${data.status==="Upcoming"?"red":"gray"}`}}>
        <span className="match-title">Match 1 - Completed</span>
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
                {data.team1score}
            </div>
            <div className="vs">
                - VS -
            </div>
            <div className="score">
                {data.team2score}
            </div>
        </div>
        <div className="team2">
            <img src="https://picsum.photos/200" alt="team-logo" className="team-logo" />      
            <span className="team-name2">{data.team2}</span>         
        </div>
        <div className="add-info">
            {data.addInfo}
        </div>
    </div>
  )
}
export default ScoreCard

