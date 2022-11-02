import React from 'react'

const Leaderboard = () => {
    const team_list = [
        {
          'sno': 1,
          'team': 'National Institute of Technology, Silchar',
          'gold': 4,
          'silver': 3,
          'bronze' : 2
        },
        {
          'sno': 2,
          'team': 'National Institute of Technology, Meghalaya',
          'gold': 4,
          'silver': 2,
          'bronze' : 1
        },
        {
          'sno': 3,
          'team': 'National Institute of Technology, Trichy',
          'gold': 4,
          'silver': 2,
          'bronze' : 4
        },
        {
          'sno': 4,
          'team': 'National Institute of Technology, Jaipur',
          'gold': 4,
          'silver': 1,
          'bronze' : 2
        },
        {
          'sno': 5,
          'team': 'National Institute of Technology, Nagaland',
          'gold': 4,
          'silver': 0,
          'bronze' : 4
        },
        {
          'sno': 6,
          'team': 'National Institute of Technology, Allahabad',
          'gold': 4,
          'silver': 0,
          'bronze' : 5
        },
    
      ]
    
      return (
        <div>
          <link rel="stylesheet" href="/styles/Stats.css" />
    
          <div className="table container my-5">
            <div className="table-heading bg-black text-light text-start d-flex">
              <div className="sno col-1"></div>
              <div className="team-name col-7">Team Name</div>
              <div className="match-played col-1">Gold</div>
              <div className="match-played col-1">Silver</div>
              <div className="wins col-1">Bronze</div>
            </div>
            {team_list.map((element) => {
    
              return (
                <div className={`table-data d-flex text-start ${element.sno%2!==0?'lighter-bg':'darker-bg'}`}>
                  <div className="sno col-1 text-center">{element.sno}</div>
                  <div className="team-name col-7">{element.team}</div>
                  <div className="match-played ps-3 col-1">{element.gold}</div>
                  <div className="match-played ps-3 col-1">{element.silver}</div>
                  <div className="wins col-1 ps-3">{element.bronze}</div>
                </div>
              )
            })}
          </div>
    
        </div>
      )
}

export default Leaderboard
