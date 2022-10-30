import React from 'react'
import { useState } from 'react'
import GameSelect from './GameSelect.js/GameSelect'

const Stats = () => {

  const [statsGames, setStatsGames] = useState('badminton')

  const team_list = [
    {
      'sno': 1,
      'team': 'National Institute of Technology, Silchar',
      'mp': 4,
      'now': 3
    },
    {
      'sno': 2,
      'team': 'National Institute of Technology, Meghalaya',
      'mp': 4,
      'now': 2
    },
    {
      'sno': 3,
      'team': 'National Institute of Technology, Trichy',
      'mp': 4,
      'now': 2
    },
    {
      'sno': 4,
      'team': 'National Institute of Technology, Jaipur',
      'mp': 4,
      'now': 1
    },
    {
      'sno': 5,
      'team': 'National Institute of Technology, Nagaland',
      'mp': 4,
      'now': 0
    },
    {
      'sno': 6,
      'team': 'National Institute of Technology, Allahabad',
      'mp': 4,
      'now': 0
    },

  ]

  return (
    <div>
      <link rel="stylesheet" href="/styles/Stats.css" />

      <GameSelect statsGames={statsGames} setStatsGames={setStatsGames}/>

      <div className="table container my-5">
        <div className="table-heading bg-black text-light text-start d-flex">
          <div className="sno col-1"></div>
          <div className="team-name col-7">Team Name</div>
          <div className="match-played col-2">Match Played</div>
          <div className="wins col-2">No. of Wins</div>
        </div>
        {team_list.map((element) => {

          return (
            <div className={`table-data d-flex text-start ${element.sno%2!==0?'lighter-bg':'darker-bg'}`}>
              <div className="sno col-1 text-center">{element.sno}</div>
              <div className="team-name col-7">{element.team}</div>
              <div className="match-played ps-3 col-2">{element.mp}</div>
              <div className="wins col-2 ps-3">{element.now}</div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Stats
