import "./Form.css"
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext} from "../cartContext.jsx";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

import Combo from "./Combo.jsx";
import NoCombo from "./NoCombo.jsx";

export default function Form({ shoppingCart, setShoppingCart }) {

    const form = useRef();
    const navigate = useNavigate();

    const [ selected, setSelected ] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_6i1ihfq', 'template_xr6vg3i', form.current, {
                publicKey: '4l4HUKlF6lW_-n6UM',
            })
            .then(
                () => {
                    console.log("Success");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    
    const [ dateStamp, setDateStamp ] = useState(0)
    const [ secDateStamp, setSecDateStamp ] = useState(1); 

    const [ combo, setCombo] = useState(true);
    const [ comboWord, setComboWord ] = useState("Combo")

    const [lomo, setLomo] = useState([]);
    const [ quantity, setQuantity ] = useState([]);

    const [ orderType, setOrderType ] = useState("");

    const cart = useContext(CartContext);
    console.log(cart.items);
    
    const totalQuantity = (cart.items).reduce((accu, product) => accu + product.quantity,0)
    console.log(totalQuantity);


    function handleCombo() {
        setCombo(true);
    }

    function handleNotCombo() {
        setCombo(false)
    }

   function sendEmail2() {
    const content1 = document.getElementById("added-lomos").innerText;
    const content2 = document.getElementById("added-quantity").innerText;
    console.log(content1);

    const mailToLink = "mailto:jorge85_6@hotmail.com?subject=Paragraph Content&body=" + encodeURIComponent(content1);
    const a = document.createElement("a");
    a.href = mailToLink;
    document.body.appendChild(a);
    a.click()

    document.body.removeChild(a);
    console.log("Email Body", content1)
   }

    return (
        <div className="form-container">
            <div className="top-container2">
            </div>
            <div className="sideborder-container">
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
            </div>
       
            <img className="cart-icon" src="grocery-store.svg" onClick={() => navigate("/showcart")}/>
            <p className="cart-text" >({totalQuantity} items)</p>
            <div className="ordertype-container">
                <button className="pickup-order" type="button" onClick={() => setOrderType("pickup")}>Pick Up</button>
                <button className="delivery-order" type="button" onClick={() => setOrderType("delivery")}>Delivery</button>
            </div>
            <div className="choosecombo-text-container">
                <p className="title2"><span className="span-text">Choose your</span></p><p className="title-form">bite!</p>
            </div>
            <div className="form-fields">
            {orderType === "delivery" ? <form className="order-form" ref={form} onSubmit={sendEmail}>
                    <div className="personal-info">
                        <input className="name-input" type="text" placeholder="First Name" name="First Name" required></input>
    
                        <input className="lastname-input" type="text" placeholder="Last Name" name="Last Name" required></input>

                        <input className="contact-number" type="number" placeholder="Phone #" name="Phone Number" required></input>
                    </div>
                    <div className="delivery-info">
                        <input className="delivery-input" placeholder="Delivery Address" name="Delivery Address" required></input>

                        <input className="city-input" placeholder="City" name="City" required></input>

                        <input className="state-input" placeholder="State" name="State" required></input>
                    </div>
                    <button className="submit-button-form" type="submit">Send</button>
                </form> : <form className="order-form" ref={form} onSubmit={sendEmail}>
                    <div className="personal-info">
                        <input className="name-input" type="text" placeholder="First Name" name="First Name" required></input>
    
                        <input className="lastname-input" type="text" placeholder="Last Name" name="Last Name" required></input>

                        <input className="contact-number" type="number" placeholder="Phone #" name="Phone Number" required></input>
                    </div>
                    <button className="submit-button-form" type="submit">Send</button>
                </form>}
            </div>
            
            <div className="combo-btns-container">
                <p className="combo-btn" onClick={() => {
                    handleCombo();
                    setSelected("underline1");
                }} >Combo</p>
                <p className="combo-btn2" onClick={() => {
                    handleNotCombo();
                    setSelected("underline2");
                }} >Individual Items</p>
            </div>

            <div className="combo-btns-underline">
                <div className={`underline ${selected === "underline1" ? "underline1" : ""}`}></div>
                <div className={selected === "underline2" ? "underline2" : ""}></div>
            </div>

            <div className="type-container">
                {combo  ? <Combo lomo={lomo} setLomo={setLomo} quantity={quantity} setQuantity={setQuantity} dateStamp={dateStamp} setDateStamp={setDateStamp} secDateStamp={secDateStamp} setSecDateStamp={setSecDateStamp}/> : <NoCombo/>}
            </div>
            
            <div id="added-lomos" className="added-items-container">             
                {lomo.map(elem => <p name="Lomo Type">{elem}</p>)}
            </div>
            <div id="added-quantity" className="added2-item-container">
                {quantity.map(elem => <p name="Quantity">{elem}</p>)}
            </div>
            
            <div className="sideborder-right-container">
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
            </div>
        </div>
    )
}