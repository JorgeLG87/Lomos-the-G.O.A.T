//THE CSS THAT THIS COMPONENT IS CURRENTLY USING IS FROM THE FORM.CSS. HAVE TO CREATE ITS OWN CSS FILE.

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function DeliveryMethod({subTotal, totalQuantity, orderType, setOrderType, deliveryCharge, setDeliveryCharge, firstName, setFirstName, lastName, setLastName, phone, setPhone, street, setStreet, city, setCity}) {

    const navigate = useNavigate();
    const form = useRef();
    const [ addressField, setAddressField ] = useState(true);
    // const [ firstName, setFirstName ] = useState("");
    // const [ lastName, setLastName ] = useState("");
    // const [ phone, setPhone ] =  useState("");
    // const [ deliveryAddress, setDeliveryAddress ] = useState(localStorage.getItem("deliveryAddress") || "");
    // const [ city, setCity ] = useState(localStorage.getItem("city") || "");
    // const [ state, setState ] = useState("");
    const [ completeAddress, setCompleteAddress ] = useState("");
    const [ originAddress, setOriginAddress ] = useState("89 MacArthur Ave., Garfield, NJ"); 
    const [ distance, setDistance ] = useState(0);
    
    //API KEY
    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_6i1ihfq', 'template_xr6vg3i', form.current, '4l4HUKlF6lW_-n6UM')
            .then(
                () => {
                    console.log("Success");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    //CREATE A RANDOM NUMBER TO ASSIGN TO THE FORM. AND USE THAT NUMBER TO BE SENT WHEN THE CUSTOMER PAYS THE ORDER.
    const [ randomNumber, setRandomNumber ] = useState(null);

    const generateRandomFunction = () => {
        const min = 1; //Minimum value (inclusive)
        const max = 1000; //Maximum value (inclusive)
    
        const newRadomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomNumber(newRadomNumber);
    }
    
    useEffect(() => {
        generateRandomFunction();
    }, [])

   function handleCompleteAddress() {
        const address = `${street}, ${city}, NJ`;
        setCompleteAddress(`${street}, ${city}, NJ`);

        fetch(`https://lomos-the-g-o-a-t.onrender.com/api-get-distance?address=${address}`)
            .then(res => res.json())
            .then(response => setDistance(response.rows[0].elements[0].distance.text.split(" ")[0]))
            .catch(error => console.log(error));
   }

//    useEffect(() => {
//         if (completeAddress) {
//             fetch(`https://lomos-the-g-o-a-t.onrender.com/api-get-distance?address=${completeAddress}`)
//             .then(res => res.json())
//             .then(response => setDistance(response.rows[0].elements[0].distance.text.split(" ")[0]))
//             .catch(error => console.log(error));
//         }
//    }, [completeAddress])

   function handleLocalStorage() {
        localStorage.setItem("deliveryAddress", street);
        localStorage.setItem("city", city);
        localStorage.setItem("deliveryCharge", deliveryCharge);
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("phone", phone);
   }

   useEffect(() => {
        handleLocalStorage();
   }, [street, city, deliveryCharge]);
   

   useEffect(() => {
        console.log(distance);
        setDeliveryCharge(Number(distance)*1.5)
   }, [distance])

   useEffect(() => {
    localStorage.setItem("orderType", orderType);
   }, [orderType]);

   //CHANGE STATE FOR ERROR MESSAGE IF NO ADDRESS IS ENTERED
   function handleAddressField() {
    if (street !== "" && city !== "") {
        setAddressField(true);
    } else {
        setAddressField(false);
    }
   }


   //CONSOLE LOGGING FOR TEST PURPOSES
   

    return (
        <div className="orderform-container">
            <div className="ordertype-container">
                <button className="pickup-order" type="button" onClick={() => setOrderType("pickup")}>Pick Up</button>
                <button className="delivery-order" type="button" onClick={() => setOrderType("delivery")}>Delivery</button>
            </div>
            <p className="customer-info">Customer's Information: </p>
            <div className="form-fields">
            {orderType === "delivery" ? <form className="order-form" ref={form} onSubmit={sendEmail}>
                    <p className="delivery-charge-text">We are only delivering inside New Jersey. There is a delivery fee, please type in your complete address to check cost.</p>
                    <div className="personal-info">
                        <input className="name-input" type="text" placeholder="First Name" name="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required></input>
    
                        <input className="lastname-input" type="text" placeholder="Last Name" name="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required></input>

                        <input className="contact-number" type="number" placeholder="Phone #" name="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required></input>
                    </div>
                    <div className="delivery-info">
                        <input className="delivery-input" placeholder="Delivery Address" name="Delivery Address" value={street} onChange={(e) => setStreet(e.target.value)} required></input>

                        <input className="city-input" placeholder="City" name="City" value={city} onChange={(e) => setCity(e.target.value)} required></input>

                        <input className="state-input" placeholder="State" name="State" defaultValue="New Jersey" disabled></input>
                    </div>
                    {addressField ? null : <p className="address-error">Please enter a valid address.</p>}
                    <input className="random-number" value={randomNumber} placeholder={randomNumber} name="Random Number" hidden></input>
                    <button style={{marginTop : addressField === false ? "30px" : "50px"}} className="submit-button-form" type="button" onClick={(e) => {
                        handleAddressField()
                        handleCompleteAddress();
                        handleLocalStorage();
                        }}>Ok</button>
                </form> : <form className="order-form" ref={form} onSubmit={sendEmail}>
                    <div className="personal-info">
                        <input className="name-input" type="text" placeholder="First Name" name="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required></input>
    
                        <input className="lastname-input" type="text" placeholder="Last Name" name="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required></input>

                        <input className="contact-number" type="number" placeholder="Phone #" name="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required></input>
                        <input className="random-number" value={randomNumber} placeholder={randomNumber} name="Random Number" hidden></input>
                    </div>
                    <button style={{marginTop: "50px"}} className="submit-button-form" type="button" onClick={handleLocalStorage}>Ok</button>
                </form>}
            </div>
            <p className="subtotal">Sub-Total: ${subTotal}</p>
            { orderType === "delivery" ? <p className="delivery-charge">Delivery Charge: ${deliveryCharge}</p> : null}
            {orderType === "pickup" ? <p className="total">Total: ${Number(subTotal)}</p> : <p className="total">Total: ${(Number(subTotal)+Number(deliveryCharge)).toFixed(2)}</p>}
        </div>
    )
}