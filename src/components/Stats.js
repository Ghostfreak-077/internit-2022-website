import React, { useEffect } from 'react'
import { useState } from 'react'
import GameSelect from './GameSelect.js/GameSelect'
import axios from 'axios'
import { TiDelete } from 'react-icons/ti'
import { AiTwotoneEdit } from 'react-icons/ai'
import './Leaderboard.css'

const Stats = (props) => {

  const [statsGames, setStatsGames] = useState('badminton')
  const { logged, setLogged } = props
  const [editing, setEditing] = useState('done')

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

  const [post, setPost] = useState({ teams: [] })
  const url = 'http://localhost:5000/api/admin/teams'

  useEffect(() => {
    axios.get(url).then(async (res) => {
      await setPost(res.data)
      console.log(post);
    })
  }, [])

  return (
    <div>
      <link rel="stylesheet" href="/styles/Stats.css" />

      <GameSelect statsGames={statsGames} setStatsGames={setStatsGames} />

      <div className="table container my-5">
        <div className="table-heading bg-black text-light text-start d-flex">
          <div className="sno col-1"></div>
          <div className={`team-name ${logged === 'admi' ? 'col-md-7' : 'col-md-8'}`}>Team Name</div>
          <div className={`match-played ${logged === 'dmin' ? 'col-md-1' : 'col-md-2'}`}>Played</div>
          <div className={`wins ${logged === 'dmin' ? 'col-md-1' : 'col-md-2'}`}>Wins</div>
          {/* <div className="wins col-2 text-dark">{logged}</div> */}
        </div>
        {post.teams.map((element,i) => {

          return (
            <div key={element._id} className={`d-flex flex-column ${i % 2 === 0 ? 'lighter-bg' : 'darker-bg'}`}>
            <div className={`table-data d-flex text-start`}>
              <div className="sno col-1 text-center">{i+1}</div>
              <div className={`team-name d-flex position-relative ${logged === 'adin' ? 'col-md-7' : 'col-md-8'}`}>
                {element.teamName}
                {logged==='admin'?<div className="btns d-flex p-0 ms-5 position-absolute">
                  <div className="edit text-success me-3" onClick={()=>{setEditing(element._id)}}><AiTwotoneEdit /></div>
                  <div className="delete text-danger me-3"><TiDelete /></div>
                </div>:''}
              </div>
              <div className={`match-played m-auto  ps-3 ${logged === 'adin' ? 'col-md-1' : 'col-md-2'}`}>{element.gamePlayed}</div>
              <div className={`wins ps-3 ${logged === 'amin' ? 'col-md-1' : 'col-md-2'}`}>{element.wins}</div>
            </div>
            {editing===element._id?<div className="btn btn-primary mx-auto done" onClick={()=>{setEditing('done')}}>Done</div>:''}
            {/* {editing==='edit'?'hello':''} */}
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Stats
