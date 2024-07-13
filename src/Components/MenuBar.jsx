import "./MenuBar.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function MenuBar() {

    return (
        <div className="menubar-container">
            <Link to="/" style={{textDecoration:"none", color: "rgb(253, 230, 21)"}}>
                <p className="menubar-items" style={{borderTopLeftRadius:"7px", borderTopRightRadius:"7px"}}>Home</p>
            </Link>
            <Link to="/order-now" style={{textDecoration:"none", color:"rgb(253, 230, 21)"}}>
                <p className="menubar-items">Order Now</p>
            </Link>
            <Link to="/about-us" style={{textDecoration:"none", color:"rgb(253, 230, 21)"}}>
                <p className="menubar-items" style={{borderBottomLeftRadius:"7px", borderBottomRightRadius:"7px"}}>About Us</p>
            </Link>
        </div>
    )
}