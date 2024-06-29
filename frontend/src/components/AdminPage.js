import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import './AdminPage/Admin_Page.css'
import urlContext from '../Context';

const Admin = (props) => {
    const [team1, setTeam1] = useState('National Institute of Technology, Silchar')
    const [newTeam, setNewTeam] = useState('National Institute of Technology, Silchar')
    const [team2, setTeam2] = useState('National Institute of Technology, Rourkela')
    const [match, setMatch] = useState('men_single')
    const [game, setGame] = useState('badminton')
    const [completed, setCompleted] = useState('completed')
    const [team1score, setTeam1Score] = useState()
    const [team2score, setTeam2Score] = useState()
    const [putChange, setPutChange] = useState()
    const [delChange, setDelChange] = useState()
    const [date, setDate] = useState(new Date)
    const [time, setTime] = useState(new Date)
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const { flash, setFlash, logged, setLogged } = props

    const [post, setPost] = useState({})
    const { token, setToken } = props

    const host = useContext(urlContext)+'/api'
    const [cookies, setCookies, removeCookies] = useCookies(['token'])

    const url = useContext(urlContext)+'/api/match/new'

    const login = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": email,
                "password": pass,
            })
        };
        fetch(host + '/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                setPost(data)
                setToken(data.token)
                data.role === 'admin' ? setLogged('admin') : setLogged('defined')
                setFlash({
                    msg: data.success === true ? 'Logged In Successfully' : data.message,
                    category: data.success === true ? "success" : "danger"
                })
            });
    }


    const NewMatch = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "infos": {
                    "team1": team1,
                    "team2": team2,
                    "game": game,
                    "date": date,
                    "time": time,
                    "matchType": match,
                    "completed": completed,
                    "team1Point": team1score,
                    "team2Point": team2score
                },
                // "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjNlNmM1NTMwY2UxODI4YWI5NzViMyIsImlhdCI6MTY2NzY2OTk1OSwiZXhwIjoxNjY4MTAxOTU5fQ.FRSEoW_i3Fytuc9L6jCYCbHoAsXcvbaKf13OEZ31L8k"
                "token": token
            })
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then((res) => {
                setPost(res.data)
                setFlash({
                    msg: res.success === true ? 'Match Added Successfully' : res.message,
                    category: res.success === true ? "success" : "danger"
                })
            })
    }

    return (
        <>

            <div className={`position-absolute ${logged === 'admin' ? 'backdrop' : ''}`}></div>

            {logged === 'admin' ? <div className="login">
                <input type="text" name="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email Id" />
                <input type="password" name="pass" id="pass" value={pass} onChange={(e) => { setPass(e.target.value) }} placeholder="Password" />
                {/* <input type="text" name="token" id="token" value={post.token} /> */}
                <button className='login-btn' onClick={login}>Login</button>
            </div> : ''}

            <div className='Admin'>
                <div className='Writing_ m-4'>
                    <p className='writing_'>New Match</p>
                </div>
                <select className='Drop_down mb-3' value={game} onChange={(e) => { setGame(e.target.value) }}>
                    <option id='101' value="badminton" >Badminton</option>
                    <option id='102' value="chess" required>Chess</option>
                    <option id='103' value="tt" required>Table Tennis</option>
                </select>
                <form>
                    <div className="form-group">
                        <p className='corresponding_ my-3'>Team 1 Name</p>
                        <select value={team1} onChange={(e) => { setTeam1(e.target.value) }} className="Drop-down form-control my-3" id="201">
                            <option value="National Institute of Technology, Silchar">National Institute of Technology, Silchar</option>
                            <option value="National Institute of Technology, Rourkela">National Institute of Technology, Rourkela</option>
                            <option value="National Institute of Technology, Kurukshetra">National Institute of Technology, Kurukshetra</option>
                            <option value="National Institute of Technology, Trichy">National Institute of Technology, Trichy</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <p className='corresponding_ my-3'>Team 2 Name</p>
                        <select value={team2} onChange={(e) => { setTeam2(e.target.value) }} className="Drop-down form-control my-3" id="201">
                            <option value="National Institute of Technology, Silchar">National Institute of Technology, Silchar</option>
                            <option value="National Institute of Technology, Rourkela">National Institute of Technology, Rourkela</option>
                            <option value="National Institute of Technology, Kurukshetra">National Institute of Technology, Kurukshetra</option>
                            <option value="National Institute of Technology, Trichy">National Institute of Technology, Trichy</option>
                        </select>
                    </div>
                    <div className="date">
                        <input type="datetime-local" name="date" id="time" value={date} onChange={(e) => { setDate(e.target.value) }} />
                        <input type="time" name="time" id="time" value={time} onChange={(e) => { setTime(e.target.value) }} />
                    </div>
                    <div className='HugMatch my-3'>
                        <p className='corresponding_ my-1'>Match Type </p>
                        <select className='Drop_down1 mx-4' value={match} onChange={(e) => { setMatch(e.target.value) }}>
                            <option className='select_drop' id='51' value="men_single">Men's Single</option>
                            <option className='select_drop' id='52' value="men_double" required>Men's Double</option>
                            <option className='select_drop' id='53' value="women_single" required>Women's Single</option>
                            <option className='select_drop' id='54' value="women_double" required>Women's Double</option>
                        </select>
                    </div>
                    <div className='HugMatch my-3'>
                        <p className='corresponding_ my-1'>Completed</p>
                        <select className='Drop_down1 mx-4' value={completed} onChange={(e) => { setCompleted(e.target.value) }}>
                            <option className='select_drop' id='51' value="upcoming">Upcoming</option>
                            <option className='select_drop' id='52' value="completed" required>Completed</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <p className='corresponding_ my-3'>Team 1 Score</p>
                        {completed === 'upcoming' ? <input type="number" disabled onChange={(e) => { setTeam1Score(e.target.value) }} className="form-control my-3" id="203" ></input> : <input type="number" value={team1score} onChange={(e) => { setTeam1Score(e.target.value) }} className="form-control my-3" id="203" ></input>}
                    </div>
                    <div className="form-group">
                        <p className='corresponding_ my-3'>Team 2 Score</p>
                        {completed === 'upcoming' ? <input type="number" disabled onChange={(e) => { setTeam2Score(e.target.value) }} className="form-control my-3" id="203" ></input> : <input type="number" value={team2score} onChange={(e) => { setTeam2Score(e.target.value) }} className="form-control my-3" id="203" ></input>}
                        {/* <input type="number" value={team2score} onChange={(e)=>{setTeam2Score(e.target.value)}} className="form-control my-3" id="204"></input> */}
                    </div>
                    <div type="submit" onClick={NewMatch} className="btn io btn-secondary my-5">Submit</div>
                </form>

            </div>
        </>
    )
}

export default Admin;
