import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { AiTwotoneEdit } from 'react-icons/ai'
import { TiDelete } from 'react-icons/ti'

const ScoreCard = (props) => {

    const {i,data,token,flash, setFlash, setToken, logged, setLogged, editing, setEditing} = props
    const host = 'http://localhost:5000/api/admin'
    const {delChange, setDelChange, putChange, setPutChange} = props
    const date = new Date(data.date)
    const [completed, setCompleted] = useState('upcoming')
    const [team1Point, setTeam1Point] = useState()
    const [team2Point, setTeam2Point] = useState()

    const editTeam = (id, data) => {
        fetch(host + `/match/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "data": data,
                "token": token
            })
        })
        .then(response => response.json())
        .then((res) => {
          setPutChange(res.data)
          setFlash({
            msg: res.success === true ? 'Edited Successfully' : res.message,
            category: res.success === true ? "success" : "danger"
          })
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
      fetch(host + '/match/' + id, requestOptions)
          .then(response => response.json())
          .then(res => {
              setDelChange(res.message)
              setFlash({
                msg: res.success === true ? 'Deleted Successfully' : res.message,
                category: res.success === true ? "success" : "danger"
              })
          });
      }

  return (
    <div className="score-container position-relative" style={{borderTop: `1px solid ${data.completed==="Upcoming"?"red":"gray"}`}}>
        {logged === 'admin' && editing === 'done' ? <div className="btns d-flex p-0 ms-5 position-absolute">
                    <div className="edit text-success me-3" onClick={() => { setEditing(data._id) }}><AiTwotoneEdit /></div>
                    <div className="delete text-danger me-3" onClick={()=>{deleteTeam(data._id)}}><TiDelete /></div>
                  </div> : ''}
        <span className="match-title" style={{backgroundColor: `${data.completed==="upcoming"?"#878787":"#e73725"}`}}>Match {i} - {logged==='admin' && editing === data._id? <select value={completed} onChange={(e) => { setCompleted(e.target.value) }} className="Drop-down " id="201">
                            <option value="upcoming">Upcoming</option>
                            <option value="completed">Completed</option>
                        </select> :data.completed}</span>
        <div className="match-details">
            <span className="match-time">
                Time :- {`${date.getHours()<=12?date.getHours():date.getHours()-12}:${date.getMinutes()} ${date.getHours<=12?'pm':'am'}`}
            </span> | <span className="match-date">
                Date :- {`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}
            </span>
        </div>
        <div className="team1">
            <span className="team-name1">{data.team1}</span>
            <img src={"https://picsum.photos/200" || data.link} alt="team-logo" className="team-logo" />      
        </div>
        <div className="score-box">
            <div className="score">
                {editing === data._id ? <input type='number' className='score_input' value={team1Point} onChange={(e) => { setTeam1Point(e.target.value) }} placeholder={data.team1Point} /> : data.completed === 'completed'? data.team1Point:''}
            </div>
            <div className="vs">
                - VS -
            </div>
            <div className="score">
                {editing === data._id ? <input type='number'className='score_input' value={team2Point} onChange={(e) => { setTeam2Point(e.target.value) }} placeholder={data.team2Point} /> : data.completed === 'completed'? data.team2Point:''}
                {/* {data.completed === 'completed'? data.team2Point:''} */}
            </div>
        </div>
        <div className="team2">
            <img src="https://picsum.photos/200" alt="team-logo" className="team-logo" />      
            <span className="team-name2">{data.team2}</span>         
        </div>
        <div className="add-info">
            {data.matchType}
        </div>
        {editing === data._id ? <div className="btn btn-primary mx-auto done" onClick={() => {
                setEditing('done'); editTeam(data._id, {
                    completed:completed,
                    team1Point:team1Point,
                    team2Point:team2Point
                })
              }}>Done</div> : ''}
    </div>
  )
}
export default ScoreCard

