import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"

import "./AboutUsCarousel.css";
import { useState, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function AboutUsCarousel({slides}) {

    const [ autoPlay, setAutoPlay ] = useState(true);
    const [ currSlide, setCurrSlide ] = useState(0);
    

    useEffect(() => {
        setTimeout(()=>{
            slideRight()
        },2500)
    });

    function slideRight() {
        if (currSlide === slides.length-1) {
            setCurrSlide(0);
        } else {
            setCurrSlide(currSlide+1);
        }
    }

    function slideLeft() {
        if (currSlide === slides[0]) {
            setCurrSlide(slides.length-1);
        } else {
            setCurrSlide(currSlide-1);
        }
    }

    return (
        <div className="carousel-aboutus">
            <BsArrowLeft className="left-arrow" onClick={slideLeft}/>
            <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"100%", height:"100%", borderRadius:"10px"}}>
                <img className="carousel-slide1" src={slides[currSlide].url}/>
            </div>
            <BsArrowRight className="right-arrow" onClick={slideRight}/>
        </div>
    )
}