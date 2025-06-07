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
                                    <input type="checkbox" id="lettuceprice_1RXCyjAspxlK0TBs1BNLOJuz" value="No Lettuce"/>
                                    <label className="checkbox-label" htmlFor="lettuce7">No Lettuce</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="tomatoeprice_1RXCyjAspxlK0TBs1BNLOJuz" value="No Tomatoe"/>
                                    <label className="checkbox-label" htmlFor="tomatoe7">No Tomatoe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="saltprice_1RXCyjAspxlK0TBs1BNLOJuz" value="No Salt"/>
                                    <label className="checkbox-label" htmlFor="salt7">No Salt</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mayoprice_1RXCyjAspxlK0TBs1BNLOJuz" value="No Mayo"/>
                                    <label className="checkbox-label" htmlFor="mayo7">No Mayo</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="ketchuprice_1RXCyjAspxlK0TBs1BNLOJuz" value="No Ketchup"/>
                                    <label className="checkbox-label" htmlFor="ketchup7">No Ketchup</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mustardprice_1RXCyjAspxlK0TBs1BNLOJuz" value="No Mustard"/>
                                    <label className="checkbox-label" htmlFor="mustard7">No Mustard</label>
                                </div>
                            </div>
                            <p className="add-ons-title">Add-Ons</p>
                            <div className="add-ons">
                                <div>
                                    <input type="checkbox" id="extrasteakprice_1RXCyjAspxlK0TBs1BNLOJuz" value="Extra Steak"/>
                                    <label className="checkbox-label" htmlFor="steak3">Extra Steak (+2)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="cheeseprice_1RXCyjAspxlK0TBs1BNLOJuz" value="Extra Cheese"/>
                                    <label className="checkbox-label" htmlFor="cheese3">Extra Cheese (+1)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="aguacateprice_1RXCyjAspxlK0TBs1BNLOJuz" value="Aguacate Mayo"/>
                                    <label className="checkbox-label" htmlFor="aguacate mayo3">Aguacate Mayo (+1)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mushroomprice_1RXCyjAspxlK0TBs1BNLOJuz" value="Mushroom"/>
                                    <label className="checkbox-label" htmlFor="mushroom3">Mushroom (+1.5)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="onionprice_1RXCyjAspxlK0TBs1BNLOJuz" value="Onion"/>
                                    <label className="checkbox-label" htmlFor="onion3">Onions (+1.5)</label>
                                </div>
                            </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="price_1RXCyjAspxlK0TBs1BNLOJuz").length}</p> : null}
                        <button onClick={() => cart.addOneToCart("price_1RXCyjAspxlK0TBs1BNLOJuz")} className="nocombo-add" type="button">Add To Cart</button>
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
                                    <input type="checkbox" id="lettuceprice_1RXCzBAspxlK0TBsouBU9kdQ" value="No Lettuce"/>
                                    <label className="checkbox-label" htmlFor="lettuce8">No Lettuce</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="tomatoeprice_1RXCzBAspxlK0TBsouBU9kdQ" value="No Tomatoe"/>
                                    <label className="checkbox-label" htmlFor="tomatoe8">No Tomatoe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="saltprice_1RXCzBAspxlK0TBsouBU9kdQ" value="No Salt"/>
                                    <label className="checkbox-label" htmlFor="salt8">No Salt</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mayoprice_1RXCzBAspxlK0TBsouBU9kdQ" value="No Mayo"/>
                                    <label className="checkbox-label" htmlFor="mayo8">No Mayo</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="ketchuprice_1RXCzBAspxlK0TBsouBU9kdQ" value="No Ketchup"/>
                                    <label className="checkbox-label" htmlFor="ketchup8">No Ketchup</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mustardprice_1RXCzBAspxlK0TBsouBU9kdQ" value="No Mustard"/>
                                    <label className="checkbox-label" htmlFor="mustard8">No Mustard</label>
                                </div>
                            </div>
                            <p className="add-ons-title">Add-Ons</p>
                            <div className="add-ons">
                                <div>
                                    <input type="checkbox" id="extrasteakprice_1RXCzBAspxlK0TBsouBU9kdQ" value="Extra Steak"/>
                                    <label className="checkbox-label" htmlFor="steak4">Extra Steak (+2)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="cheeseprice_1RXCzBAspxlK0TBsouBU9kdQ" value="Extra Cheese"/>
                                    <label className="checkbox-label" htmlFor="cheese4">Extra Cheese (+1)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="aguacateprice_1RXCzBAspxlK0TBsouBU9kdQ" value="Aguacate Mayo"/>
                                    <label className="checkbox-label" htmlFor="aguacate mayo4">Aguacate Mayo (+1)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mushroomprice_1RXCzBAspxlK0TBsouBU9kdQ" value="Mushroom"/>
                                    <label className="checkbox-label" htmlFor="mushroom4">Mushroom (+1.5)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="onionprice_1RXCzBAspxlK0TBsouBU9kdQ" value="Onion"/>
                                    <label className="checkbox-label" htmlFor="onion4">Onions (+1.5)</label>
                                </div>
                            </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="price_1RXCzBAspxlK0TBsouBU9kdQ").length}</p> : null}
                        <button onClick={() => cart.addOneToCart("price_1RXCzBAspxlK0TBsouBU9kdQ")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>
                </div>
            </div>

            <div className="nocombo-main-container">
                <div className="nocombo-title-span-container2">
                    <p className="title2"><span className="span-text">Chori</span></p>
                </div>

                <div className="nocombo-sub-container-lomo">
                    <div className="small2">
                        <p className="text">Chori</p>

                        <div className="icons-lomo">
                            <img className="icon-item-lomo" src="/sandwich1.svg"/>
                        </div>

                        <br></br>
                            <p style={{fontFamily: "Barlow semi condensed"}}>Special Instructions</p>
                            <div className="special-instructions">
                                <div>
                                    <input type="checkbox" id="lettuceprice_1RXCzXAspxlK0TBserjYTfeP" value="No Lettuce"/>
                                    <label className="checkbox-label" htmlFor="lettuce7">No Lettuce</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="tomatoeprice_1RXCzXAspxlK0TBserjYTfeP" value="No Tomatoe"/>
                                    <label className="checkbox-label" htmlFor="tomatoe7">No Tomatoe</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="mayoprice_1RXCzXAspxlK0TBserjYTfeP" value="No Mayo"/>
                                    <label className="checkbox-label" htmlFor="mayo7">No Mayo</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="ketchuprice_1RXCzXAspxlK0TBserjYTfeP" value="No Ketchup"/>
                                    <label className="checkbox-label" htmlFor="ketchup7">No Ketchup</label>
                                </div>
                            </div>
                            <p className="add-ons-title">Add-Ons</p>
                            <div className="add-ons">
                                <div>
                                    <input type="checkbox" id="cheeseprice_1RXCzXAspxlK0TBserjYTfeP" value="Extra Cheese"/>
                                    <label className="checkbox-label" htmlFor="cheese3">Extra Cheese (+1)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="aguacateprice_1RXCzXAspxlK0TBserjYTfeP" value="Aguacate Mayo"/>
                                    <label className="checkbox-label" htmlFor="aguacate mayo3">Aguacate Mayo (+1)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="onionprice_1RXCzXAspxlK0TBserjYTfeP" value="Onion"/>
                                    <label className="checkbox-label" htmlFor="onion3">Onions (+1.5)</label>
                                </div>
                            </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="price_1RXCzXAspxlK0TBserjYTfeP").length}</p> : null}
                        <button onClick={() => cart.addOneToCart("price_1RXCzXAspxlK0TBserjYTfeP")} className="nocombo-add" type="button">Add To Cart</button>

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
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="price_1RXD0pAspxlK0TBsrbFwpGMR").length}</p> : null}
                        <button onClick={() => cart.addOneToCart("price_1RXD0pAspxlK0TBsrbFwpGMR")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>

                    <div className="large-fries">
                        <p className="text">Large (for 4)</p>
                        <div className="icons-fries">
                            <img className="icon-item-fries" src="/french-fries1.svg"/>
                        </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="price_1RXD1EAspxlK0TBsCPLLGama").length}</p> : null}
                        <button onClick={() => cart.addOneToCart("price_1RXD1EAspxlK0TBsCPLLGama")} className="nocombo-add" type="button">Add To Cart</button>
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
                        <select id="bev-typeprice_1QyHkQAspxlK0TBss5Zo0B9A" className="beverage-type">
                                <option value="">-----Choose Beverage-----</option>
                                <option value="Coca Cola">Coca Cola</option>
                                <option value="Pepsi">Pepsi</option>
                                <option value="Sprite">Sprite</option>
                                <option value="Fanta">Fanta</option>
                            </select>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="price_1QyHkQAspxlK0TBss5Zo0B9A").length}</p> : null}
                        <button onClick={() => cart.addOneToCart("price_1QyHkQAspxlK0TBss5Zo0B9A")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>
                </div>
            </div>

            <button className="checkout-btn-nocombo" type="button" onClick={() => navigate("/showcart")}>Checkout</button>
        </div>
    )
}