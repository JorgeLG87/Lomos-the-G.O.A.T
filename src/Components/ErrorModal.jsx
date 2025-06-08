import "./ErrorModal.css";
import { useState, useContext } from "react";
import { CartContext } from "../cartContext";

export default function ErrorModal({ setIsOpen }) {
    // const [ isOpen, setIsOpen ] = useState(false);
    
    const cart = useContext(CartContext);

    if (cart.items.length === 0) {
        return (
            <div className="modal-main-container-open">
                <img className="homero-ouch" src="/homeroouch.png" alt="homero"/>
                {/* <p className="modal-text-title">Oopss..</p> */}
                <p className="modal-text">Your cart is empty. Please add items in order to proceed with checkout.</p>
                <button className="modal-btn" type="button" onClick={() => setIsOpen(false)}>Ok</button>
            </div>
        )
    } else {
        return (
            <div className="modal-main-container-open">
                <img className="homero-ouch" src="/homeroouch.png" alt="homero"/>
                {/* <p className="modal-text-title">Oopss..</p> */}
                <p className="modal-text">Please add customer's information in order to proceed with checkout.</p>
                <button className="modal-btn" type="button" onClick={() => setIsOpen(false)}>Ok</button>
            </div>
        )
    }
    
}