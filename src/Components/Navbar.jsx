import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Navbar.css";

import MenuBar from "./MenuBar";



export default function Navbar({ toggle, handleToggle }) {

    return (
        <nav className="navbar-container">
            {/* <div className="menubar-and-items-container"> */}
            <img onClick={handleToggle} id="menubar" className="menubar" src="/menu3.png"/>
            { toggle ?  <MenuBar/> : null}
            {/* </div> */}
            <ul className="items-list">
                <div className="home-container">  
                    <Link to="/"><li className="item"><p>Home</p></li></Link>
                </div>
                <div className="aboutus-container">
                    <li className="item"><p>About Us</p></li>
                </div>
                <div className="ordernow-container">
                    <Link to="/order-now"><li className="item-ordernow"><p>Order Now</p></li></Link>
                </div>
            </ul>
        </nav>
    )
}