import "./HomeSlidingImg.css";
import { useState } from "react";

export default function HomeSlidingImg({ slides }) {

    const [ currSlide, setCurrSlide ] = useState(slides[0].url);

    return (
            <div className="slide">
                <img name="slide" alt="Images" src={currSlide} className="image02"/>
            </div>
    )
}