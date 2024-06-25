import "./HomeSlidingImg.css";
import { useState, useEffect } from "react";

export default function HomeSlidingImg({ slides }) {

    const [ autoPlay, setAutoPlay ] = useState(true);
    const [ currSlide, setCurrSlide ] = useState(0);
    

    useEffect(() => {
        setTimeout(()=>{
            slideRight()
        },4000)
    });

    function slideRight() {
        if (currSlide === slides.length-1) {
            setCurrSlide(0);
        } else {
            setCurrSlide(currSlide+1);
        }
    }

    return (
            <div className="slide">
                <img name="slide" alt="Images" src={slides[currSlide].url} className="image02"/>
            </div>
    )
}