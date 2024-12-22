import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Success.css";
import emailjs from "@emailjs/browser";
import { CartContext } from "../cartContext";

export default function Success() {
    const navigate = useNavigate();
    const cart = useContext(CartContext);
    const [ name, setName ] = useState("");
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ orderType, setOrderType ] = useState("");
    const [ paymentVerified, setPaymentVerified ] = useState(false);
    const [ clientReady, setClientReady ] = useState(false);
    const [ client, setClient ] = useState({});
    const [ deliveryTime, setDeliveryTime ] = useState("");

    //MAP THE CART ITEMS TO AN ARRAY OF OBJECTS
    const cartItems = cart.items.map((item) => `- ${item.name} (Quantity: ${item.quantity}) Special Instructions: Beverage: ${item.beverage}, Ketchup: ${item.ketchupInstruction}, Lettuce: ${item.lettuceInstruction}, Tomatoe: ${item.tomatoeInstruction}, Mayo: ${item.mayoInstruction}, Mustard: ${item.mustardInstruction}, Salt: ${item.saltInstruction}`).join("\n");

    //VERIFY THAT WE HAVE A SESSION ID IN THE URL ELSE REDIRECT TO HOME PAGE
    // useEffect(() => {
    //     const sessionId = new URLSearchParams(window.location.search).get("session_id");
    //     if (!sessionId) {
    //         navigate("/");
    //     }
    
        // VERIFY PAYMENT STATUS
    //     fetch(`https://lomosthegoat.onrender.com/verify-payment?session_id=${sessionId}`)
    //     .then(res => res.json())
    //     .then(response => {
    //         if (response.success) {
    //             setPaymentVerified(true);
    //         } else {
    //             navigate("/");
    //         }
    //     })
    // }, [navigate])


    useEffect(() => {
        setFirstName(localStorage.getItem("firstName"));
        setLastName(localStorage.getItem("lastName"));
        setAddress(localStorage.getItem("deliveryAddress"));
        setCity(localStorage.getItem("city"));
        setPhone(localStorage.getItem("phone"));
        setOrderType(localStorage.getItem("orderType"));
        setDeliveryTime(localStorage.getItem("deliveryTime"));
    }, []);


    useEffect(() => {
        setName(firstName + " " + lastName);
    }, [firstName, lastName]);

    //CREATE THE CLIENT OBJECT USING LOCALSTORAGE DATA
    useEffect(() => {
        if (firstName &&  lastName && address && city && phone) {
            setClient({
                name: firstName + " " + lastName,
                address: address,
                city: city,
                phone: phone,
            });
        };
        setClientReady(true);
    }, [firstName, lastName, address, city, phone]);

  
    
    useEffect(() => {
        console.log(client.name, "Client Name");
        if (clientReady && paymentVerified) {
            emailjs.send('service_6i1ihfq', 'template_kza2k47', {
                name: client.name,
                phone: client.phone,
                address: client.address,
                city: client.city,
                orderType: orderType,
                cartItems: cartItems,
            }, '4l4HUKlF6lW_-n6UM')
            .then(
                () => {
                    console.log("Success");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        }
    }, [client.name]);

    //TESTING PURPOSES
    useEffect(() => {
        console.log(cart, "Cart");
    }, [ cart ]);

    useEffect(() => {
        console.log(cartItems, "Cart Items");
    }, [cartItems]);

   

    return (
        <div className="successpage-container">
            <div className="message-container">
                <p className="title2"><span className="span-text">Payment</span></p><p className="title"> Successful!</p>
                <p className="confirmation-text">We've received your order and working on it...</p>
                <p>Please give us {deliveryTime} min. to deliver your order. Thank you</p>
            </div>
        </div>
    )
}