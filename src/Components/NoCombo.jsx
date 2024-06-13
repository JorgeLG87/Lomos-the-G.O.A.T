import "./NoCombo.css";
import { useContext } from "react";
import { CartContext } from "../cartContext";

export default function NoCombo() {

    const cart = useContext(CartContext)

    return (
        <div className="nocombo-mother-container">  
            {/* <label className="lomoquantity-container">
                <input className="lomo-quantity" type="number" placeholder="Quantity"/>
            </label>
            <label className="lomo-container">
                <select className="selection">
                    <option value="choose lomo">Choose Lomo</option>
                    <option value="house-lomo">Lomo the G.O.A.T</option>
                    <option value="plain">Plain</option>
                </select>
            </label>
            <br/><br/>

            <label className="bevquantity-container">
                <input className="bev-quantity" type="number" placeholder="Quantity"/>
            </label>
            <div className="size-bevcontainer">
            <select className="selectionsize">
                <option value="select size">Select Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            </div>
            <label className="beverage-container">
                <select className="selection">
                    <option value="choose beverage">Choose Beverage</option>
                    <option value="pepsi">Pepsi</option>
                    <option value="coke">Coke</option>
                    <option value="orange juice">Orange Juice</option>
                </select>
            </label>

            <label className="frenchfriesquantity-container">
                <input className="frenchfries-quantity" type="number" placeholder="Quantity"/>
            </label>
            <div className="size-frenchfriescontainer">
            <select className="selectionsize">
                <option value="select size">Select Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            </div>
            <label className="french-fries-nocombo">
                <select className="selection">
                    <option value="none">French Fries</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </label>
            <button className="add-nocombo" type="button"></button> */}

            <div className="nocombo-main-container">
                <div className="nocombo-title-span-container">
                    <p className="title2"><span className="span-text">Lomo</span></p><p className="title">Type</p>
                </div>
                <div className="nocombo-sub-container-lomo">
                    <div className="small">
                        <p className="text">The G.O.A.T</p>
                        <div className="icons-lomo">
                            <img className="icon-item-lomo" src="public/sandwich-medium.png"/>
                        </div>
                        <button onClick={() => cart.addOneToCart("7")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>

                    <div className="medium">
                        <p className="text">Plain</p>
                        <div className="icons-lomo">
                            <img className="icon-item-lomo" src="public/sandwich-medium.png"/>
                        </div>
                        <button onClick={() => cart.addOneToCart("8")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>
                </div>
            </div>

            <div className="nocombo-main-container">
                <div className="nocombo-title-span-container">
                    <p className="title2"><span className="span-text">French</span></p><p className="title">Fries</p>
                </div>
                <div className="nocombo-sub-container-fries">
                    <div className="small-fries">
                        <p className="text">Small</p>
                        <div className="icons-fries">          
                            <img className="icon-item-fries" src="public/fries-medium.png"/>
                        </div>
                        <button onClick={() => cart.addOneToCart("12")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>

                    <div className="medium-fries">
                        <p className="text">Medium</p>
                        <div className="icons-fries">
                            <img className="icon-item-fries" src="public/fries-medium.png"/>
                        </div>
                        <button onClick={() => cart.addOneToCart("13")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>

                    <div className="large-fries">
                        <p className="text">Large</p>
                        <div className="icons-fries">
                            <img className="icon-item-fries" src="public/fries-medium.png"/>
                        </div>
                        <button onClick={() => cart.addOneToCart("14")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>
                </div>
            </div>

            <div className="nocombo-main-container">
                <p className="title">Beverage</p>
                <div className="nocombo-sub-container-fries">
                    <div className="small-fries">
                        <p className="text">Small</p>
                        <div className="icons-fries">          
                            <img className="icon-item-soda" src="public/soda-medium.png"/>
                        </div>
                        <button onClick={() => cart.addOneToCart("12")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>

                    <div className="medium-fries">
                        <p className="text">Medium</p>
                        <div className="icons-fries">
                            <img className="icon-item-soda" src="public/soda-medium.png"/>
                        </div>
                        <button onClick={() => cart.addOneToCart("13")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>

                    <div className="large-fries">
                        <p className="text">Large</p>
                        <div className="icons-fries">
                            <img className="icon-item-soda" src="public/soda-medium.png"/>
                        </div>
                        <button onClick={() => cart.addOneToCart("14")} className="nocombo-add" type="button">Add To Cart</button>
                    </div>
                </div>
            </div>


        </div>
    )
}