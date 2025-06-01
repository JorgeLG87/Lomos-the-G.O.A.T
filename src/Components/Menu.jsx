import "./Menu.css"

import { useState } from "react"

export default function Menu() {
    const [ currSlide, setCurrSlide ] = useState(0);

    const imgs = [
        { url:"/food-menu.png", title:"first-foodmenu"},
        {url:"/choripan.png", title:"first-foodmenu"},
    ]

    function slideRight(currSlide) {
        if (currSlide === 1) {
            setCurrSlide(0);
        } else {
            setCurrSlide(currSlide+1);
        }
    }

    function slideLeft(currSlide) {
        if (currSlide === 0) {
            setCurrSlide((imgs.length)-1)
        } else {
            setCurrSlide(currSlide-1)
        }
    }

    return (
        <div className="menu-main-container">
            <img className="left-menu-arrow" src="back.png" alt="left arrow" onClick={() => slideLeft(currSlide)} />
            <img className="first-foodmenu" src={imgs[currSlide].url} alt="food menu" />
            {/* <img className="choripan" src="/choripan.png" alt="choripan sandwich" /> */}
            <img className="right-menu-arrow" src="next.png" alt="right arrow" onClick={() => slideRight(currSlide)}/>
        </div>
    )
}