import "./HomeSlidingImg.css";
import { useState } from "react";

export default function HomeSlidingImg({ slides }) {

    const [ currSlide, setCurrSlide ] = useState(slides[0]);

    return (
        <div className="main-wrapper">
            <div className="slide">
                <img name="slide" alt="Images"/>
            </div>
        </div>
    )
}