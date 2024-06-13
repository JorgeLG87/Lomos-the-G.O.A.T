// import "./Form.css";
import "./Combo.css";
import { useState, useContext } from "react";
import { CartContext } from "../cartContext";




export default function Combo({ lomo, setLomo, quantity, setQuantity, dateStamp, setDateStamp, setSecDateStamp, secDateStamp }) {

    const [error, setError] = useState(false);

    const cart = useContext(CartContext);
    
    
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
        <div className="mother-container">
                {/* <label className="combo-lomo-container">           
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
                {error ? <p className="quantity-error">Please enter a combo quantity</p> : null} */}
                <div className="main-container">
                <div className="title-span-container">
                    <p className="title2"><span className="span-text">G.O.A.T</span></p><p className="title">Combo</p>
                </div>
                <div className="sub-container">
                    <div className="small">
                        <p className="text">Small</p>
                        <div className="icons">
                            <img className="icon-item" src="/sandwich.png"/>
                            <img className="icon-item" src="/fries.png"/>
                            <img className="icon-item" src="/soda.png"/>
                        </div>
                        <select id="bev-type1" className="beverage-type">
                            <option value="choose-beverage">-----Choose Beverage-----</option>
                            <option value="Coca Cola">Coca Cola</option>
                            <option value="Pepsi">Pepsi</option>
                            <option value="Sprite">Sprite</option>
                        </select>
                        <button onClick={() => cart.addOneToCart("1")} className="add" type="button">Add To Cart</button>
                    </div>

                    <div className="medium">
                        <p className="text">Medium</p>
                        <div className="icons">
                            <img className="icon-item" src="/sandwich.png"/>
                            <img className="icon-item" src="/fries.png"/>
                            <img className="icon-item" src="/soda.png"/>
                        </div>
                        <select id="bev-type2" className="beverage-type">
                            <option value="choose-beverage">-----Choose Beverage-----</option>
                            <option value="Coca Cola">Coca Cola</option>
                            <option value="Pepsi">Pepsi</option>
                            <option value="Sprite">Sprite</option>
                        </select>
                        <button onClick={() => cart.addOneToCart("2")} className="add" type="button">Add To Cart</button>
                    </div>

                    <div className="large">
                        <p className="text">Large</p>
                        <div className="icons">
                            <img className="icon-item" src="/sandwich.png"/>
                            <img className="icon-item" src="/fries.png"/>
                            <img className="icon-item" src="/soda.png"/>
                        </div>
                        <select id="bev-type3" className="beverage-type">
                            <option value="choose-beverage">-----Choose Beverage-----</option>
                            <option value="Coca Cola">Coca Cola</option>
                            <option value="Pepsi">Pepsi</option>
                            <option value="Sprite">Sprite</option>
                        </select>
                        <button onClick={() => cart.addOneToCart("3")} className="add" type="button">Add To Cart</button>
                    </div>

                </div>
                </div>

                <div className="main-container2">
                <p className="title2"><span className="span-text">Plain</span></p><p className="title">Combo</p>
                <div className="sub-container">
                    <div className="small">
                        <p className="text">Small</p>
                        <div className="icons">
                            <img className="icon-item" src="/sandwich.png"/>
                            <img className="icon-item" src="/fries.png"/>
                            <img className="icon-item" src="/soda.png"/>
                        </div>
                        <select id="bev-type4" className="beverage-type">
                            <option value="choose-beverage">-----Choose Beverage-----</option>
                            <option value="Coca Cola">Coca Cola</option>
                            <option value="Pepsi">Pepsi</option>
                            <option value="Sprite">Sprite</option>
                        </select>
                        <button onClick={() => cart.addOneToCart("4")} className="add" type="button">Add To Cart</button>
                    </div>

                    <div className="medium">
                        <p className="text">Medium</p>
                        <div className="icons">
                            <img className="icon-item" src="/sandwich.png"/>
                            <img className="icon-item" src="/fries.png"/>
                            <img className="icon-item" src="/soda.png"/>
                        </div>
                        <select id="bev-type5" className="beverage-type">
                            <option value="choose-beverage">-----Choose Beverage-----</option>
                            <option value="Coca Cola">Coca Cola</option>
                            <option value="Pepsi">Pepsi</option>
                            <option value="Sprite">Sprite</option>
                        </select>
                        <button onClick={() => cart.addOneToCart("5")} className="add" type="button">Add To Cart</button>
                    </div>

                    <div className="large">
                        <p className="text">Large</p>
                        <div className="icons">
                            <img className="icon-item" src="/sandwich.png"/>
                            <img className="icon-item" src="/fries.png"/>
                            <img className="icon-item" src="/soda.png"/>
                        </div>
                        <select id="bev-type6" className="beverage-type">
                            <option value="choose-beverage">-----Choose Beverage-----</option>
                            <option value="Coca Cola">Coca Cola</option>
                            <option value="Pepsi">Pepsi</option>
                            <option value="Sprite">Sprite</option>
                        </select>
                        <button onClick={() => cart.addOneToCart("6")} className="add" type="button">Add To Cart</button>
                    </div>

                </div>
                </div>

                
        </div>
    )
}