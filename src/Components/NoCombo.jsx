import "./NoCombo.css";
import { useContext } from "react";
import { CartContext } from "../cartContext";
import { useNavigate } from "react-router-dom";

export default function NoCombo() {

    const navigate = useNavigate();
    const cart = useContext(CartContext)

    return (
        <div className="nocombo-mother-container">  
            <div className="nocombo-main-container">
                <div className="nocombo-title-span-container">
                    <p className="title2"><span className="span-text">Lomo</span></p><p className="title">Type</p>
                </div>
                <div className="nocombo-sub-container-lomo">
                    <div className="small2">
                        <p className="text">The G.O.A.T</p>
                        <div className="icons-lomo">
                            <img className="icon-item-lomo" src="/sandwich1.svg"/>
                        </div>
                        <br></br>
                            <p style={{fontFamily: "Barlow semi condensed"}}>Special Instructions</p>
                            <div className="special-instructions">
                                <div>
                                    <input type="checkbox" id="lettuceprice_1QBE39AspxlK0TBsWQEup4F1" value="No Lettuce"/>
                                    <label className="checkbox-label" htmlFor="lettuce7">No Lettuce</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="tomatoeprice_1QBE39AspxlK0TBsWQEup4F1" value="No Tomatoe"/>
                                    <label className="checkbox-label" htmlFor="tomatoe7">No Tomatoe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="saltprice_1QBE39AspxlK0TBsWQEup4F1" value="No Salt"/>
                                    <label className="checkbox-label" htmlFor="salt7">No Salt</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mayoprice_1QBE39AspxlK0TBsWQEup4F1" value="No Mayo"/>
                                    <label className="checkbox-label" htmlFor="mayo7">No Mayo</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="ketchuprice_1QBE39AspxlK0TBsWQEup4F1" value="No Ketchup"/>
                                    <label className="checkbox-label" htmlFor="ketchup7">No Ketchup</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mustardprice_1QBE39AspxlK0TBsWQEup4F1" value="No Mustard"/>
                                    <label className="checkbox-label" htmlFor="mustard7">No Mustard</label>
                                </div>
                            </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="price_1QBE39AspxlK0TBsWQEup4F1").length}</p> : null}
                        <button onClick={() => cart.addOneToCart("price_1QBE39AspxlK0TBsWQEup4F1")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>

                    <div className="medium2">
                        <p className="text">Classic</p>
                        <div className="icons-lomo">
                            <img className="icon-item-lomo" src="/sandwich1.svg"/>
                        </div>
                        <br></br>
                            <p style={{fontFamily: "Barlow semi condensed"}}>Special Instructions</p>
                            <div className="special-instructions">
                                <div>
                                    <input type="checkbox" id="lettuceprice_1QU9xZAspxlK0TBsdnAwLgx7" value="No Lettuce"/>
                                    <label className="checkbox-label" htmlFor="lettuce8">No Lettuce</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="tomatoeprice_1QU9xZAspxlK0TBsdnAwLgx7" value="No Tomatoe"/>
                                    <label className="checkbox-label" htmlFor="tomatoe8">No Tomatoe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="saltprice_1QU9xZAspxlK0TBsdnAwLgx7" value="No Salt"/>
                                    <label className="checkbox-label" htmlFor="salt8">No Salt</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mayoprice_1QU9xZAspxlK0TBsdnAwLgx7" value="No Mayo"/>
                                    <label className="checkbox-label" htmlFor="mayo8">No Mayo</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="ketchuprice_1QU9xZAspxlK0TBsdnAwLgx7" value="No Ketchup"/>
                                    <label className="checkbox-label" htmlFor="ketchup8">No Ketchup</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mustardprice_1QU9xZAspxlK0TBsdnAwLgx7" value="No Mustard"/>
                                    <label className="checkbox-label" htmlFor="mustard8">No Mustard</label>
                                </div>
                            </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="price_1QU9xZAspxlK0TBsdnAwLgx7").length}</p> : null}
                        <button onClick={() => cart.addOneToCart("price_1QU9xZAspxlK0TBsdnAwLgx7")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>
                </div>
            </div>

            <div className="nocombo-main-container">
                <div className="nocombo-title-span-container2">
                    <p className="title2"><span className="span-text">French</span></p><p className="title">Fries</p>
                </div>
                <div className="nocombo-sub-container-fries">
    
                    <div className="medium-fries">
                        <p className="text">Medium (for 2)</p>
                        <div className="icons-fries">
                            <img className="icon-item-fries" src="/french-fries1.svg"/>
                        </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="price_1QUA2qAspxlK0TBsgjhdvagh").length}</p> : null}
                        <button onClick={() => cart.addOneToCart("price_1QUA2qAspxlK0TBsgjhdvagh")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>

                    <div className="large-fries">
                        <p className="text">Large (for 4)</p>
                        <div className="icons-fries">
                            <img className="icon-item-fries" src="/french-fries1.svg"/>
                        </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="price_1QUA3gAspxlK0TBsDykRfCY4").length}</p> : null}
                        <button onClick={() => cart.addOneToCart("price_1QUA3gAspxlK0TBsDykRfCY4")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>
                </div>
            </div>

            <div className="nocombo-main-container-bev">
                <p className="title2"><span className="span-text">Beverage</span></p><p className="title">Types</p>
                <div className="nocombo-sub-container-bev">
                    <div className="small-bev">
                        <p className="text">12 fl. Oz</p>
                        <div className="icons-fries">          
                            <img className="icon-item-soda" src="/cola1.svg"/>
                        </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="price_1QU9yiAspxlK0TBsWGwULncs").length}</p> : null}
                        <button onClick={() => cart.addOneToCart("price_1QU9yiAspxlK0TBsWGwULncs")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>

                </div>
            </div>

            <button className="checkout-btn-nocombo" type="button" onClick={() => navigate("/showcart")}>Checkout</button>
        </div>
    )
}