import React from 'react'
import Teamcard from './TeamCard.js'

const Team = () => {
  return (
      <div className='team-container'>
      <div className="team-main">
        <h2>GENERAL OBSERVER</h2>
        <Teamcard/>
      </div>
        <h2 style={{marginTop:'1rem'}}>TEAM HEADS</h2>
      <div className="team-main-2">
        <Teamcard/>
        <Teamcard/>
        <Teamcard/>
        <Teamcard/>
        <Teamcard/>
        <Teamcard/>

      </div>
      <div/>
    </div>
  )
}

export default Team
