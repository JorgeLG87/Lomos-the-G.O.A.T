import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import './App.css'
import Form from "./Components/Form.jsx";
import Navbar from "./Components/Navbar.jsx";
import SocialMedia from "./Components/SocialMedia.jsx";
// import QueEsLomo from "./Components/QueEsLomo.jsx";
import Home from "./Components/Home.jsx";
// import AboutUs from "./Components/AboutUs.jsx"

function App() {

  const [toggleForm, setToggleForm] = useState(false);

  function handleToggleForm(){
    setToggleForm(!toggleForm);
  }
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/*" element={<Home/>}/>
          <Route path="/order-now" element={<Form/>}/>
        </Routes>
      </Router>
      <SocialMedia/>
    </>
  )
}

export default App
