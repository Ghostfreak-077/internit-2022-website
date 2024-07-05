import Director_Sir from './Assets_Images/Director_Sir.png'
import React from 'react'
import "../Home/About_Inter_Nit.css"

export default function About_Inter_Nit(){
    return(
        <>
        <div className='Background_Nit'>
            <div className='first_Writing'>
                <div className='Want_to mt-5 mb-4'></div>
                <h1 className='About_Inter_Nit pt-2 mb-5'>ABOUT INTER NIT</h1>
                <p className='Long_Para'><p>While the National Institutes of Technology are known for their excellence in the academic field, they are also au courant on the importance of an individual’s extra curriculum. These institutions acknowledge the need to nurture among its staff and students a competitive spirit in the non-academic fields to help inculcate qualities of leadership, tolerance and build an overall power of reasoning.</p>

<p>For this purpose, the All India Inter NIT sports meet came into being. It is an annual sports event held with great fervor in order to enthrall the students as well as accentuate their inner athlete. Students from all of the 31 NITs take part in this event with great zeal and avidity to compete against each other and add to the booming enthusiasm. Sports events for staff and faculties of the 31 NITs are also held to create a gusto and motivate them to work towards their physical well being.</p>

<p>The Inter NIT sports event not only enables individuals to develop their physical skills but also helps them create a wider network through interaction with students from different NITs and making new acquaintances. Students also get to visit and explore a new city adding to the zest and eagerness to be a part of this event.</p>

<p>Under the Inter NIT sports meet, every year, different NITs are hosts to a multitude of sports events. The hosts for this year’s inter NIT are MNIT Jaipur, NIT Silchar, NIT Surathkal, NIT Rourkela, NIT Surat, VNIT Nagpur and NIT Hamirpur. This year, NIT Silchar will be organising the Badminton, Table tennis and Chess tournaments from 18th to 20th November, where students from different NITs all across the country will engage in, to win and become the premier athlete. </p>

                </p>
            </div>
            <img className='Director_Sir_Img' src={Director_Sir} alt='Director Sir'/>
        </div>
        </>
    )
}
