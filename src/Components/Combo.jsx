
import "./Combo.css";
import { useState, useContext } from "react";
import { CartContext } from "../cartContext";




export default function Combo({ lomo, setLomo, quantity, setQuantity, dateStamp, setDateStamp, setSecDateStamp, secDateStamp }) {

    const [error, setError] = useState(false);
    const [ combo1, setCombo1 ] = useState(0);
    const [ bevValid1, setBevValid1 ] = useState(false); 
    const [ bevValid2, setBevValid2 ] = useState(false); 
    const [ bevValid3, setBevValid3 ] = useState(false); 
    const [ bevValid4, setBevValid4 ] = useState(false); 
    const [ bevValid5, setBevValid5 ] = useState(false); 
    const [ bevValid6, setBevValid6 ] = useState(false); 


    const cart = useContext(CartContext);
    
    const [ click, setClick ] = useState(false)
    const [ selectedValue, setSelectedValue ] = useState(null);
   
    const handleRadioClicks = (value) => {
        if (selectedValue === value) {
            setSelectedValue(null);
        } else {
            setSelectedValue(value);
        }
    }
    
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

    function sameIdQuantity(id) {
       let test= (cart.items).reduce((accu, item) => item.id === id, 0);
       console.log(test,"sameIdQuantity");

    }


    return (
        <div className="mother-container">
                <div className="main-container">
                    <div className="title-span-container">
                        <p className="title2"><span className="span-text">G.O.A.T</span></p><p className="title">Combo</p>
                    </div>
                    <div className="sub-container">
                        <div className="small">
                            <p className="text">Small</p>
                            <div className="icons">
                                <img className="icon-item" src="/sandwich-medium.png"/>
                                <img className="icon-item" src="/fries-medium.png"/>
                                <img className="icon-item" src="/soda-medium.png"/>
                            </div>
                            <select id="bev-typeprice_1PYFLk03vPVWwY4emohOmTTs" className="beverage-type" required>
                                <option className="option-text" value="">-----Choose Beverage-----</option>
                                <option className="option-text" value="Coca Cola">Coca Cola</option>
                                <option className="option-text" value="Pepsi">Pepsi</option>
                                <option className="option-text" value="Sprite">Sprite</option>
                            </select>
                            <br></br>
                            <p style={{ fontFamily:"Barlow semi condensed" }}>Special Instructions</p>
                            <div id="special-instructions" className="special-instructions">
                                <div>
                                    <input className="checkbox-input" type="checkbox" id="lettuceprice_1PYFLk03vPVWwY4emohOmTTs" value="No Lettuce" />
                                   
                                    <label className="checkbox-label" htmlFor="lettuce1">No Lettuce</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="tomatoeprice_1PYFLk03vPVWwY4emohOmTTs" value="No Tomatoe"/>
                                    <label className="checkbox-label" htmlFor="tomatoe1">No Tomatoe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="saltprice_1PYFLk03vPVWwY4emohOmTTs" value="No Salt"/>
                                    <label className="checkbox-label" htmlFor="salt1">No Salt</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mayoprice_1PYFLk03vPVWwY4emohOmTTs" value="No Mayo"/>
                                    <label className="checkbox-label" htmlFor="mayo1">No Mayo</label>
                                </div>
                            </div>
                            {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="price_1PYFLk03vPVWwY4emohOmTTs").length}</p> : null}
                            {bevValid1 ? <p className="bev-error">Please choose a beverage type</p> : null}
                            <button onClick={() => {
                                document.getElementById("bev-typeprice_1PYFLk03vPVWwY4emohOmTTs").value ? cart.addOneToCart("price_1PYFLk03vPVWwY4emohOmTTs") : setBevValid1(true);
                                document.getElementById("bev-typeprice_1PYFLk03vPVWwY4emohOmTTs").value ? setBevValid1(false) : null
                                // document.getElementById("bev-typeprice_1PYFLk03vPVWwY4emohOmTTs").;
                                // document.getElementById("lettuceprice_1PYFLk03vPVWwY4emohOmTTs");
                                
                                }} className="add" type="button">Add To Cart</button>
                        </div>

                        <div className="medium">
                            <p className="text">Medium</p>
                            <div className="icons">
                                <img className="icon-item" src="/sandwich-medium.png"/>
                                <img className="icon-item" src="/fries-medium.png"/>
                                <img className="icon-item" src="/soda-medium.png"/>
                            </div>
                            <select id="bev-type2" className="beverage-type">
                                <option value="">-----Choose Beverage-----</option>
                                <option value="Coca Cola">Coca Cola</option>
                                <option value="Pepsi">Pepsi</option>
                                <option value="Sprite">Sprite</option>
                            </select>
                            <br></br>
                            <p style={{fontFamily: "Barlow semi condensed"}}>Special Instructions</p>
                            <div className="special-instructions">
                                <div>
                                    <input type="checkbox" id="lettuce2" value="No Lettuce"/>
                                    <label className="checkbox-label" htmlFor="lettuce2">No Lettuce</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="tomatoe2" value="No Tomatoe"/>
                                    <label className="checkbox-label" htmlFor="tomatoe2">No Tomatoe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="salt2" value="No Salt"/>
                                    <label className="checkbox-label" htmlFor="salt2">No Salt</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mayo2" value="No Mayo"/>
                                    <label className="checkbox-label" htmlFor="mayo2">No Mayo</label>
                                </div>
                            </div>
                            {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="2").length}</p> : null}
                            {bevValid2 ? <p className="bev-error">Please choose a beverage type</p> : null}
                            <button onClick={() => {
                                document.getElementById("bev-type2").value ? cart.addOneToCart("2") : setBevValid2(true);
                                document.getElementById("bev-type2").value ? setBevValid2(false) : null
                                }} className="add" type="button">Add To Cart</button>
                        </div>

                        <div className="large">
                            <p className="text">Large</p>
                            <div className="icons">
                                <img className="icon-item" src="/sandwich-medium.png"/>
                                <img className="icon-item" src="/fries-medium.png"/>
                                <img className="icon-item" src="/soda-medium.png"/>
                            </div>
                            <select id="bev-type3" className="beverage-type">
                                <option value="">-----Choose Beverage-----</option>
                                <option value="Coca Cola">Coca Cola</option>
                                <option value="Pepsi">Pepsi</option>
                                <option value="Sprite">Sprite</option>
                            </select>
                            <br></br>
                            <p style={{fontFamily: "Barlow semi condensed"}}>Special Instructions</p>
                            <div className="special-instructions">
                                <div>
                                    <input type="checkbox" id="lettuce3" value="No Lettuce"/>
                                    <label className="checkbox-label" htmlFor="lettuce3">No Lettuce</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="tomatoe3" value="No Tomatoe"/>
                                    <label className="checkbox-label" htmlFor="tomatoe3">No Tomatoe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="salt3" value="No Salt"/>
                                    <label className="checkbox-label" htmlFor="salt3">No Salt</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mayo3" value="No Mayo"/>
                                    <label className="checkbox-label" htmlFor="mayo3">No Mayo</label>
                                </div>
                            </div>
                            {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="3").length}</p> : null}
                            {bevValid3 ? <p className="bev-error">Please choose a beverage type</p> : null}
                            <button onClick={() => {
                                document.getElementById("bev-type3").value ? cart.addOneToCart("3") : setBevValid3(true);
                                document.getElementById("bev-type3").value ? setBevValid3(false) : null
                                }} className="add" type="button">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div className="main-container2">
                <p className="title2"><span className="span-text">Plain</span></p><p className="title">Combo</p>
                <div className="sub-container">
                    <div className="small">
                        <p className="text">Small</p>
                        <div className="icons">
                            <img className="icon-item" src="/sandwich-medium.png"/>
                            <img className="icon-item" src="/fries-medium.png"/>
                            <img className="icon-item" src="/soda-medium.png"/>
                        </div>
                        <select id="bev-type4" className="beverage-type">
                            <option value="">-----Choose Beverage-----</option>
                            <option value="Coca Cola">Coca Cola</option>
                            <option value="Pepsi">Pepsi</option>
                            <option value="Sprite">Sprite</option>
                        </select>
                        <br></br>
                            <p style={{fontFamily: "Barlow semi condensed"}}>Special Instructions</p>
                            <div className="special-instructions">
                                <div>
                                    <input type="checkbox" id="lettuce4" value="No Lettuce"/>
                                    <label className="checkbox-label" htmlFor="lettuce4">No Lettuce</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="tomatoe4" value="No Tomatoe"/>
                                    <label className="checkbox-label" htmlFor="tomatoe4">No Tomatoe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="salt4" value="No Salt"/>
                                    <label className="checkbox-label" htmlFor="salt4">No Salt</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mayo4" value="No Mayo"/>
                                    <label className="checkbox-label" htmlFor="mayo4">No Mayo</label>
                                </div>
                            </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="4").length}</p> : null}
                        {bevValid4 ? <p className="bev-error">Please choose a beverage type</p> : null}
                        <button onClick={() => {
                            document.getElementById("bev-type4").value ? cart.addOneToCart("4") : setBevValid4(true);
                            document.getElementById("bev-type4").value ? setBevValid4(false) : null
                            }} className="add" type="button">Add To Cart</button>
                    </div>

                    <div className="medium">
                        <p className="text">Medium</p>
                        <div className="icons">
                            <img className="icon-item" src="/sandwich-medium.png"/>
                            <img className="icon-item" src="/fries-medium.png"/>
                            <img className="icon-item" src="/soda-medium.png"/>
                        </div>
                        <select id="bev-type5" className="beverage-type">
                            <option value="">-----Choose Beverage-----</option>
                            <option value="Coca Cola">Coca Cola</option>
                            <option value="Pepsi">Pepsi</option>
                            <option value="Sprite">Sprite</option>
                        </select>
                        <br></br>
                            <p style={{fontFamily: "Barlow semi condensed"}}>Special Instructions</p>
                            <div className="special-instructions">
                                <div>
                                    <input type="checkbox" id="lettuce5" value="No Lettuce"/>
                                    <label className="checkbox-label" htmlFor="lettuce5">No Lettuce</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="tomatoe5" value="No Tomatoe"/>
                                    <label className="checkbox-label" htmlFor="tomatoe5">No Tomatoe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="salt5" value="No Salt"/>
                                    <label className="checkbox-label" htmlFor="salt5">No Salt</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mayo5" value="No Mayo"/>
                                    <label className="checkbox-label" htmlFor="mayo5">No Mayo</label>
                                </div>
                            </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="5").length}</p> : null}
                        {bevValid5 ? <p className="bev-error">Please choose a beverage type</p> : null}
                        <button onClick={() => {
                            document.getElementById("bev-type5").value ? cart.addOneToCart("5") : setBevValid5(true);
                            document.getElementById("bev-type5").value ? setBevValid5(false) : null
                            }} className="add" type="button">Add To Cart</button>
                    </div>

                    <div className="large">
                        <p className="text">Large</p>
                        <div className="icons">
                            <img className="icon-item" src="/sandwich-medium.png"/>
                            <img className="icon-item" src="/fries-medium.png"/>
                            <img className="icon-item" src="/soda-medium.png"/>
                        </div>
                        <select id="bev-type6" className="beverage-type">
                            <option value="">-----Choose Beverage-----</option>
                            <option value="Coca Cola">Coca Cola</option>
                            <option value="Pepsi">Pepsi</option>
                            <option value="Sprite">Sprite</option>
                        </select>
                        <br></br>
                            <p style={{fontFamily: "Barlow semi condensed"}}>Special Instructions</p>
                            <div className="special-instructions">
                                <div>
                                    <input type="checkbox" id="lettuce6" value="No Lettuce"/>
                                    <label className="checkbox-label" htmlFor="lettuce6">No Lettuce</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="tomatoe6" value="No Tomatoe"/>
                                    <label className="checkbox-label" htmlFor="tomatoe6">No Tomatoe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="salt6" value="No Salt"/>
                                    <label className="checkbox-label" htmlFor="salt6">No Salt</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mayo6" value="No Mayo"/>
                                    <label className="checkbox-label" htmlFor="mayo6">No Mayo</label>
                                </div>
                            </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="6").length}</p> : null}
                        {bevValid6 ? <p className="bev-error">Please choose a beverage type</p> : null}
                        <button onClick={() => {
                            document.getElementById("bev-type6").value ? cart.addOneToCart("6") : setBevValid6(true);
                            document.getElementById("bev-type6").value ? setBevValid6(false) : null
                            }} className="add" type="button">Add To Cart</button>
                    </div>

                </div>
                </div>

                
        </div>
    )
}