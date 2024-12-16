import "./ErrorModal.css";
import { useState } from "react";

export default function ErrorModal({ setIsOpen }) {
    // const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div className="modal-main-container-open">
            <p>Please enter required information to continue</p>
            <button className="modal-btn" type="button" onClick={() => setIsOpen(false)}>Ok</button>
        </div>
    )
}