import "./ShowCart.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../cartContext";
import { getPrice, getProductData } from "../storeProducts";
import DeliveryMethod from "./DeliveryMethod";
import ErrorModal from "./ErrorModal";

export default function ShowCart() {
    //STATE TO CONTROL ERROR MODAL
    const [ isOpen, setIsOpen ] = useState(false);

    //STATE TO CONTROL DELIVERY METHOD
    const [ orderType, setOrderType ] = useState("pickup");
    const cart = useContext(CartContext);
    console.log(cart, "Cart in showcart page")   
    
    //USING LOCALSTORAGE TO GET THE DELIVERY CHARGE, ADDRESS AND NAME
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ fullName, setFullName ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ street, setStreet ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("New Jersey");
    const [ deliveryCharge, setDeliveryCharge ] = useState(0);
    const [ deliveryChargeCents, setDeliveryChargeCents ] = useState(0);
    const [ deliveryTime, setDeliveryTime ] = useState(25);
    const [ addOns, setAddOns ] = useState(0);

    const [ improvedCart, setImprovedCart ] = useState([]);


    //RETRIEVING DATA FROM LOCALSTORAGE
    useEffect(()=> {
        setDeliveryCharge(localStorage.getItem("deliveryCharge"));
    }, []);

    useEffect(() => {
        setDeliveryChargeCents(Math.ceil(deliveryCharge*100));
    }, [deliveryCharge]);

    useEffect(() => {
        setFullName(firstName + " " + lastName);
    }, [firstName, lastName]);

    //---------------------------------------------------------------------------------------------------------------------

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

    const checkout = async () => {
        if (orderType === "delivery") {
            await fetch("https://lomos-the-g-o-a-t.onrender.com/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    items: cart.items,
                    deliveryCharge: deliveryChargeCents,
                })
            }).then((response) => {
                return response.json();
            }).then((response) => {
                if (response.url) {
                    window.location.assign(response.url);
                }
            }).catch((error) => {
                console.log(error);
            })
        } else if (orderType === "pickup") {
            await fetch("https://lomos-the-g-o-a-t.onrender.com/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    items: cart.items,
                    deliveryCharge: 0,
                })
            }).then((response) => {
                return response.json();
            }).then((response) => {
                if (response.url) {
                    window.location.assign(response.url);
                }
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    //CHECK THE ADD ONS WHEN PAGE STARTS AND SET THE PRICE FOR THE TOTAL OF THE ADD ONS

    function handleAddOns() {
        setAddOns(0)

        if (cart.steakInstruction !== "") {
            setAddOns(addOns+2);
        }
    }

    // useEffect(() => {
    //     handleAddOns()
    // },[])

    //CHECK HOW MANY ITEMS ARE IN THE CART
    const totalQuantity = (cart.items).reduce((accu, product) => accu + product.quantity,0)
    console.log(totalQuantity);


    //HANDLE ERROR MODAL
    function handleErrorModal() {
        if ((firstName === "" || lastName === "" || phone === "") && orderType === "pickup") {
            setIsOpen(true);
        } else if ((firstName === "" || lastName === "" || phone === "" || street === "" || city === "" || state === "") && orderType === "delivery") {
            setIsOpen(true);
        } else if (cart.items.length === 0) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
            checkout();
        }
    }

    //FOR TESTING PURPOSES
    useEffect(() => {
        console.log(firstName, "First name ShowCart.jsx")
    }, [firstName])

    useEffect(() => {
        console.log(orderType, "Order type ShowCart.jsx")
    }, [orderType]);

    useEffect(() => {
        console.log(city, "City ShowCart.jsx")
    }, [city]);

    useEffect(() => {
        console.log(deliveryChargeCents, "Delivery charge ShowCart.jsx")
    }, [deliveryChargeCents]);

    useEffect(() => {
        console.log(isOpen, "IsOpen ShowCart.jsx")
    }, [isOpen])

    // useEffect(() => {
    //     console.log(addOns, "add ons in ShowCart.jsx")
    // },[addOns])
  

    return (
        <div className="showcart-page">
            {isOpen ? <ErrorModal setIsOpen={setIsOpen}/> : null}
            <div className="sideborder-container2">
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
                <img src="/Lomos-The-GOAT-SideBorder.svg" className="side-border"/>
            </div>
            <div className="top-container">
                <Link to="/order-now" style={{textDecoration:"none", width:"fit-content", display:"contents"}}>
                    <button className="navigating-showcart" type="button">Go Back</button>
                </Link>
                <button className="place-order-top" type="button" onClick={() => handleErrorModal()}>Place Order</button>
            </div>
            
            <div className="total-price">Sub-Total: ${getTotalSum().toFixed(2)}</div>
            <div className="showcart-main-container2">
                {(cart.items).map((product, index) => {
             
                    const data = getProductData(product.id)
                    // const cost = cart.getTotalCost();
                    {product.steakInstruction !== "" ? data.price = data.price+2 : null}
                    return (
                        <div className="list-products">
                            <p className="showcart-title">{data.title}</p>
                            <p style={{color:"gray", fontFamily:"Barlow semi condensed"}}>Quantity: {product.quantity}</p>
                            <p style={{fontFamily:"Barlow semi condensed"}}>Beverage: {product.beverage}</p>
                            <p style={{fontWeight:"bold", fontFamily: "Barlow semi condensed"}}>Special Instructions:</p>
                            {product.lettuceInstruction ? <p className="cart-titles">{product.lettuceInstruction}</p> : null}
                            {product.tomatoeInstruction ? <p className="cart-titles">{product.tomatoeInstruction}</p> : null}
                            {product.saltInstruction ? <p className="cart-titles">{product.saltInstruction}</p> : null}
                            {product.mayoInstruction ? <p className="cart-titles">{product.mayoInstruction}</p> : null}
                            {product.ketchupInstruction ? <p className="cart-titles">{product.ketchupInstruction}</p> : null}
                            {product.mustardInstruction ? <p className="cart-titles">{product.mustardInstruction}</p> : null}
                            {product.steakInstruction ? <p className="cart-titles">{product.steakInstruction}</p> : null}
                            {addOns > 0 ? <p className="showcart-subtotal">Price: ${data.price.toFixed(2)} </p> : <p className="showcart-subtotal">Price: ${(data.price).toFixed(2)}</p>}
                            <button className="delete-btn" onClick={() => cart.deleteFromCart(product.index)} type="button">Remove From Cart</button>
                        </div>
                    )
                })}
            </div>
            
            {totalQuantity > 0 ?  <DeliveryMethod subTotal={getTotalSum().toFixed(2)} totalQuantity={totalQuantity} orderType={orderType} setOrderType={setOrderType} deliveryCharge={deliveryCharge} setDeliveryCharge={setDeliveryCharge} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} phone={phone} setPhone={setPhone} street={street} setStreet={setStreet} city={city} setCity={setCity} deliveryTime={deliveryTime} setDeliveryTime={setDeliveryTime}/> : null}
            
            <div className="sideborder-right-container2">
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
                <img src="/sideborder-right.svg" className="side-border-right"/>
            </div>

        </div>
    )
}