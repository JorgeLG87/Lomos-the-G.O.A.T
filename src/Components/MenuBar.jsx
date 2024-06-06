import "./MenuBar.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function MenuBar() {

    

    // useEffect(() => {
    //     let handler = (e) => {
    //         // if (menuRef.current.contains(e.target)) {
    //         //     setToggle(false);
    //         //     console.log(menuRef.current);
    //         // }
    //         console.log(menuRef.current)
    //     };

    //     document.addEventListener('mousedown', handler);
    // });

    return (
        <div className="menubar-container">
            <Link to="/" style={{textDecoration:"none", color: "yellow"}}>
                <p className="menubar-items" style={{borderTopLeftRadius:"7px", borderTopRightRadius:"7px"}}>Home</p>
            </Link>
            <Link to="/order-now" style={{textDecoration:"none", color:"yellow"}}>
                <p className="menubar-items">Order Now</p>
            </Link>
            <Link to="/" style={{textDecoration:"none", color:"yellow"}}>
                <p className="menubar-items" style={{borderBottomLeftRadius:"7px", borderBottomRightRadius:"7px"}}>About Us</p>
            </Link>
        </div>
    )
}