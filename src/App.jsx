import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import './App.css'
import Form from "./Components/Form.jsx";
import Navbar from "./Components/Navbar.jsx";
import SocialMedia from "./Components/SocialMedia.jsx";
import QueEsLomo from "./Components/QueEsLomo.jsx";

function App() {

  const [toggleForm, setToggleForm] = useState(false);

  function handleToggleForm(){
    setToggleForm(!toggleForm);
  }
  return (
    <>
    <Navbar/>
    <QueEsLomo/>
    <div className="entire-body">
      <p>LOMOS THE G.O.A.T</p>
      <button id="btn-toggleform" type="button" onClick={handleToggleForm}>Order Now</button>
      <br/><br/>
      {toggleForm ? <Form/> : null}

      <br/>
      <br/>
      <br/>
      <br/>

    </div>
    <SocialMedia/>
    </>
  )
}

export default App
