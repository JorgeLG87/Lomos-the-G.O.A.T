import "./Menu.css"

import { useState } from "react"
import { useSwipeable } from "react-swipeable";

export default function Menu() {
    const [ currSlide, setCurrSlide ] = useState(0);

    const imgs = [
        { url:"/foodmenu1.png", title:"first-foodmenu"},
        { url:"/foodmenu2.png", title:"second-foodmenu" },
        { url:"/foodmenu3.png", title:"third-foodmenu" },
    ]

    function slideRight(currSlide) {
        if (currSlide === (imgs.length - 1)) {
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

    const swipeHandlers = useSwipeable({
        onSwipedLeft: (e) => {
            slideRight(currSlide);
        },
        onSwipedRight: (e) => {
            slideLeft(currSlide);
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
        trackTouch: true,
        delta: 10
    });

    return (
        <div {...swipeHandlers} className="menu-main-container">
            <img className="left-menu-arrow" src="left.png" alt="left arrow" onClick={() => slideLeft(currSlide)} />
            <img className="first-foodmenu" src={imgs[currSlide].url} alt="food menu" />
            <img className="right-menu-arrow" src="right.png" alt="right arrow" onClick={() => slideRight(currSlide)}/>
        </div>
    )
}