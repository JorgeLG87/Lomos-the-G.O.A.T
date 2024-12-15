import { useState, useEffect } from "react";
import "../CSS/Success.css";
import emailjs from "@emailjs/browser";

export default function Success() {
    const [ name, setName ] = useState("");
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ orderType, setOrderType ] = useState("");
    const [ client, setClient ] = useState({});

    useEffect(() => {
        setFirstName(localStorage.getItem("firstName"));
        setLastName(localStorage.getItem("lastName"));
        setAddress(localStorage.getItem("deliveryAddress"));
        setCity(localStorage.getItem("city"));
        setPhone(localStorage.getItem("phone"));
        setOrderType(localStorage.getItem("orderType"));
    }, []);


    useEffect(() => {
        setName(firstName + " " + lastName);
    }, [firstName, lastName]);

    //CREATE THE CLIENT OBJECT USING LOCALSTORAGE DATA
    useEffect(() => {
        setClient({
            name: firstName + " " + lastName,
            address: address,
            city: city,
            phone: phone,
        })
    }, [name, address, city, phone]);

    //TESTING PURPOSES ONLY
    useEffect(() => {
        console.log(client, "Client object");
    }, [client]);
    
    useEffect(() => {
        console.log(client.name, "Client Name");
        if (client.name !== " " && client.address !== " " && client.city !== " " && client.phone !== " ") {
            emailjs.send('service_6i1ihfq', 'template_kza2k47', {
                name: client.name,
                phone: client.phone,
                address: client.address,
                city: client.city,
                orderType: orderType,
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


    return (
        <div className="successpage-container">
            <div className="message-container">
                <p className="title2"><span className="span-text">Payment</span></p><p className="title"> Successful!</p>
            </div>
        </div>
    )
}