import "./Form.css"
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext} from "../cartContext.jsx";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

// COMPONENTS
import Combo from "./Combo.jsx";
import NoCombo from "./NoCombo.jsx";
import Menu from "./Menu.jsx";

export default function Form({ shoppingCart, setShoppingCart }) {
    // const form = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        // console.log(window.screenY);
       }, []);

    const [ selected, setSelected ] = useState("");
    const [ screenHight, setScreenHight ] = useState("");

    //CREATE A RANDOM NUMBER TO ASSIGN TO THE FORM. AND USE THAT NUMBER TO BE SENT WHEN THE CUSTOMER PAYS THE ORDER.
    // const [ randomNumber, setRandomNumber ] = useState(null);

    // const generateRandomFunction = () => {
    //     const min = 1; //Minimum value (inclusive)
    //     const max = 1000; //Maximum value (inclusive)

    //     const newRadomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    //     setRandomNumber(newRadomNumber);
    // }

    // useEffect(() => {
    //     generateRandomFunction();
    // }, [])


    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs
    //         .sendForm('service_6i1ihfq', 'template_xr6vg3i', form.current, '4l4HUKlF6lW_-n6UM')
    //         .then(
    //             () => {
    //                 console.log("Success");
    //             },
    //             (error) => {
    //                 console.log('FAILED...', error.text);
    //             },
    //         );
    // };
    
    const [ dateStamp, setDateStamp ] = useState(0)
    const [ secDateStamp, setSecDateStamp ] = useState(1); 

    const [ combo, setCombo] = useState(true);
    const [ comboWord, setComboWord ] = useState("Combo")

    const [lomo, setLomo] = useState([]);
    const [ quantity, setQuantity ] = useState([]);

    // const [ orderType, setOrderType ] = useState("");

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
        <div className="form-container" >
            <div className="top-container2">
                <Menu />
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
            <div className="choosecombo-text-container">
                <p className="title2"><span className="span-text-form">Choose your</span></p><p className="title-form">bite!</p>
            </div>
            <div className="combo-btns-container">
                <p className="combo-btn" onClick={() => {
                    handleCombo();
                    setSelected("underline1");
                    // setScreenHight("combo");
                }} >Combo</p>
                <p className="combo-btn2" onClick={() => {
                    handleNotCombo();
                    setSelected("underline2");
                    // setScreenHight("individual items")
                }} >Individual Items</p>
            </div>

            <div className="combo-btns-underline">
                <div className={`underline ${selected === "underline1" ? "underline1" : ""}`}></div>
                <div className={`underline ${selected === "underline2" ? "underline2" : ""}`}></div>
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

            {/* <button className="checkout-btn" type="button" onClick={() => navigate("/showcart")}>Checkout</button> */}
            
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

            <img className="homero-menu" src="/homeromenu.png" alt="homero simpson" onClick={() => {
              navigate("/showcart");
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "auto"});
              }, 100);
            }} />
        </div>
    )
}