import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar-container">
            <ul className="items-list">
                <li className="item"><p>Home</p></li>
                <li className="item"><p>About Us</p></li>
                <li className="item"><p>Order Now</p></li>
            </ul>
        </nav>
    )
}