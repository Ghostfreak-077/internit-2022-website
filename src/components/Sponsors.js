import React from 'react'
//  "/styles/Sponsor.css"

const Sponsors = () => {
  return (
    <div>
      <link rel="stylesheet" href="/styles/Sponsor.css" />
      <div className="spon-main">
        <div className="title-spon">
          <h2>TITLE SPONSOR</h2>
          <img src="./dummy.jpg" alt="sponsor card" className='sponsor-img'/>
        </div>
        <div className="spon-partners">
          <h2>PARTNERS</h2>
          <div className="spon-part-card">
          <img src="./dummy.jpg" alt="part" className='sponsor-img'/>
          <img src="./dummy.jpg" alt="part" className='sponsor-img'/>
          <img src="./dummy.jpg" alt="part" className='sponsor-img'/>
          <img src="./dummy.jpg" alt="part" className='sponsor-img'/>
          <img src="./dummy.jpg" alt="part" className='sponsor-img'/>
          <img src="./dummy.jpg" alt="part" className='sponsor-img'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors;
