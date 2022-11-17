import React, { useState, useEffect } from 'react'
import GameSelect from '../GameSelect.js/GameSelect.js';
import ScoreCard from "../ScoreCard.jsx";
import './fixturesAndResults.css'
import axios from 'axios';

export default function FixturesAndResults(props) {

    const dummyData = [
        {
            sport: "Chess",
            status: "Upcoming",
            time: "14:50",
            date: "22nd November, 2022",
            team1: "NIT Silchar",
            team2: "NIT Patna",
            team1score: 2,
            team2score: 0,
            image: "link",
            addInfo: "Base of 3"
        },
        {
            sport: "Chess",
            status: "Completed",
            time: "14:50",
            date: "22nd November, 2022",
            team1: "NIT Silchar",
            team2: "NIT Patna",
            team1score: 2,
            team2score: 3,
            image: "link",
            addInfo: "Base of 3"
        },
        {
            sport: "Chess",
            status: "Upcoming",
            time: "14:50",
            date: "22nd November, 2022",
            team1: "NIT Silchar",
            team2: "NIT Patna",
            team1score: 2,
            team2score: 0,
            image: "link",
            addInfo: "Base of 3"
        },

    ]

    const [sport, setSport] = useState("Badminton");
    const [sortBy, setSortBy] = useState("completed");
    const [click, setClick] = useState(0);
    const [statsGames, setStatsGames] = useState('badminton')
    const [post, setPost] = useState({ matchs: [] })
    const [editing, setEditing] = useState('done')
    const {flash,setFlash, token, setToken,logged, setLogged} = props
    const [delChange, setDelChange] = useState()
    const [putChange, setPutChange] = useState()


    const url = 'http://localhost:5000/api/admin/matchs'

    useEffect(() => {
        axios.get(url).then(async (res) => {
            await setPost(res.data)
            console.log(post);
        })
    }, [delChange,putChange])

    // function handleClick() {
    //     if (sortBy === "Upcoming") {
    //         setSortBy("Completed")
    //     } else {
    //         setSortBy("Upcoming")
    //     }
    //     setClick(0);
    // }

    return (
        <div>
            <GameSelect statsGames={statsGames} setStatsGames={setStatsGames} />
            <div className="sort-cat">
                <span className="sort-by">Sort by : </span>
                <select className='Drop_down1 mx-4' value={sortBy} onChange={(e)=>{setSortBy(e.target.value)}}>
                        <option className='select_drop' id='51' value="upcoming">Upcoming</option>
                        <option className='select_drop' id='52' value="completed" required>Completed</option>
                </select>          
            </div>
            <div className="scores mb-5">
                {post.matchs.map((elem, i) =>{
                if (elem.completed===sortBy && (elem.completed === 'upcoming' || 'completed') && statsGames === elem.game) {

                    return ( <ScoreCard
                        flash={flash}
                        setFlash={setFlash}
                        key={i}
                        i = {i}
                        data={elem}
                        logged={logged}
                        editing={editing}
                        setEditing={setEditing}
                        token = {token}
                        setToken = {setToken}
                        setLogged={setLogged}
                        delChange={delChange}
                        setDelChange={setDelChange}
                        putChange={putChange}
                        setPutChange={setPutChange}
                        />)
                    }

                })}
            </div>
        </div>
    )
}
