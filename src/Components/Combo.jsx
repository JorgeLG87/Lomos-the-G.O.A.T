
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
                            <select id="bev-type1" className="beverage-type" required>
                                <option value="">-----Choose Beverage-----</option>
                                <option value="Coca Cola">Coca Cola</option>
                                <option value="Pepsi">Pepsi</option>
                                <option value="Sprite">Sprite</option>
                            </select>
                        
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="1").length}</p> : null}
                        {bevValid1 ? <p className="bev-error">Please choose a beverage type</p> : null}
                        <button onClick={() => {
                           document.getElementById("bev-type1").value ? cart.addOneToCart("1") : setBevValid1(true);
                           document.getElementById("bev-type1").value ? setBevValid1(false) : null
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