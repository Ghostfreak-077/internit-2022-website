import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import './AdminPage/Admin_Page.css'

const Admin = (props) => {
    const [team1,setTeam1] = useState()
    const [team2,setTeam2] = useState()
    const [match,setMatch] = useState('men_single')
    const [game, setGame] = useState('badminton')
    const [completed, setCompleted] = useState('completed')
    const [team1score,setTeam1Score] = useState()
    const [team2score,setTeam2Score] = useState()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const {logged, setLogged} = props

    const [post, setPost] = useState({})
    
    const host = 'http://localhost:5000/api/admin'
    const [cookies, setCookies, removeCookies] = useCookies(['token'])

    const url = 'http://localhost:5000/api/admin/match/new'

    const login = ()=>{
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            "email":email,
            "password": pass,
           })
      };
      fetch(host+'/login', requestOptions)
          .then(response => response.json())
          .then(data => {
            setPost(data)
            setLogged('admin')
            // console.log(data);
            // setCookies('internit',data.token,{
            //   path:'/'
            // })
          });
          // console.log();
      }
  

  

    const NewMatch = () =>{
        axios.post(url,{
            "infos":{
                "team1":team1,
                "team2":team2,
                "game": game,
                "matchType":match,
                "completed":completed,
                "team1Point":team1score,
                "team2Point":team2score
            },
            // "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjNlNmM1NTMwY2UxODI4YWI5NzViMyIsImlhdCI6MTY2NzY2OTk1OSwiZXhwIjoxNjY4MTAxOTU5fQ.FRSEoW_i3Fytuc9L6jCYCbHoAsXcvbaKf13OEZ31L8k"
            "token": post.token
        }).then((res)=>{
            setPost(res.data)
        })
    }
    
    const NewTeam = ()=>{
        axios.post(host+'/team/new',{
            "infos":{
                "team1":team1,
                "team2":team2,
                "game": game,
                "matchType":match,
                "completed":completed,
                "team1Point":team1score,
                "team2Point":team2score
            },
            // "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjNlNmM1NTMwY2UxODI4YWI5NzViMyIsImlhdCI6MTY2NzY2OTk1OSwiZXhwIjoxNjY4MTAxOTU5fQ.FRSEoW_i3Fytuc9L6jCYCbHoAsXcvbaKf13OEZ31L8k"
            "token": post.token
        }).then((res)=>{
            setPost(res.data)
        })
    }

    return (
        <>

        <div className="login">
            <input type="text" name="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="password" name="pass" id="pass" value={pass} onChange={(e)=>{setPass(e.target.value)}} />
            <input type="text" name="token" id="token" value={post.token} />
            <button onClick={login}>Login</button>
        </div>

        <div className='Admin'>
            <div className='Writing_ m-4'>
                <p className='writing_'>ADMIN PANEL</p>
            </div>
            <select className='Drop_down mb-3' value={game} onChange={(e)=>{setGame(e.target.value)}}>
                    <option id='101' value="badminton" >Badminton</option>
                    <option id='102' value="chess" required>Chess</option>
                    <option id='103' value="tt" required>Table Tennis</option>
            </select>  
            <form>
                <div className="form-group">
                    <p className='corresponding_ my-3'>Team 1 Name</p>
                    <input type="text" value={team1} onChange={(e)=>{setTeam1(e.target.value)}} className="form-control my-3" id="201"></input>
                </div>
                <div className="form-group">
                    <p className='corresponding_ my-3'>Team 2 Name</p>
                    <input type="text" value={team2} onChange={(e)=>{setTeam2(e.target.value)}} className="form-control my-3" id="202"></input>
                </div>
                <div className='HugMatch my-3'>
                    <p className='corresponding_ my-1'>Match Type </p>
                    <select className='Drop_down1 mx-4' value={match} onChange={(e)=>{setMatch(e.target.value)}}>
                        <option className='select_drop' id='51' value="men_single">Men's Single</option>
                        <option className='select_drop' id='52' value="men_double" required>Men's Double</option>
                        <option className='select_drop' id='53' value="women_single" required>Women's Single</option>
                        <option className='select_drop' id='54' value="women_double" required>Women's Double</option>
                    </select>                    
                </div>
                <div className='HugMatch my-3'>
                    <p className='corresponding_ my-1'>Completed</p>
                    <select className='Drop_down1 mx-4' value={completed} onChange={(e)=>{setCompleted(e.target.value)}}>
                        <option className='select_drop' id='51' value="upcoming">Upcoming</option>
                        <option className='select_drop' id='52' value="completed" required>Completed</option>
                    </select>                    
                </div>
                <div className="form-group">
                    <p className='corresponding_ my-3'>Team 1 Score</p>
                    {completed==='upcoming'?<input type="number" disabled onChange={(e)=>{setTeam1Score(e.target.value)}} className="form-control my-3" id="203" ></input>:<input type="number" value={team1score} onChange={(e)=>{setTeam1Score(e.target.value)}} className="form-control my-3" id="203" ></input>}
                </div>
                <div className="form-group">
                    <p className='corresponding_ my-3'>Team 2 Score</p>
                    {completed==='upcoming'?<input type="number" disabled onChange={(e)=>{setTeam2Score(e.target.value)}} className="form-control my-3" id="203" ></input>:<input type="number" value={team2score} onChange={(e)=>{setTeam2Score(e.target.value)}} className="form-control my-3" id="203" ></input>}
                    {/* <input type="number" value={team2score} onChange={(e)=>{setTeam2Score(e.target.value)}} className="form-control my-3" id="204"></input> */}
                </div>
                <div type="submit" onClick={NewMatch} className="btn io btn-secondary my-5">Submit</div>
            </form>   
        </div>     
        </>
    )
}

export default Admin;
