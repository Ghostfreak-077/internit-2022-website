import React from 'react'
import '../Home/What_We_Offer.css'
import Badminton_Vector from '../Assets_Images/Badminton_Vector.png'
import Chess_Vec from '../Assets_Images/Chess_Vector.png'
import TT_Vector from '../Assets_Images/TT_Vector.png'

export default function What_We_Offer(){
    return(
        <div className='Parent_DIVw my-2'>
            <p className='ourFeatures'>OUR FEATURES</p>
            <p className='whatWeOffer'>WHAT WE OFFER</p>
                <div className='flex-container mx-5'>
                    <div>
                        <div className="Round_VecB">
                            <img className='Round_Vec' src={Badminton_Vector} alt="Badminton"></img>
                        </div>
                        <ul className='WriteList mx-4'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                    </div>
                    <div>
                        <div className='Round_VecB'>
                            <img className='Round_Vec' src={Chess_Vec} alt="Chess"></img>
                        </div>
                        <ul className='WriteList mx-4'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                    </div>
                    <div>
                        <div className='Round_VecB'>
                            <img className='Round_Vec' src={TT_Vector} alt="Table Tennis"></img>
                        </div>
                        <ul className='WriteList mx-4'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                    </div>
                </div>    
        </div>
    )
}