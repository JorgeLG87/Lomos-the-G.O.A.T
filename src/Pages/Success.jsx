import { useState, useEffect } from "react";
import "../CSS/Success.css";

export default function Success() {
    const [ name, setName ] = useState("");
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ client, setClient ] = useState({});

    useEffect(() => {
        setFirstName(localStorage.getItem("firstName"));
        setLastName(localStorage.getItem("lastName"));
        setAddress(localStorage.getItem("deliveryAddress"));
        setCity(localStorage.getItem("city"));
        setPhone(localStorage.getItem("phone"));
    }, []);


    useEffect(() => {
        setName(firstName + " " + lastName);
    }, [firstName, lastName]);

    //CREATE THE CLIENT OBJECT USING LOCALSTORAGE DATA
    useEffect(() => {
        setClient({
            name: name,
            address: address,
            city: city,
            phone: phone,
        })
    }, [ name, address, city, phone ]);

    //TESTING PURPOSES ONLY
    useEffect(() => {
        console.log(client, "Client object");
    }, [client]);
    

    return (
        <div className="successpage-container">
            <div className="message-container">
                <p className="title2"><span className="span-text">Payment</span></p><p className="title"> Successful!</p>
            </div>
        </div>
    )
}