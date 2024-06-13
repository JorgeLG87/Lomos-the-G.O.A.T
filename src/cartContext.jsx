import { createContext, useState } from "react";
import { storeProducts } from "./storeProducts";

import { getProductData } from "./storeProducts";

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

    function getCartItemById(id) {
        const item = cartProducts.filter(product => product.id === id ? product : 0);

        return item;
    }


    function getProductBeverage(id) {
        if (id === "1" || id === "2" || id === "3" || id === "4" || id === "5" || id === "6") {
            const beverageType = document.getElementById(`bev-type${id}`).value;
            return beverageType;
        } else {
            return 0;
        }
    }

    

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        } else return quantity;
    }


    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        const beverageType= getProductBeverage(id);
        // console.log(beverageType);
        
        setCartProducts([
            ...cartProducts, {
                id: id,
                quantity: 1,
                beverage: beverageType,
                index: Date.now()
            }
        ])
        // if (quantity === 0) {
        //     setCartProducts([
        //         ...cartProducts, {
        //             id: id,
        //             quantity: 1,
        //             beverage: beverageType
        //         }
        //     ])
        // } else {
        //     const sameIdAndBev = cartProducts.map(product => product.id === id && product.beverage === beverageType);
        //     if (sameIdAndBev[0] === true) {
        //         const item = getCartItemById(id);
        //         setCartProducts([...cartProducts, {
        //             id: id,
        //             quantity: item.quantity + 1,
        //             beverage: beverageType
        //         }])
        //         console.log(item, "Line 67");
        //      } else {
        //         setCartProducts([
        //             ...cartProducts, {
        //                 id: id,
        //                 quantity: 1,
        //                 beverage: beverageType
        //             }
        //         ])
        //      }
        // }
        // cartProducts.map(product => product.id === id ? console.log(product.quantity) : null);
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


    function getTotalCost() {
        let total = 0;
        
        cartProducts.map(product => {
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