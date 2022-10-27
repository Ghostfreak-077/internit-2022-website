import Director_Sir from './Assets_Images/Director_Sir.png'
import React from 'react'
import "../Home/About_Inter_Nit.css"

export default function About_Inter_Nit(){
    return(
        <>
        <div className='Background_Nit'>
            <div className='first_Writing'>
                <h3 className='Want_to mt-5 mb-4'>WANT TO KNOW MORE?</h3>
                <h1 className='About_Inter_Nit pt-2 mb-5'>ABOUT INTER NIT</h1>
                <p className='Long_Para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit bibendum nec amet urna blandit. Quis a tempor, arcu, in sed. Ac diam id tortor aliquet lacus. Mattis sodales eu mus volutpat ultrices gravida.
                            Pretium nec, egestas vitae vitae quam sed gravida quam sit. Placerat consectetur faucibus aliquet dui, dictum mattis. Nunc, placerat aliquet non quis donec velit. Sed suscipit sagittis lacinia tristique amet mauris luctus. Id adipiscing lacus commodo integer vestibulum leo. Dictum tellus laoreet feugiat mi posuere. Nisl a turpis massa sollicitudin.
                            Lectus ac iaculis morbi dolor orci, at sed amet. Gravida aliquet diam diam dictum dictumst sit in. Cum consectetur adipiscing quisque proin ultrices etiam urna, donec. In sed porta vitae eu senectus consectetur lacus, diam. Ipsum amet, cras velit at amet. Dui nam placerat diam et pellentesque cursus.
                            Orci facilisis volutpat consequat, consequat enim elit ultrices habitasse. Lacus tempus amet malesuada velit tortor. Nunc arcu, enim, ullamcorper pulvinar in id sed turpis in. Facilisi dui arcu, scelerisque nibh donec porttitor. Proin quis nisi ultrices amet, lacus, varius pellentesque tellus. Orci, urna, egestas mauris sit euismod quam vitae rhoncus dignissim. Sed suscipit egestas tortor, posuere posuere adipiscing dictum nullam. 
                </p>
            </div>
            <img className='Director_Sir_Img' src={Director_Sir} alt='Director Sir'/>
        </div>
        </>
    )
}
