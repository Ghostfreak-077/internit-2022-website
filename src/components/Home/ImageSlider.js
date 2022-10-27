import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home/ImageSlider.css";
import React from 'react'

const ImageSlider = ({images}) => {

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2200,
    };

    return (
        <>
        <div className="imgslider">
            <h1 className="InterNIT">INTER NIT 2022</h1> 
            <h1 className="nit_silchar">NIT SILCHAR</h1>
            <Slider className="slide mb-5" {...settings}>
                {
                    images.map((item) => (
                        <div className="sliderDiv" key={item.id}>
                            <p className="TextForRotation">{item.text}</p>  
                            <img src={item.src} alt={item.alt} />
                        </div>
                    ))
                }
            </Slider>
        </div>
        </>
    )
}
export default ImageSlider;
