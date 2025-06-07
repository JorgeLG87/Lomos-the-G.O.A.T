
import "./Combo.css";
import { useState, useContext } from "react";
import { CartContext } from "../cartContext";
import { useNavigate } from "react-router-dom";



export default function Combo({ lomo, setLomo, quantity, setQuantity, dateStamp, setDateStamp, setSecDateStamp, secDateStamp }) {

    const [error, setError] = useState(false);
    const [ combo1, setCombo1 ] = useState(0);
    const [ bevValid1, setBevValid1 ] = useState(false); 
    const [ bevValid2, setBevValid2 ] = useState(false); 
    const [ bevValid3, setBevValid3 ] = useState(false); 
    const [ bevValid4, setBevValid4 ] = useState(false); 
    const [ bevValid5, setBevValid5 ] = useState(false); 
    const [ bevValid6, setBevValid6 ] = useState(false); 
    const navigate = useNavigate();

    const cart = useContext(CartContext);
    
    // const [ click, setClick ] = useState(false)
    // const [ selectedValue, setSelectedValue ] = useState(null);
   
    // const handleRadioClicks = (value) => {
    //     if (selectedValue === value) {
    //         setSelectedValue(null);
    //     } else {
    //         setSelectedValue(value);
    //     }
    // }
    
    // function handleAddItems(e) {
    //     e.preventDefault();
    //     const lomoType = document.getElementById("combolomoselect").value
    //     const currQuantity = document.getElementById("combolomo-quantity").value;
    //     if (currQuantity < 1) {
    //         setError(true);
    //     } else {
    //         setError(false);
    //         setLomo([...lomo, lomoType]);
    //         setQuantity([...quantity, currQuantity]);
    //         setDateStamp(dateStamp+1);
    //         setSecDateStamp(secDateStamp+1)
    //     }
    // }

    // function sameIdQuantity(id) {
    //    let test= (cart.items).reduce((accu, item) => item.id === id, 0);
    //    console.log(test,"sameIdQuantity");

    // }


    return (
        <div className="mother-container">
                <div className="main-container">
                    <div className="title-span-container">
                        <p className="title2"><span className="span-text">G.O.A.T</span></p><p className="title">Combo</p>
                    </div>
                    <div className="sub-container">
                        <div className="large">
                            <p className="text">Includes</p>
                            <div className="icons">
                                <img className="icon-item" src="/sandwich1.svg"/>
                                <img className="icon-item" src="/french-fries1.svg"/>
                                <img className="icon-item" src="/cola1.svg"/>
                            </div>
                            <select id="bev-typeprice_1QyHXlAspxlK0TBsBq7lTKF3" className="beverage-type">
                                <option value="">-----Choose Beverage-----</option>
                                <option value="Coca Cola">Coca Cola</option>
                                <option value="Pepsi">Pepsi</option>
                                <option value="Sprite">Sprite</option>
                                <option value="Fanta">Fanta</option>
                            </select>
                            <br></br>
                            <p style={{fontFamily: "Barlow semi condensed"}}>Special Instructions</p>
                            <div className="special-instructions">
                                <div>
                                    <input type="checkbox" id="lettuceprice_1QyHXlAspxlK0TBsBq7lTKF3" value="No Lettuce"/>
                                    <label className="checkbox-label" htmlFor="lettuce3">No Lettuce</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="tomatoeprice_1QyHXlAspxlK0TBsBq7lTKF3" value="No Tomatoe"/>
                                    <label className="checkbox-label" htmlFor="tomatoe3">No Tomatoe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="saltprice_1QyHXlAspxlK0TBsBq7lTKF3" value="No Salt"/>
                                    <label className="checkbox-label" htmlFor="salt3">No Salt</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mayoprice_1QyHXlAspxlK0TBsBq7lTKF3" value="No Mayo"/>
                                    <label className="checkbox-label" htmlFor="mayo3">No Mayo</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="ketchuprice_1QyHXlAspxlK0TBsBq7lTKF3" value="No Ketchup"/>
                                    <label className="checkbox-label" htmlFor="ketchup3">No Ketchup</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mustardprice_1QyHXlAspxlK0TBsBq7lTKF3" value="No Mustard"/>
                                    <label className="checkbox-label" htmlFor="mustard3">No Mustard</label>
                                </div>
                            </div>
                            <p className="add-ons-title">Add-Ons</p>
                            <div className="add-ons">
                                <div>
                                    <input type="checkbox" id="extrasteakprice_1QyHXlAspxlK0TBsBq7lTKF3" value="Extra Steak"/>
                                    <label className="checkbox-label" htmlFor="steak">Extra Steak (+2)</label>
                                </div>
                                <div>
                                    <input type="checkbox"id="cheeseprice_1QyHXlAspxlK0TBsBq7lTKF3" value="Extra Cheese"/>
                                    <label className="checkbox-label" htmlFor="cheese">Extra Cheese (+1)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="aguacateprice_1QyHXlAspxlK0TBsBq7lTKF3" value="Aguacate Mayo"/>
                                    <label className="checkbox-label" htmlFor="aguacate mayo">Aguacate Mayo (+1)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mushroomprice_1QyHXlAspxlK0TBsBq7lTKF3" value="Mushroom"/>
                                    <label className="checkbox-label" htmlFor="mushroom">Mushroom (+1.5)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="onionprice_1QyHXlAspxlK0TBsBq7lTKF3" value="Onion"/>
                                    <label className="checkbox-label" htmlFor="onion">Onions (+1.5)</label>
                                </div>
                            </div>
                            {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="price_1QyHXlAspxlK0TBsBq7lTKF3").length}</p> : null}
                            {bevValid3 ? <p className="bev-error">Please choose a beverage type</p> : null}
                            <button onClick={() => {
                                document.getElementById("bev-typeprice_1QyHXlAspxlK0TBsBq7lTKF3").value ? cart.addOneToCart("price_1QyHXlAspxlK0TBsBq7lTKF3") : setBevValid3(true);
                                document.getElementById("bev-typeprice_1QyHXlAspxlK0TBsBq7lTKF3").value ? setBevValid3(false) : null
                                }} className="add" type="button">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div className="main-container2">
                <p className="title2"><span className="span-text">Classic</span></p><p className="title">Combo</p>
                <div className="sub-container">
                    <div className="small">
                        <p className="text">Includes</p>
                        <div className="icons">
                            <img className="icon-item" src="/sandwich1.svg"/>
                            <img className="icon-item" src="/french-fries1.svg"/>
                            <img className="icon-item" src="/cola1.svg"/>
                        </div>
                        <select id="bev-typeprice_1RQJwHAspxlK0TBsIlDDDfja" className="beverage-type">
                            <option value="">-----Choose Beverage-----</option>
                            <option value="Coca Cola">Coca Cola</option>
                            <option value="Pepsi">Pepsi</option>
                            <option value="Sprite">Sprite</option>
                            <option value="Fanta">Fanta</option>
                        </select>
                        <br></br>
                            <p style={{fontFamily: "Barlow semi condensed"}}>Special Instructions</p>
                            <div className="special-instructions">
                                <div>
                                    <input type="checkbox" id="lettuceprice_1RQJwHAspxlK0TBsIlDDDfja" value="No Lettuce"/>
                                    <label className="checkbox-label" htmlFor="lettuce4">No Lettuce</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="tomatoeprice_1RQJwHAspxlK0TBsIlDDDfja" value="No Tomatoe"/>
                                    <label className="checkbox-label" htmlFor="tomatoe4">No Tomatoe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="saltprice_1RQJwHAspxlK0TBsIlDDDfja" value="No Salt"/>
                                    <label className="checkbox-label" htmlFor="salt4">No Salt</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mayoprice_1RQJwHAspxlK0TBsIlDDDfja" value="No Mayo"/>
                                    <label className="checkbox-label" htmlFor="mayo4">No Mayo</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="ketchuprice_1RQJwHAspxlK0TBsIlDDDfja" value="No Ketchup"/>
                                    <label className="checkbox-label" htmlFor="ketchup4">No Ketchup</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mustardprice_1RQJwHAspxlK0TBsIlDDDfja" value="No Mustard"/>
                                    <label className="checkbox-label" htmlFor="mustard4">No Mustard</label>
                                </div>
                            </div>
                            <p className="add-ons-title">Add-Ons</p>
                            <div className="add-ons">
                                <div>
                                    <input type="checkbox" id="extrasteakprice_1RQJwHAspxlK0TBsIlDDDfja" value="Extra Steak"/>
                                    <label className="checkbox-label" htmlFor="steak2">Extra Steak (+2)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="cheeseprice_1RQJwHAspxlK0TBsIlDDDfja" value="Extra Cheese"/>
                                    <label className="checkbox-label" htmlFor="cheese2">Extra Cheese (+1)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="aguacateprice_1RQJwHAspxlK0TBsIlDDDfja" value="Aguacate Mayo"/>
                                    <label className="checkbox-label" htmlFor="aguacate mayo2">Aguacate Mayo (+1)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mushroomprice_1RQJwHAspxlK0TBsIlDDDfja" value="Mushroom"/>
                                    <label className="checkbox-label" htmlFor="mushroom2">Mushroom (+1.5)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="onionprice_1RQJwHAspxlK0TBsIlDDDfja" value="Onion"/>
                                    <label className="checkbox-label" htmlFor="onion2">Onions (+1.5)</label>
                                </div>
                            </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="price_1RQJwHAspxlK0TBsIlDDDfja").length}</p> : null}
                        {bevValid4 ? <p className="bev-error">Please choose a beverage type</p> : null}
                        <button onClick={() => {
                            document.getElementById("bev-typeprice_1RQJwHAspxlK0TBsIlDDDfja").value ? cart.addOneToCart("price_1RQJwHAspxlK0TBsIlDDDfja") : setBevValid4(true);
                            document.getElementById("bev-typeprice_1RQJwHAspxlK0TBsIlDDDfja").value ? setBevValid4(false) : null
                            }} className="add" type="button">Add To Cart</button>
                    </div>
                </div>
                </div>

                <div className="main-container-chori" >
                    <div className="title-span-container">
                        <p className="title2"><span className="span-text">Chori</span></p><p className="title">Combo</p>
                    </div>
                    <div className="sub-container">
                        <div className="large">
                            <p className="text">Includes</p>
                            <div className="icons">
                                <img className="icon-item" src="/sandwich1.svg"/>
                                <img className="icon-item" src="/french-fries1.svg"/>
                                <img className="icon-item" src="/cola1.svg"/>
                            </div>
                            <select id="bev-typeprice_1RUdHwAspxlK0TBsXyLr4QSB" className="beverage-type">
                                <option value="">-----Choose Beverage-----</option>
                                <option value="Coca Cola">Coca Cola</option>
                                <option value="Pepsi">Pepsi</option>
                                <option value="Sprite">Sprite</option>
                                <option value="Fanta">Fanta</option>
                            </select>
                            <br></br>
                            <p style={{fontFamily: "Barlow semi condensed"}}>Special Instructions</p>
                            <div className="special-instructions">
                                <div>
                                    <input type="checkbox" id="lettuceprice_1RUdHwAspxlK0TBsXyLr4QSB" value="No Lettuce"/>
                                    <label className="checkbox-label" htmlFor="lettuce3">No Lettuce</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="tomatoeprice_1RUdHwAspxlK0TBsXyLr4QSB" value="No Tomatoe"/>
                                    <label className="checkbox-label" htmlFor="tomatoe3">No Tomatoe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mayoprice_1RUdHwAspxlK0TBsXyLr4QSB" value="No Mayo"/>
                                    <label className="checkbox-label" htmlFor="mayo3">No Mayo</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="ketchuprice_1RUdHwAspxlK0TBsXyLr4QSB" value="No Ketchup"/>
                                    <label className="checkbox-label" htmlFor="ketchup3">No Ketchup</label>
                                </div>
                            </div>
                            <p className="add-ons-title">Add-Ons</p>
                            <div className="add-ons">
                                <div>
                                    <input type="checkbox"id="cheeseprice_1RUdHwAspxlK0TBsXyLr4QSB" value="Extra Cheese"/>
                                    <label className="checkbox-label" htmlFor="cheese">Extra Cheese (+1)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="aguacateprice_1RUdHwAspxlK0TBsXyLr4QSB" value="Aguacate Mayo"/>
                                    <label className="checkbox-label" htmlFor="aguacate mayo">Aguacate Mayo (+1)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="onionprice_1RUdHwAspxlK0TBsXyLr4QSB" value="Onion"/>
                                    <label className="checkbox-label" htmlFor="onion">Onions (+1.5)</label>
                                </div>
                            </div>
                            {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="price_1RUdHwAspxlK0TBsXyLr4QSB").length}</p> : null}
                            {bevValid3 ? <p className="bev-error">Please choose a beverage type</p> : null}
                            <button onClick={() => {
                                document.getElementById("bev-typeprice_1RUdHwAspxlK0TBsXyLr4QSB").value ? cart.addOneToCart("price_1RUdHwAspxlK0TBsXyLr4QSB") : setBevValid3(true);
                                document.getElementById("bev-typeprice_1RUdHwAspxlK0TBsXyLr4QSB").value ? setBevValid3(false) : null
                                }} className="add" type="button">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div className="main-container-pachata" >
                    <div className="title-span-container">
                        <p className="title2"><span className="span-text">Pachata</span></p><p className="title">Combo</p>
                    </div>
                    <div className="sub-container">
                        <div className="large">
                            <p className="text">Includes</p>
                            <div className="icons">
                                <img className="icon-item" src="/sandwich1.svg"/>
                                <img className="icon-item" src="/french-fries1.svg"/>
                                <img className="icon-item" src="/cola1.svg"/>
                            </div>
                            <select id="bev-typeprice_1RVHI9AspxlK0TBsoD8SudxG" className="beverage-type">
                                <option value="">-----Choose Beverage-----</option>
                                <option value="Coca Cola">Coca Cola</option>
                                <option value="Pepsi">Pepsi</option>
                                <option value="Sprite">Sprite</option>
                                <option value="Fanta">Fanta</option>
                            </select>
                            <br></br>
                            <p style={{fontFamily: "Barlow semi condensed"}}>Special Instructions</p>
                            <div className="special-instructions">
                                <div>
                                    <input type="checkbox" id="lettuceprice_1RVHI9AspxlK0TBsoD8SudxG" value="No Lettuce"/>
                                    <label className="checkbox-label" htmlFor="lettuce3">No Lettuce</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="tomatoeprice_1RVHI9AspxlK0TBsoD8SudxG" value="No Tomatoe"/>
                                    <label className="checkbox-label" htmlFor="tomatoe3">No Tomatoe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mayoprice_1RVHI9AspxlK0TBsoD8SudxG" value="No Mayo"/>
                                    <label className="checkbox-label" htmlFor="mayo3">No Mayo</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="ketchuprice_1RVHI9AspxlK0TBsoD8SudxG" value="No Ketchup"/>
                                    <label className="checkbox-label" htmlFor="ketchup3">No Ketchup</label>
                                </div>
                            </div>
                            <p className="add-ons-title">Add-Ons</p>
                            <div className="add-ons">
                                <div>
                                    <input type="checkbox"id="cheeseprice_1RVHI9AspxlK0TBsoD8SudxG" value="Extra Cheese"/>
                                    <label className="checkbox-label" htmlFor="cheese">Extra Cheese (+1)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="aguacateprice_1RVHI9AspxlK0TBsoD8SudxG" value="Aguacate Mayo"/>
                                    <label className="checkbox-label" htmlFor="aguacate mayo">Aguacate Mayo (+1)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mushroomprice_1RVHI9AspxlK0TBsoD8SudxG" value="Mushroom"/>
                                    <label className="checkbox-label" htmlFor="mushroom">Mushroom (+1.5)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="onionprice_1RVHI9AspxlK0TBsoD8SudxG" value="Onion"/>
                                    <label className="checkbox-label" htmlFor="onion">Onions (+1.5)</label>
                                </div>
                            </div>
                            {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="price_1RVHI9AspxlK0TBsoD8SudxG").length}</p> : null}
                            {bevValid3 ? <p className="bev-error">Please choose a beverage type</p> : null}
                            <button onClick={() => {
                                document.getElementById("bev-typeprice_1RVHI9AspxlK0TBsoD8SudxG").value ? cart.addOneToCart("price_1RVHI9AspxlK0TBsoD8SudxG") : setBevValid3(true);
                                document.getElementById("bev-typeprice_1RVHI9AspxlK0TBsoD8SudxG").value ? setBevValid3(false) : null
                                }} className="add" type="button">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <button className="checkout-btn" type="button" onClick={() => navigate("/showcart")}>Checkout</button>
        </div>
    )
}