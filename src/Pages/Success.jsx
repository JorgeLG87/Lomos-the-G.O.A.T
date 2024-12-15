import { useState, useEffect } from "react";
import "../CSS/Success.css";

export default function Success() {
    const [ name, setName ] = useState("");
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ city, setCity ] = useState("");

    useEffect(() => {
        setFirstName(localStorage.getItem("firstName"));
        setLastName(localStorage.getItem("lastName"));
        setAddress(localStorage.getItem("deliveryAddress"));
        setCity(localStorage.getItem("city"));
    }, []);


    useEffect(() => {
        setName(firstName + " " + lastName);
    }, []);


    //TESTING PURPOSES ONLY
    useEffect(() => {
        console.log(name, "Name in success page");
    }, [name]);
    

    return (
        <div className="successpage-container">
            <div className="message-container">
                <p className="title2"><span className="span-text">Payment</span></p><p className="title"> Successful!</p>
            </div>
        </div>
    )
}