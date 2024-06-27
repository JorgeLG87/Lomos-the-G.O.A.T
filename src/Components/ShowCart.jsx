import "./ShowCart.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../cartContext";
import { getProductData } from "../storeProducts";

export default function ShowCart() {

    const cart = useContext(CartContext);
    console.log(cart)

    const [ improvedCart, setImprovedCart ] = useState([]);

    function getItem(object) {
        return object;
    }
    
    function getTotalSum() {
        const items = cart.items;
        let total = 0;

        if (items.length === 0) {
            return 0;
        }

        for (let i = 0; i < items.length; i++) {
            const data = getProductData(items[i].id);
            const currItemPrice = data.price;
            total += currItemPrice;
        }
        return total;
    }

    return (
        <div className="showcart-page">
            <div className="top-container">
                <Link to="/order-now" style={{textDecoration:"none"}}>
                    <button className="navigating-showcart" type="button">Go Back</button>
                </Link>
                <div className="title-span-container2">
                    <p className="title2"><span className="span-text">Shopping</span></p><p className="title">Cart</p>
                </div>
                <button className="place-order-top" type="button">Place Order</button>
            </div>
            <div className="showcart-main-container">
                {(cart.items).map((product, index) => {
                    const data = getProductData(product.id);
                    return (
                        <div className="list-products">
                            <p className="showcart-title">{data.title}</p>
                            <p style={{color:"gray"}}>Quantity: {product.quantity}</p>
                            <p>Beverage: {product.beverage}</p>
                            <p style={{fontWeight:"bold"}}>Special Instructions:</p>
                            {product.lettuceInstruction ? <p>{product.lettuceInstruction}</p> : null}
                            {product.tomatoeInstruction ? <p>{product.tomatoeInstruction}</p> : null}
                            {product.saltInstruction ? <p>{product.saltInstruction}</p> : null}
                            {product.mayoInstruction ? <p>{product.mayoInstruction}</p> : null}
                            <p className="showcart-subtotal">Price: ${((data.price)*(product.quantity)).toFixed(2)}</p>
                            <button className="delete-btn" onClick={() => cart.deleteFromCart(product.index)} type="button">Remove From Cart</button>
                        </div>
                    )
                })}
            </div>
            <div className="total-price">Total: ${getTotalSum().toFixed(2)}</div>
        </div>
    )
}