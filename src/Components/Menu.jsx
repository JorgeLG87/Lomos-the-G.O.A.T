import "./Menu.css"

import { useState } from "react"

export default function Menu() {
    const [ currSlide, setCurrSlide ] = useState(0);

    const imgs = [
        { url:"/foodmenu1.png", title:"first-foodmenu"},
        {url:"/foodmenu2.png", title:"first-foodmenu"},
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
            <img className="left-menu-arrow" src="left.png" alt="left arrow" onClick={() => slideLeft(currSlide)} />
            <img className="first-foodmenu" src={imgs[currSlide].url} alt="food menu" />
            <img className="right-menu-arrow" src="right.png" alt="right arrow" onClick={() => slideRight(currSlide)}/>
        </div>
    )
}