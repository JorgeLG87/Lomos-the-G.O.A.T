const storeProducts = [
    {
        id: "1",
        title: "The G.O.A.T Small Combo",
        price: 17
    },
    {
        id: "2",
        title: "The G.O.A.T Medium Combo",
        price: 18.50
    },
    {
        id: "3",
        title: "The G.O.A.T Large Combo",
        price: 20
    },
    {
        id: "4",
        title: "Plain Small Combo",
        price: 16
    },
    {
        id: "5",
        title: "Plain Medium Combo",
        price: 17
    },
    {
        id: "6",
        title: "Plain Large Combo",
        price: 18
    },
    {
        id: "7",
        title: "The G.O.A.T",
        price: 15
    },
    {
        id: "8",
        title: "Plain",
        price: 14
    },
    {
        id: "9",
        title: "Small Soda",
        price: 1.50
    },
    {
        id: "10",
        title: "Medium Soda",
        price: 2.50
    },
    {
        id: "11",
        title: "Large Soda",
        price: 4.5
    },
    {
        id: "12",
        title: "Small Fries",
        price: 2
    },
    {
        id: "13",
        title: "Medium Fries",
        price: 3
    },
    {
        id: "14",
        title: "Large Fries",
        price: 4
    }
]

// Functions to get specific prices

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

export {storeProducts, getPriceSmall, getPriceMedium, getPriceLarge, getProductData};