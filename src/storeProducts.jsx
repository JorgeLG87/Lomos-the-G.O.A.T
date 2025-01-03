const storeProducts = [
    {
        id: "price_1QBDqDAspxlK0TBsmuFK3fGa",
        title: "The G.O.A.T Combo",
        price: 11.99
    },
    {
        id: "price_1QAWMLAspxlK0TBs40YVjWnR",
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
        id: "price_1QU9yiAspxlK0TBsWGwULncs",
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

export {storeProducts, getPriceSmall, getPriceMedium, getPriceLarge, getProductData, getProductName};