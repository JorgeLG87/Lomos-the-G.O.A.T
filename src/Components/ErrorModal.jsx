import "./ErrorModal.css";
import { useState } from "react";

export default function ErrorModal({ setIsOpen }) {
    // const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div className="modal-main-container-open">
            <p className="modal-text-title">Oopss..</p>
            <p className="modal-text">Please enter customer's info to proceed with checkout.</p>
            <button className="modal-btn" type="button" onClick={() => setIsOpen(false)}>Ok</button>
        </div>
    )
}