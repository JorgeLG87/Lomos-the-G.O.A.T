//THE CSS THAT THIS COMPONENT IS CURRENTLY USING IS FROM THE FORM.CSS. HAVE TO CREATE ITS OWN CSS FILE.

import { useState, useRef, useEffect } from "react";

export default function DeliveryMethod() {

    const form = useRef();
    const [ orderType, setOrderType ] = useState("");
    const [ deliveryAddress, setDeliveryAddress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("");
    const [ completeAddress, setCompleteAddress ] = useState("");
    const [ originAddress, setOriginAddress ] = useState("89 MacArthur Ave., Garfield, NJ"); 
    const [ distance, setDistance ] = useState(null);

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
        setCompleteAddress(`${deliveryAddress}, ${city}, NJ`);
   }

   useEffect(() => {
        fetch("https://lomos-the-g-o-a-t.onrender.com/api-get-distance")
        .then(res => res.json())
        .then(response => setDistance(response))
        .catch(error => console.log(error));
   }, [completeAddress])

    useEffect(() => {
        console.log(deliveryAddress);
    }, [deliveryAddress]);

    useEffect(() => {
        console.log(city);
    }, [city])

    useEffect(() => {
        console.log(completeAddress);
    }, [completeAddress]);

    useEffect(() => {
        console.log(distance);
    }, [distance]);

    return (
        <div style={{display: "flex", flexDirection:"column", alignContent: "center", justifyContent: "center", textAlign: "center"}}>
            <div className="ordertype-container">
                <button className="pickup-order" type="button" onClick={() => setOrderType("pickup")}>Pick Up</button>
                <button className="delivery-order" type="button" onClick={() => setOrderType("delivery")}>Delivery</button>
            </div>
            <div className="form-fields">
            {orderType === "delivery" ? <form className="order-form" ref={form} onSubmit={sendEmail}>
                    <p className="delivery-charge-text">There is a delivery fee. To check how much extra will the charge be, please type in your complete address.</p>
                    <div className="personal-info">
                        <input className="name-input" type="text" placeholder="First Name" name="First Name" required></input>
    
                        <input className="lastname-input" type="text" placeholder="Last Name" name="Last Name" required></input>

                        <input className="contact-number" type="number" placeholder="Phone #" name="Phone Number" required></input>
                    </div>
                    <div className="delivery-info">
                        <input className="delivery-input" placeholder="Delivery Address" name="Delivery Address" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} required></input>

                        <input className="city-input" placeholder="City" name="City" value={city} onChange={(e) => setCity(e.target.value)} required></input>

                        <input className="state-input" placeholder="State" name="State" defaultValue="New Jersey" disabled></input>
                    </div>
                    <input className="random-number" value={randomNumber} placeholder={randomNumber} name="Random Number" hidden></input>
                    <button className="submit-button-form" type="button" onClick={handleCompleteAddress}>Ok</button>
                </form> : <form className="order-form" ref={form} onSubmit={sendEmail}>
                    <div className="personal-info">
                        <input className="name-input" type="text" placeholder="First Name" name="First Name" required></input>
    
                        <input className="lastname-input" type="text" placeholder="Last Name" name="Last Name" required></input>

                        <input className="contact-number" type="number" placeholder="Phone #" name="Phone Number" required></input>
                        <input className="random-number" value={randomNumber} placeholder={randomNumber} name="Random Number" hidden></input>
                    </div>
                    <button className="submit-button-form" type="submit">Ok</button>
                </form>}
            </div>
        </div>
    )
}