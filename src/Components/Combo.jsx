// import "./Form.css";
import "./Combo.css";
import { useState } from "react";


export default function Combo() {

    const [lomo, setLomo] = useState([]);
    const [ quantity, setQuantity ] = useState([]);
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
        }
    }

    console.log(lomo);

    return (
        <>
                <label className="combo-lomo-container">
                    Choose your type:
                    <select id="combolomoselect" className="combo-selection">
                        <option value="Lomo the G.O.A.T">Lomo the G.O.A.T</option>
                        <option value="Plain">Plain</option>
                    </select>
                </label>
                <label className="combo-lomoquantity-container">
                    Combo Quantity:
                    <input id="combolomo-quantity" className="combo-lomo-quantity" type="number" required/>
                </label>
                <label className="combo-size">
                    Combo Size:
                    <select id="combo-size" className="size">
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
                
                <br/><br/>
                <label className="combo-beverage-container">
                    Beverage:
                    <select className="combo-selection">
                        <option value="pepsi">Pepsi</option>
                        <option value="coke">Coke</option>
                        <option value="orange juice">Orange Juice</option>
                    </select>
                </label>
                <label className="combo-french-fries">
                    French Fries:
                    <select className="combo-selection">
                        <option value="yes">Yes</option>
                        <option value="none">------None------</option>
                    </select>
                </label>
                <button onClick={handleAddItems} className="combo-add" type="button"></button>
                {error ? <p className="quantity-error">Please enter a combo quantity</p> : null}
                <div className="added-items-container">             
                    {lomo.map(elem => <p>{elem}</p>)}
                </div>
                <div className="added2-item-container">
                    {quantity.map(elem => <p>{elem}</p>)}
                </div>
        </>
    )
}