import './App.css';


import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { Link } from "react-router-dom";

// Import Pages
import Success from "./Pages/Success.jsx";
import Cancel from "./Pages/Cancel.jsx";

import AboutUs from './Components/AboutUs.jsx';
import Form from "./Components/Form.jsx";
import Navbar from "./Components/Navbar.jsx";
import SocialMedia from "./Components/SocialMedia.jsx";
import Home from "./Components/Home.jsx";
import CartProvider from './cartContext.jsx';
import ShowCart from './Components/ShowCart.jsx';
import AboutUsCarousel from './Components/AboutUsCarousel.jsx';

// Import Store Products and Functions to obtain specific prices
import { storeProducts, getPriceSmall, getPriceMedium, getPriceLarge, getProductData } from './storeProducts.jsx'; 


function App() {

  //Shopping Cart List and Function to handleShoppingCart
  const [ shoppingCart, setShoppingCart ] = useState([]);

  
  const slides = [
    { url: "/Buenos-Aires.jpg", title: "Buenos Aires"},
    {  url: "/Bariloche.jpeg", title: "Bariloche"},
    { url: "/TeatrodelBicentenario.jpg", title: "Teatro del Bicentenario" },
    { url: "/cataratas-Iguazu.jpg", title: "Cataratas del Iguazu"}
  ]

  const aboutUsSlides = [
    { url: "/team1.jpg", title:"Team hands"},
    { url: "/team2.jpg", title: "Team posing for photo"},
    { url: "/team3.webp", title: "Team in the kitchen"}
  ]

  const [toggleForm, setToggleForm] = useState(false);

  const [ toggle, setToggle ] = useState(false);

  function handleToggleForm(){
    setToggleForm(!toggleForm);
  }

  function handleToggle(e) {
    setToggle(!toggle);
  }

  function closeMenuBar() {
    if (toggle) {
      setToggle(false);
    }
  }

  return (
    <div className="dropdown" onClick={closeMenuBar}>
      <CartProvider>
      <Router>
        <Link to="/">
          <img className="logo" src="/thegoat.JPG"/>
        </Link>
        <Navbar handleToggle={handleToggle} toggle={toggle}/>
        <Routes>
          <Route path="/" element={<Home slides={slides}/>}/>
          <Route path="/*" element={<Home/>}/>
          <Route path="/order-now" element={<Form shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>}/>
          <Route path="/showcart" element={<ShowCart/>}/>
          <Route path="/about-us" element={<AboutUs slides={aboutUsSlides} AboutUsCarousel={AboutUsCarousel}/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/cancel" element={<Cancel/>}/>
        </Routes>
        <footer>
          <SocialMedia/>
        </footer>
      </Router>
      {/* <div className="mother-container-socialmedia"> */}
      {/* </div> */}
      </CartProvider>
    </div>
  )
}

export default App
