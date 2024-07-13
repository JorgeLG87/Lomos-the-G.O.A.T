import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Navbar.css";

import MenuBar from "./MenuBar";



export default function Navbar({ toggle, handleToggle }) {

    return (
        <nav className="navbar-container">
            <img onClick={handleToggle} id="menubar" className="menubar" src="/more.svg"/>
            { toggle ?  <MenuBar/> : null}
            <ul className="items-list">
                <div className="home-container">  
                    <Link to="/"><li className="item"><p>Home</p></li></Link>
                </div>
                <div className="aboutus-container">
                    <Link to="about-us"><li className="item"><p>About Us</p></li></Link>
                </div>
                <div className="ordernow-container">
                    <Link to="/order-now"><li className="item-ordernow"><p>Order Now</p></li></Link>
                </div>
            </ul>
        </nav>
    )
}