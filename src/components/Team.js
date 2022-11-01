import React from 'react'
import Teamcard from './TeamCard.js'

const Team = () => {
  return (
      <div className='team-container'>
      <div className="team-main">
        <h2>GENERAL OBSERVER</h2>
        <Teamcard
        designation="Designation"
        name="Name"
        fb=""
        linkedin=""
        ig=""/>
      </div>
        <div>
          <h2 style={{marginTop:'2rem',display:'flex',justifyContent:'center'}}>TEAM HEADS</h2>
        </div>
      <div className="team-main-2">
        <Teamcard
        designation="Designation"
        name="Name"
        fb=""
        linkedin=""
        ig=""/>
        <Teamcard
        designation="Designation"
        name="Name"
        fb=""
        linkedin=""
        ig=""/>
        <Teamcard
        designation="Designation"
        name="Name"
        fb=""
        linkedin=""
        ig=""/>
        <Teamcard
        designation="Designation"
        name="Name"
        fb=""
        linkedin=""
        ig=""/>
        <Teamcard
        designation="Designation"
        name="Name"
        fb=""
        linkedin=""
        ig=""/>
        <Teamcard
        designation="Designation"
        name="Name"
        fb=""
        linkedin=""
        ig=""/>
        

      </div>
      <div/>
    </div>
  )
}

export default Team
