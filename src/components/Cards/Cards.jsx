import React from 'react'
import './Cards.css'

const Cards = (props) => {

    const {banner,img,pya,pyp,game,name} = props

  return (
    <div className='m-auto'>
      <div className="carousel-two-enclosure position-relative">
              <div className="pseudo">{pya===false?`${banner}`:(banner === 1 ? <>1<sup>st</sup> Position</> : banner === 2 ? <>2<sup>nd</sup> Position</> : banner === 3 ? <>3<sup>rd</sup> Position</> : '')}</div>
              <div className="carousel-two-img position-relative">
                <img className="carousel-two-mg" src={img} alt="" />
                {pyp === true?<><div className="game">{game}</div></>:<div className="infos">
                    <div className="name">{name}</div>
                    <div className="social-links">
                      <div className="demo-link"></div>
                      <div className="demo-link"></div>
                      <div className="demo-link"></div>
                      <div className="demo-link"></div>
                    </div>
                  </div>}
              </div>
            </div>
    </div>
  )
}

export default Cards
