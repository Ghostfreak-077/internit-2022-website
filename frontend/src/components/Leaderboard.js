import React, { useContext } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { RiMedalFill } from 'react-icons/ri'
import './Leaderboard.css'
// import GameSelect from './GameSelect.js/GameSelect'
import { AiTwotoneEdit } from 'react-icons/ai'
import { TiDelete } from 'react-icons/ti'
import urlContext from '../Context'

const Leaderboard = (props) => {
  // const team_list = [
  //   {
  //     'sno': 1,
  //     'team': 'National Institute of Technology, Silchar',
  //     'gold': 4,
  //     'silver': 3,
  //     'bronze': 2
  //   },
  //   {
  //     'sno': 2,
  //     'team': 'National Institute of Technology, Meghalaya',
  //     'gold': 4,
  //     'silver': 2,
  //     'bronze': 1
  //   },
  //   {
  //     'sno': 3,
  //     'team': 'National Institute of Technology, Trichy',
  //     'gold': 4,
  //     'silver': 2,
  //     'bronze': 4
  //   },
  //   {
  //     'sno': 4,
  //     'team': 'National Institute of Technology, Jaipur',
  //     'gold': 4,
  //     'silver': 1,
  //     'bronze': 2
  //   },
  //   {
  //     'sno': 5,
  //     'team': 'National Institute of Technology, Nagaland',
  //     'gold': 4,
  //     'silver': 0,
  //     'bronze': 4
  //   },
  //   {
  //     'sno': 6,
  //     'team': 'National Institute of Technology, Allahabad',
  //     'gold': 4,
  //     'silver': 0,
  //     'bronze': 5
  //   },

  // ]

  const [post, setPost] = useState({ teams: [] })
  const [putChange, setPutChange] = useState()
  const [delChange, setDelChange] = useState()
  const url = useContext(urlContext)
  // const url = 'http://localhost:5000/api/admin/teams'
  // const [statsGames, setStatsGames] = useState('badminton')
  const [editing, setEditing] = useState('done')
  const { token, logged } = props
  const [teamName, setTeamName] = useState('')
  const [gold, setGold] = useState()
  const [silver, setSilver] = useState()
  const [bronze, setBronze] = useState()
  const host = url+'/api/admin'

  useEffect(() => {
    axios.get(url+'/api/teams').then(async (res) => {
      await setPost(res.data)
      // console.log(post);
    })
  }, [putChange, delChange, url])

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

      {/* {post.teams.map((element)=>{
            return (<>
              {element.teamName}
            </>)
          })} */}

      {/* <GameSelect statsGames={statsGames} setStatsGames={setStatsGames}/> */}

      <div className="table container my-5">
        <div className="table-heading bg-black text-light text-start d-flex">
          <div className="sno col-1"></div>
          <div className="team-name col-7">Team Name</div>
          <div className="gold col-1" style={{ color: '#FFD700' }}><RiMedalFill /></div>
          <div className="silver col-1" style={{ color: '#A9A9A9' }}><RiMedalFill /></div>
          <div className="bronze col-1" style={{ color: '#A0522D' }}><RiMedalFill /></div>
          <div className="wins col-1">Total</div>
        </div>
        {post.teams.map((element, i) => {

          return (
            <div key={element._id} className={`d-flex flex-column ${i % 2 === 0 ? 'lighter-bg' : 'darker-bg'}`}>
              <div className={`table-data d-flex text-start `}>
                <div className="sno col-1 text-center">{i + 1}</div>
                <div className="team-name col-7 d-flex position-relative">
                  {editing === element._id ? <input type='text' value={teamName} onChange={(e) => { setTeamName(e.target.value) }} placeholder={element.teamName} className="text" /> : <div className="text">{element.teamName}</div>}
                  {logged === 'admin' && editing === 'done' ? <div className="btns d-flex p-0 ms-5 position-absolute">
                    <div className="edit text-success me-3" onClick={() => { setEditing(element._id) }}><AiTwotoneEdit /></div>
                    <div className="delete text-danger me-3" onClick={()=>{deleteTeam(element._id)}}><TiDelete /></div>
                  </div> : ''}
                </div>
                {editing === element._id ? <input type='number' className="match-played ps-3 col-1" value={gold} onChange={(e) => { setGold(e.target.value) }} placeholder={element.gold} /> : <div className="match-played ps-3 col-1">{element.gold}</div>}
                {editing === element._id ? <input type='number' className="match-played ps-3 col-1" value={silver} onChange={(e) => { setSilver(e.target.value) }} placeholder={element.silver} /> : <div className="match-played ps-3 col-1">{element.silver}</div>}
                {editing === element._id ? <input type='number' className="wins col-1 ps-3" value={bronze} onChange={(e) => { setBronze(e.target.value) }} placeholder={element.bronze} /> : <div className="wins col-1 ps-3">{element.bronze}</div>}
                <div className="wins col-1 ps-3">{element.gold + element.silver + element.bronze}</div>
              </div>
              {editing === element._id ? <div className="btn btn-primary mx-auto done" onClick={() => {
                setEditing('done'); editTeam(element._id, {
                  "teamName": `${teamName ? teamName : element.teamName}`,
                  "gold": `${gold ? gold : element.gold}`,
                  "silver": `${silver ? silver : element.silver}`,
                  "bronze": `${bronze ? bronze : element.bronze}`
                })
              }}>Done</div> : ''}
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Leaderboard
