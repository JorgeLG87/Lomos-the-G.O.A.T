import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { Link } from "react-router-dom";

import './App.css'
import Form from "./Components/Form.jsx";
import Navbar from "./Components/Navbar.jsx";
import SocialMedia from "./Components/SocialMedia.jsx";
import Home from "./Components/Home.jsx";


function App() {
  const slides = [
    { url: "/Buenos-Aires.jpg", title: "Buenos Aires"},
    {  url: "/lomito-argentino.jpeg", title: "Lomo"}
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
      <Router>
        <Link to="/">
          <img className="logo" src="/thegoat.JPG"/>
        </Link>
        <Navbar handleToggle={handleToggle} toggle={toggle}/>
        <Routes>
          <Route path="/" element={<Home slides={slides}/>}/>
          <Route path="/*" element={<Home/>}/>
          <Route path="/order-now" element={<Form/>}/>
        </Routes>
      </Router>
      <SocialMedia/>
    </div>
  )
}

export default App
