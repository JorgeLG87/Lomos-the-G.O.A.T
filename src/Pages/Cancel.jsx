import "../CSS/Cancel.css";
import { useNavigate } from "react-router-dom";

export default function Cancel() {

    const navigate = useNavigate();

    return (
        <div className="cancelpage-container">
            <div className="message-container">
                <p className="title2"><span className="span-text">Your order was</span></p><p className="title"> canceled.</p>
            </div>
            <p className="cancel-text">Go to the <span className="cancel-text-link" onClick={() => navigate("/order-now")}>order menu</span>.</p>
        </div>
    )
}