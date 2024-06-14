import "./Form.css"
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext} from "../cartContext.jsx";

import Combo from "./Combo.jsx";
import NoCombo from "./NoCombo.jsx";


export default function Form({ shoppingCart, setShoppingCart }) {
    const [ dateStamp, setDateStamp ] = useState(0)
    const [ secDateStamp, setSecDateStamp ] = useState(1); 

    const [ combo, setCombo] = useState(true);
    const [ comboWord, setComboWord ] = useState("Combo")

    const [lomo, setLomo] = useState([]);
    const [ quantity, setQuantity ] = useState([]);

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

   function sendEmail() {
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


   function handleShoppingCart() {
    let currentLomo = document.getElementById("added-lomos").innertext;
    let currentSize
   }

    return (
        <div className="form-container">
            <Link to="/showcart" style={{textDecoration:"none", width:"100%"}}>
                <button className="cart-button" type="button">Cart has ({totalQuantity} items)</button>
            </Link>
            <div className="choosecombo-text-container">
                <p className="title2"><span className="span-text">Choose your bite!</span></p><p className="title-form"></p>
            </div>
            <div className="form-fields">
            <form className="order-form" action="https://formsubmit.co/jorge85_6@hotmail.com" method="POST">
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

                <button className="combo-btn" onClick={handleCombo} type="button">Combo</button>
                <button className="combo-btn2" onClick={handleNotCombo} type="button">No Combo</button>
                
                {/* <button onClick={sendEmail} className="submit-btn" type="button">Place Order</button> */}
            </form>
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
            
            
        </div>
    )
}