import React from 'react'
import About_Inter_Nit from './About_Inter_Nit'
import ImageSlider from '../Home/ImageSlider'
import images from '../Home/Images';
import What_We_Offer from '../Home/What_We_Offer'

const Home = () => {
  return (
    <div>
      <ImageSlider images={images}></ImageSlider>
      <About_Inter_Nit></About_Inter_Nit>
      <What_We_Offer></What_We_Offer>
    </div>
  )
}

export default Home
