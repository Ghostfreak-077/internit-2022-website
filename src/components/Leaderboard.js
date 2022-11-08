import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import {RiMedalFill} from 'react-icons/ri'
import './Leaderboard.css'
import GameSelect from './GameSelect.js/GameSelect'
import { AiTwotoneEdit } from 'react-icons/ai'
import { TiDelete } from 'react-icons/ti'

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

      const [post, setPost] = useState({teams:[]})
      const url = 'http://localhost:5000/api/admin/teams'
      const [statsGames, setStatsGames] = useState('badminton')
      const [editing, setEditing] = useState('done')

      useEffect(()=>{
        axios.get(url).then(async (res)=>{
          await setPost(res.data)
          console.log(post);
        })
      },[])
    
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
              <div className="gold col-1" style={{color: '#FFD700'}}><RiMedalFill/></div>
              <div className="silver col-1" style={{color: '#A9A9A9'}}><RiMedalFill/></div>
              <div className="bronze col-1" style={{color: '#A0522D'}}><RiMedalFill/></div>
              <div className="wins col-1">Total</div>
            </div>
            {post.teams.map((element) => {
    
              return (
                <div className={`table-data d-flex text-start ${element.teamId%2!==0?'lighter-bg':'darker-bg'}`}>
                  <div className="sno col-1 text-center">{element.teamId}</div>
                  <div className="team-name col-7 d-flex position-relative">
                    <div className="text">{element.teamName}</div>
                    <div className="btns d-flex ms-5 position-absolute">
                      <div className="edit text-success me-3" onClick={(e)=>{setEditing(element._id)}}><AiTwotoneEdit/></div>
                      <div className="delete text-danger me-3"><TiDelete/></div>  
                    </div>
                  </div>
                  <div className="match-played ps-3 col-1">{element.gold}</div>
                  <div className="match-played ps-3 col-1">{element.silver}</div>
                  <div className="wins col-1 ps-3">{element.bronze}</div>
                  <div className="wins col-1 ps-3">{element.gold + element.silver + element.bronze}</div>
                </div>
              )
            })}
          </div>
    
        </div>
      )
}

export default Leaderboard
