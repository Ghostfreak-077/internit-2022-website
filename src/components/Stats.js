import React, { useEffect } from 'react'
import { useState } from 'react'
import GameSelect from './GameSelect.js/GameSelect'
import axios from 'axios'
import { TiDelete } from 'react-icons/ti'
import { AiTwotoneEdit } from 'react-icons/ai'
import './Leaderboard.css'

const Stats = (props) => {

  const [statsGames, setStatsGames] = useState('badminton')
  const { token, setToken, logged, setLogged } = props
  const [editing, setEditing] = useState('done')
  const [putChange, setPutChange] = useState()
  const [delChange, setDelChange] = useState()
  const host = 'http://localhost:5000/api/admin'
  const [teamName, setTeamName] = useState()
  const [gamePlayed, setGamePlayed] = useState()
  const [wins, setWins] = useState()

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
  }, [putChange,delChange])

  const editTeam = (id, data) => {
    axios.put(host + `/team/${id}`, {
      "data": data,
      "token": token
    }).then((res) => {
      setPutChange(res.data)
    })
  }

  const deleteTeam = (id) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          "token" : token
      })
  };
  fetch(host + '/team/' + id, requestOptions)
      .then(response => response.json())
      .then(res => {
          setDelChange(res.message)
      });
  }


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
              {editing === element._id ? <input type='text' value={teamName} onChange={(e) => { setTeamName(e.target.value) }} placeholder={element.teamName} className="text" /> : <div className="text">{element.teamName}</div>}
                {logged==='admin'&& editing === 'done'?<div className="btns d-flex p-0 ms-5 position-absolute">
                  <div className="edit text-success me-3" onClick={()=>{setEditing(element._id)}}><AiTwotoneEdit /></div>
                  <div className="delete text-danger me-3" onClick={()=>{deleteTeam(element._id)}}><TiDelete /></div>
                </div>:''}
              </div>
              {editing === element._id ? <input type='number' className="match-played ps-3 col-md-2" value={gamePlayed} onChange={(e) => { setGamePlayed(e.target.value) }} placeholder={element.gamePlayed} /> : <div className="match-played ps-3 col-1">{statsGames === 'badminton'? element.badmintonPlayed: statsGames === 'chess'? element.chessPlayed: statsGames === 'tt'?element.ttPlayed:''}</div>}
              {editing === element._id ? <input type='number' className="wins ps-3 col-md-2" value={wins} onChange={(e) => { setWins(e.target.value) }} placeholder={element.wins} /> : <div className="match-played ps-3 col-1">{statsGames === 'badminton'? element.badmintonWins: statsGames === 'chess'? element.chessWins: statsGames === 'tt'?element.ttWins:''}</div>}
            </div>
            {editing===element._id?<div className="btn btn-primary mx-auto done" onClick={()=>{
              setEditing('done');editTeam(element._id, {
                "teamName": `${teamName ? teamName : element.teamName}`,
                'badmintonPlayed': `${gamePlayed && statsGames === 'badminton' ? gamePlayed : element.badmintonPlayed}`,
                'chessPlayed': `${gamePlayed && statsGames === 'chess' ? gamePlayed : element.chessPlayed}`,
                'ttPlayed': `${gamePlayed && statsGames === 'tt' ? gamePlayed : element.ttPlayed}`,
                "badmintonWins": `${wins && statsGames === 'badminton' ? wins : element.badmintonWins}`,
                "chessWins": `${wins && statsGames === 'chess' ? wins : element.chessWins}`,
                "ttWins": `${wins && statsGames === 'tt' ? wins : element.ttWins}`
              }
              )}}>Done</div>:''}
            {/* {editing==='edit'?'hello':''} */}
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Stats
