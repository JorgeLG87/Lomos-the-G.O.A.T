// import "./Form.css";
import "./Combo.css";
import { useState } from "react";



export default function Combo({ lomo, setLomo, quantity, setQuantity, dateStamp, setDateStamp, setSecDateStamp, secDateStamp }) {

    const [error, setError] = useState(false);
    
    function handleAddItems(e) {
        e.preventDefault();
        const lomoType = document.getElementById("combolomoselect").value
        const currQuantity = document.getElementById("combolomo-quantity").value;
        if (currQuantity < 1) {
            setError(true);
        } else {
            setError(false);
            setLomo([...lomo, lomoType]);
            setQuantity([...quantity, currQuantity]);
            setDateStamp(dateStamp+1);
            setSecDateStamp(secDateStamp+1)
        }
    }

    return (
        <>
                <label className="combo-lomo-container">           
                    <select id="combolomoselect" className="combo-selection-lomo">
                        <option value="choose lomo">---Choose Lomo---</option>
                        <option value="Lomo the G.O.A.T">Lomo the G.O.A.T</option>
                        <option value="Plain">Plain</option>
                    </select>
                </label>

                <label className="combo-lomoquantity-container">
                    <input id="combolomo-quantity" className="combo-lomo-quantity" type="number" placeholder="Quantity" required/>
                </label>

                <label className="combo-size">
                    <select id="combo-size" className="size">
                        <option value="combo size">---Choose Size---</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
                
                <br/><br/>
                <label className="combo-beverage-container">
                    <select className="combo-selection-bev">
                        <option value="choose beverage">---Choose Beverage---</option>
                        <option value="pepsi">Pepsi</option>
                        <option value="coke">Coke</option>
                        <option value="orange juice">Orange Juice</option>
                    </select>
                </label>
               
                <button onClick={handleAddItems} className="combo-add" type="button"></button>
                {error ? <p className="quantity-error">Please enter a combo quantity</p> : null}
        </>
    )
}