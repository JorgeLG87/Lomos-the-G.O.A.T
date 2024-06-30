import "./AboutUsCarousel.css";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function AboutUsCarousel({slides}) {
    return (
        <div className="carousel-aboutus">
            <BsArrowLeft className="left-arrow"/>
            {slides.map((slide, idx) => {
                return <img className="carousel-slide" src={slide.url} key={idx}/>
            })}
            <BsArrowRight className="right-arrow"/>
        </div>
    )
}