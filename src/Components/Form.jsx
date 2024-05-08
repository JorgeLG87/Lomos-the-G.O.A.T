import "./Form.css"
import { useState } from "react";

import Combo from "./Combo.jsx";
import NoCombo from "./NoCombo.jsx";

export default function Form() {

    const [ combo, setCombo] = useState(true);
    const [ comboWord, setComboWord ] = useState("Combo")

    const [lomo, setLomo] = useState("");

    function handleCombo() {
        setCombo(!combo);
        if (combo === true) {
            setComboWord("Combo")
        } else {
            setComboWord("No Combo")
        }
    }

    return (
        <div className="form-container">
            <div className="menu-container">
                <img className="menu" src="src/assets/menu.png"/>
            </div>
            <form className="order-form">
                <label className="firstname-container">
                    First Name:
                    <input className="name-input" type="text" required></input>
                </label>
                <label className="lastname-container">
                    Last Name:
                    <input className="lastname-input" type="text" required></input>
                </label>
                <label className="delivery-container">
                    Delivery Address:
                    <input className="delivery-input" required></input>
                </label>
                <label className="city-container">
                    City:
                    <input className="city-input" required></input>
                </label>
                <label className="state-container">
                    State:
                    <input className="state-input" required></input>
                </label>
                <label className="contact-container">
                    Contact Number:
                    <input className="contact-number" type="number" required></input>
                </label>
                {/* <div className="ordermenu-container"> */}
                <button className="combo-btn" onClick={handleCombo} type="button">{comboWord}</button>
                <p className="choosecombo-text">Choose your combo..</p>
                <div className="type-container">
                {combo ? <Combo/> : <NoCombo/>}
                </div>
                <button className="submit-btn" type="submit">Place Order</button>
            </form>
        </div>
    )
}