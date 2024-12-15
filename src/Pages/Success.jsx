import { useState, useEffect } from "react";
import "../CSS/Success.css";

export default function Success() {
    const [ name, setName ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ city, setCity ] = useState("");


    useEffect(() => {
        setName(localStorage.getItem("name"));
        setAddress(localStorage.getItem("deliveryAddress"));
        setCity(localStorage.getItem("city"));
    }, []);

    console.log(name, "Name in success page");
    console.log(address, "Address in success page");

    return (
        <div className="successpage-container">
            <div className="message-container">
                <p className="title2"><span className="span-text">Payment</span></p><p className="title"> Successful!</p>
            </div>
        </div>
    )
}