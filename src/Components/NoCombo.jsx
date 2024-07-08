import "./NoCombo.css";
import { useContext } from "react";
import { CartContext } from "../cartContext";

export default function NoCombo() {

    const cart = useContext(CartContext)

    return (
        <div className="nocombo-mother-container">  
            <div className="nocombo-main-container">
                <div className="nocombo-title-span-container">
                    <p className="title2"><span className="span-text">Lomo</span></p><p className="title">Type</p>
                </div>
                <div className="nocombo-sub-container-lomo">
                    <div className="small">
                        <p className="text">The G.O.A.T</p>
                        <div className="icons-lomo">
                            <img className="icon-item-lomo" src="/sandwich-medium.png"/>
                        </div>
                        <br></br>
                            <p>Special Instructions</p>
                            <div className="special-instructions">
                                <div>
                                    <input type="radio" id="lettuce7" value="No Lettuce"/>
                                    <label for="lettuce7">No Lettuce</label>
                                </div>
                                <div>
                                    <input type="radio" id="tomatoe7" value="No Tomatoe"/>
                                    <label for="tomatoe7">No Tomatoe</label>
                                </div>
                                <div>
                                    <input type="radio" id="salt7" value="No Salt"/>
                                    <label for="salt7">No Salt</label>
                                </div>
                                <div>
                                    <input type="radio" id="mayo7" value="No Mayo"/>
                                    <label for="mayo7">No Mayo</label>
                                </div>
                            </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="7").length}</p> : null}
                        <button onClick={() => cart.addOneToCart("7")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>

                    <div className="medium">
                        <p className="text">Plain</p>
                        <div className="icons-lomo">
                            <img className="icon-item-lomo" src="/sandwich-medium.png"/>
                        </div>
                        <br></br>
                            <p>Special Instructions</p>
                            <div className="special-instructions">
                                <div>
                                    <input type="radio" id="lettuce8" value="No Lettuce"/>
                                    <label for="lettuce8">No Lettuce</label>
                                </div>
                                <div>
                                    <input type="radio" id="tomatoe8" value="No Tomatoe"/>
                                    <label for="tomatoe8">No Tomatoe</label>
                                </div>
                                <div>
                                    <input type="radio" id="salt8" value="No Salt"/>
                                    <label for="salt8">No Salt</label>
                                </div>
                                <div>
                                    <input type="radio" id="mayo8" value="No Mayo"/>
                                    <label for="mayo8">No Mayo</label>
                                </div>
                            </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="8").length}</p> : null}
                        <button onClick={() => cart.addOneToCart("8")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>
                </div>
            </div>

            <div className="nocombo-main-container">
                <div className="nocombo-title-span-container2">
                    <p className="title2"><span className="span-text">French</span></p><p className="title">Fries</p>
                </div>
                <div className="nocombo-sub-container-fries">
                    <div className="small-fries">
                        <p className="text">Small</p>
                        <div className="icons-fries">          
                            <img className="icon-item-fries" src="/fries-medium.png"/>
                        </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="12").length}</p> : null}
                        <button onClick={() => cart.addOneToCart("12")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>

                    <div className="medium-fries">
                        <p className="text">Medium</p>
                        <div className="icons-fries">
                            <img className="icon-item-fries" src="/fries-medium.png"/>
                        </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="13").length}</p> : null}
                        <button onClick={() => cart.addOneToCart("13")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>

                    <div className="large-fries">
                        <p className="text">Large</p>
                        <div className="icons-fries">
                            <img className="icon-item-fries" src="/fries-medium.png"/>
                        </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="14").length}</p> : null}
                        <button onClick={() => cart.addOneToCart("14")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>
                </div>
            </div>

            <div className="nocombo-main-container-bev">
                <p className="title2"><span className="span-text">Beverage</span></p>
                <div className="nocombo-sub-container-fries">
                    <div className="small-fries">
                        <p className="text">Small</p>
                        <div className="icons-fries">          
                            <img className="icon-item-soda" src="/soda-medium.png"/>
                        </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="9").length}</p> : null}
                        <button onClick={() => cart.addOneToCart("9")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>

                    <div className="medium-fries">
                        <p className="text">Medium</p>
                        <div className="icons-fries">
                            <img className="icon-item-soda" src="/soda-medium.png"/>
                        </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="10").length}</p> : null}
                        <button onClick={() => cart.addOneToCart("10")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>

                    <div className="large-fries">
                        <p className="text">Large</p>
                        <div className="icons-fries">
                            <img className="icon-item-soda" src="/soda-medium.png"/>
                        </div>
                        {(cart.items) ? <p className="quantity-text">Added Quantity: {(cart.items).filter(item=>item.id==="11").length}</p> : null}
                        <button onClick={() => cart.addOneToCart("11")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>
                </div>
            </div>


        </div>
    )
}