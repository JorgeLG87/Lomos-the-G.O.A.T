import { Link } from "react-router-dom";

import "./Navbar.css";



export default function Navbar() {
    return (
        <nav className="navbar-container">
            <ul className="items-list">
                <Link to="/"><li className="item"><p>Home</p></li></Link>
                <li className="item"><p>About Us</p></li>
                <Link to="/order-now"><li className="item"><p>Order Now</p></li></Link>
            </ul>
        </nav>
    )
}