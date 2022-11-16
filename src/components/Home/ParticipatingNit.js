import React from 'react'
import ParticipatingImage from './Assets_Images/ParticipatingImage.png'
import './Participating.css'

const ParticipatingNit = () => {
    return (
            <div className='Participate'>
                <div className='participate'>
                    <p className='himang'>PARTICIPATING NITS</p>
                </div>
                <div className='imgHimang'>
                    <img className='imgHimang2' src={ParticipatingImage} alt="Participating Nits"></img>
                </div>
            </div>
    )
}

export default ParticipatingNit;