import { createContext, useState } from "react";
import { storeProducts, getProductData, getProductName, getPrice } from "./storeProducts";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
    getCartItemById: ()=> {},
});

function CartProvider({ children }) {

    const [ cartProducts, setCartProducts ] = useState([]);
    const [ addOns, setAddOns ] = useState(0);

    function getCartItemById(id) {
        const item = cartProducts.filter(product => product.id === id ? product : 0);

        return item;
    }


    function getProductBeverage(id) {
        if (id === "price_1QyHXlAspxlK0TBsBq7lTKF3" || id === "price_1RQJwHAspxlK0TBsIlDDDfja" || id === "price_1RUdHwAspxlK0TBsXyLr4QSB" || id === "price_1RVHI9AspxlK0TBsoD8SudxG" || id === "price_1QyHkQAspxlK0TBss5Zo0B9A" || id === "6") {
            const beverageType = document.getElementById(`bev-type${id}`)?.value;
            return beverageType;
        } else {
            return 0;
        }
    }


    // SPECIAL INSTRUCTIONS
    function getLettuceInstruction(id) {
        if (id === "price_1QyHXlAspxlK0TBsBq7lTKF3" || id === "price_1RQJwHAspxlK0TBsIlDDDfja" || id === "price_1RUdHwAspxlK0TBsXyLr4QSB" || id === "price_1RXCzpAspxlK0TBskOryjmKH" || id === "price_1RVHI9AspxlK0TBsoD8SudxG" || id === "price_1RXCyjAspxlK0TBs1BNLOJuz" || id === "price_1RXCzBAspxlK0TBsouBU9kdQ" || id === "price_1RXCzXAspxlK0TBserjYTfeP") {
            const lettuce = document.getElementById(`lettuce${id}`)?.checked;
            return lettuce;
        } else return "";
    }

    function getTomatoeInstruction(id) {
        if (id === "price_1QyHXlAspxlK0TBsBq7lTKF3" || id === "price_1RQJwHAspxlK0TBsIlDDDfja" || id === "price_1RUdHwAspxlK0TBsXyLr4QSB" || id === "price_1RXCzpAspxlK0TBskOryjmKH" || id === "price_1RVHI9AspxlK0TBsoD8SudxG" || id === "price_1RXCyjAspxlK0TBs1BNLOJuz" || id === "price_1RXCzBAspxlK0TBsouBU9kdQ" || id === "price_1RXCzXAspxlK0TBserjYTfeP") {
            const tomatoe = document.getElementById(`tomatoe${id}`)?.checked;
            return tomatoe;
        } else return "";
    }

    function getSaltInstruction(id) {
        if (id === "price_1QyHXlAspxlK0TBsBq7lTKF3" || id === "price_1RQJwHAspxlK0TBsIlDDDfja" || id === "price_1RUdHwAspxlK0TBsXyLr4QSB" || id === "price_1RXCzpAspxlK0TBskOryjmKH" || id === "price_1RVHI9AspxlK0TBsoD8SudxG" || id === "price_1RXCyjAspxlK0TBs1BNLOJuz" || id === "price_1RXCzBAspxlK0TBsouBU9kdQ" || id === "8") {
            const salt = document.getElementById(`salt${id}`)?.checked;
            if (salt) {
                return salt;
            }
            return "";
        } 
    }

    function getMayoInstruction(id) {
        if (id === "price_1QyHXlAspxlK0TBsBq7lTKF3" || id === "price_1RQJwHAspxlK0TBsIlDDDfja" || id === "price_1RUdHwAspxlK0TBsXyLr4QSB" || id === "price_1RXCzpAspxlK0TBskOryjmKH" || id === "price_1RVHI9AspxlK0TBsoD8SudxG" || id === "price_1RXCyjAspxlK0TBs1BNLOJuz" || id === "price_1RXCzBAspxlK0TBsouBU9kdQ" || id === "price_1RXCzXAspxlK0TBserjYTfeP") {
            const mayo = document.getElementById(`mayo${id}`)?.checked;
            return mayo;
        } else return "";
    }

    function getKetchupInstruction(id) {
        if (id === "price_1QyHXlAspxlK0TBsBq7lTKF3" || id === "price_1RQJwHAspxlK0TBsIlDDDfja" || id === "price_1RUdHwAspxlK0TBsXyLr4QSB" || id === "price_1RXCzpAspxlK0TBskOryjmKH" || id === "price_1RVHI9AspxlK0TBsoD8SudxG" || id === "price_1RXCyjAspxlK0TBs1BNLOJuz" || id === "price_1RXCzBAspxlK0TBsouBU9kdQ" || id === "price_1RXCzXAspxlK0TBserjYTfeP") {
            const ketchup = document.getElementById(`ketchu${id}`)?.checked;
            return ketchup;
        } else return "";
    }

    function getMustardInstruction(id) {
        if (id === "price_1QyHXlAspxlK0TBsBq7lTKF3" || id === "price_1RQJwHAspxlK0TBsIlDDDfja" || id === "price_1RUdHwAspxlK0TBsXyLr4QSB" || id === "price_1RXCzpAspxlK0TBskOryjmKH" || id === "price_1RVHI9AspxlK0TBsoD8SudxG" || id === "price_1RXCyjAspxlK0TBs1BNLOJuz" || id === "price_1RXCzBAspxlK0TBsouBU9kdQ" || id === "8") {
            const mustard = document.getElementById(`mustard${id}`)?.checked;
            if (mustard) {
                return mustard;
            }
            return "";
        } 
    }


    // ADD-ONS INSTRUCTIONS
    function getSteakInstruction(id) {
        if (id === "price_1QyHXlAspxlK0TBsBq7lTKF3" || id === "price_1RQJwHAspxlK0TBsIlDDDfja" || id === "price_1RUdHwAspxlK0TBsXyLr4QSB" || id === "price_1RXCzpAspxlK0TBskOryjmKH" || id === "price_1RVHI9AspxlK0TBsoD8SudxG" || id === "price_1RXCyjAspxlK0TBs1BNLOJuz" || id === "price_1RXCzBAspxlK0TBsouBU9kdQ" || id === "8") {
            const steak = document.getElementById(`extrasteak${id}`)?.checked;
            setAddOns(addOns+2);
            return steak;
        } else return "";

    }

    function getAguacateInstruction(id) {
        if (id === "price_1QyHXlAspxlK0TBsBq7lTKF3" || id === "price_1RQJwHAspxlK0TBsIlDDDfja" || id === "price_1RUdHwAspxlK0TBsXyLr4QSB" || id === "price_1RXCzpAspxlK0TBskOryjmKH" || id === "price_1RVHI9AspxlK0TBsoD8SudxG" || id === "price_1RXCyjAspxlK0TBs1BNLOJuz" || id === "price_1RXCzBAspxlK0TBsouBU9kdQ" || id === "price_1RXCzXAspxlK0TBserjYTfeP") {
            const aguacate = document.getElementById(`aguacate${id}`)?.checked;
            setAddOns(addOns+1)
            return aguacate;
        } else return "";
    }

    function getOnionInstructions(id) {
        if (id === "price_1QyHXlAspxlK0TBsBq7lTKF3" || id === "price_1RQJwHAspxlK0TBsIlDDDfja" || id === "price_1RUdHwAspxlK0TBsXyLr4QSB" || id === "price_1RXCzpAspxlK0TBskOryjmKH" || id === "price_1RVHI9AspxlK0TBsoD8SudxG" || id === "price_1RXCyjAspxlK0TBs1BNLOJuz" || id === "price_1RXCzBAspxlK0TBsouBU9kdQ" || id === "price_1RXCzXAspxlK0TBserjYTfeP") {
            const onion = document.getElementById(`onion${id}`)?.checked;
            setAddOns(addOns+1);
            return onion;
        } else return "";
    }

    function getCheeseInstruction(id) {
        if (id === "price_1QyHXlAspxlK0TBsBq7lTKF3" || id === "price_1RQJwHAspxlK0TBsIlDDDfja" || id === "price_1RUdHwAspxlK0TBsXyLr4QSB" || id === "price_1RXCzpAspxlK0TBskOryjmKH" || id === "price_1RVHI9AspxlK0TBsoD8SudxG" || id === "price_1RXCyjAspxlK0TBs1BNLOJuz" || id === "price_1RXCzBAspxlK0TBsouBU9kdQ" || id === "price_1RXCzXAspxlK0TBserjYTfeP") {
            const cheese = document.getElementById(`cheese${id}`)?.checked;
            setAddOns(addOns+1);
            return cheese;
        } else return "";
    }

    function getMushroomInstruction(id) {
        if (id === "price_1QyHXlAspxlK0TBsBq7lTKF3" || id === "price_1RQJwHAspxlK0TBsIlDDDfja" || id === "price_1RUdHwAspxlK0TBsXyLr4QSB" || id === "price_1RXCzpAspxlK0TBskOryjmKH" || id === "price_1RVHI9AspxlK0TBsoD8SudxG" || id === "price_1RXCyjAspxlK0TBs1BNLOJuz" || id === "price_1RXCzBAspxlK0TBsouBU9kdQ" || id === "8") {
            const mushroom = document.getElementById(`mushroom${id}`)?.checked;
            setAddOns(addOns+1.5);
            return mushroom;
        } else return "";
    }

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        } else return quantity;
    }

    function getProductName(id) {
        const productName = storeProducts.find(product => product.id === id).title;
        return productName;
    }

    function priceAddOns(steak, aguacate, onions, cheese, mushroom) {
        let price = 0;

        if (steak); price += 2;
        if (aguacate); price += 1;
        if (onions); price +=  1.5;
        if (cheese); price += 1;
        if (mushroom); price += 1.5;

        return price;
    }

    function addOneToCart(id) {
        const name = getProductName(id);

        const quantity = getProductQuantity(id);

        const beverageType= getProductBeverage(id);
        
        const lettuce = getLettuceInstruction(id);

        const tomatoe = getTomatoeInstruction(id);

        const salt = getSaltInstruction(id);

        const mayo = getMayoInstruction(id);

        const ketchup = getKetchupInstruction(id);

        const mustard = getMustardInstruction(id);

        const steak = getSteakInstruction(id);

        const aguacate = getAguacateInstruction(id);

        const onions = getOnionInstructions(id);

        const cheese = getCheeseInstruction(id);

        const mushroom = getMushroomInstruction(id);

        const addOnsPrice = addOns;
 
        setCartProducts([
            ...cartProducts, {
                id: id,
                name: name,
                quantity: 1,
                price: addOnsPrice,
                beverage: beverageType || "None",
                lettuceInstruction: lettuce ? "No Lettuce" : "",
                tomatoeInstruction: tomatoe ? "No Tomatoes" : "",
                saltInstruction: salt ? "No Salt" : "",
                mayoInstruction: mayo ? "No Mayo" : "",
                ketchupInstruction: ketchup ? "No Ketchup" : "",
                mustardInstruction: mustard ? "No Mustard" : "",
                steakInstruction : steak ? "Extra Steak" : "",
                aguacateInstruction : aguacate ? "Aguacate Mayo" : "",
                onionInstruction : onions ? "Onions" : "",
                cheeseInstruction : cheese ? "Cheese" : "",
                mushroomInstruction : mushroom ? "Mushroom" : "",
                index: Date.now()
            }
        ])
      
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 1) {
           deleteFromCart(id);
        } else {
            setCartProducts(cartProducts.map(product => product.id === id ? { ...product, quantity: product.quantity - 1 } : product));
        }
    }

    function deleteFromCart(index) {
        setCartProducts(cartProducts => cartProducts.filter(product => product.index !== index));  
    }


    function getTotalCost(id) {
        let total = 0;
    
        const product = cartProducts.map(product => {
                            const productData = getProductData(product.id);
                            total += (productData.price * product.quantity);
           
                        })

        return total;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        getCartItemById,
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;