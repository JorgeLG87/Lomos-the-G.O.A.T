const storeProducts = [
    {
        // id: "price_1QBDqDAspxlK0TBsmuFK3fGa",
        id: "price_1QyHXlAspxlK0TBsBq7lTKF3",
        title: "The G.O.A.T Combo",
        price: 11.99,
        addOns: {
            extraSteak: 2
        }
    },
    {
        id: "price_1RQJwHAspxlK0TBsIlDDDfja",
        title: "Classic Combo",
        price: 9.99
    },
    {
        id: "price_1QBE39AspxlK0TBsWQEup4F1",
        title: "The G.O.A.T",
        price: 9.99
    },
    {
        id: "price_1QU9xZAspxlK0TBsdnAwLgx7",
        title: "Plain",
        price: 8.99
    },
    {
        // id: "price_1QU9yiAspxlK0TBsWGwULncs",
        id: "price_1QyHkQAspxlK0TBss5Zo0B9A",
        title: "Soda",
        price: 1.49
    },
    {
        id: "price_1QUA2qAspxlK0TBsgjhdvagh",
        title: "Fries for 2",
        price: 3.99
    },
    {
        id: "price_1QUA3gAspxlK0TBsDykRfCY4",
        title: "Fries for 4",
        price: 5.99
    },
    {
        id: "pachata",
        title: "Pachata",
        price: 9.99
    },
    {
        id: "extra steak",
        title: "Extra Steak",
        price: 2
    },
    {
        id: "aguactate mayo",
        title: "Aguacate Mayo",
        price: 1,
    },
    {
        id: "onions",
        title: "Onions",
        price: 1.5
    },
    {
        id: "extra cheese",
        title: "Extra Cheese",
        price: 1
    },
    {
        id: "mushroom",
        title: "Mushroom",
        price: 1.5
    }
]

// Functions to get specific prices

function getProductName(id) {
    let productName = storeProducts.find((product) => product.id === id).title;
    return productName;
}

function getProductData(id) {
    let productData = storeProducts.find((product) => product.id === id)
    return productData;
}

function getPriceSmall(id) {
    let productPrice = storeProducts.find((product) => product.id === id).price.small;
    return productPrice;
}

function getPriceMedium(id) {
    let productPrice = storeProducts.find((product) => product.id === id).price.medium;
    return productPrice;
}

function getPriceLarge(id) {
    let productPrice = storeProducts.find((product) => product.id === id).price.large;
    return productPrice;
}

function getPrice(id) {
    let productPrice = storeProducts.find((product) => product.id === id).price;
    return productPrice;
}

export {storeProducts, getPriceSmall, getPriceMedium, getPriceLarge, getProductData, getProductName, getPrice};