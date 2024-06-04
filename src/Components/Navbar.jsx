import { Link } from "react-router-dom";

import "./Navbar.css";



export default function Navbar() {
    return (
        <nav className="navbar-container">
            {/* <img className="logo" src="/thegoat.JPG"/> */}
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