import React from 'react'
import './GameSelect.css'

const GameSelect = (props) => {

    const {statsGames, setStatsGames} = props

  return (
    <>
      <div className="games-nav my-5">
        <ul className="container px-5 d-flex">
          <li className={`mx-auto ${statsGames==='badminton'?'stats-games-sel':''}`} onClick={()=>{setStatsGames('badminton')}} >Badminton</li>
          <li className={`mx-auto ${statsGames==='chess'?'stats-games-sel':''}`} onClick={()=>{setStatsGames('chess')}} >Chess</li>
          <li className={`mx-auto ${statsGames==='tt'?'stats-games-sel':''}`} onClick={()=>{setStatsGames('tt')}} >Table Tennis</li>
        </ul>
      </div>
    </>
  )
}

export default GameSelect
