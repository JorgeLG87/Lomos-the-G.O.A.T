// pk_test_51PYFEG03vPVWwY4eJs5YvcEZi3W04wRaNejh28GIbKDqZqnhWNBv8Y3j8LwDuDluOm6MYHqY8PQyOiPT7BlngjbR00gGJyNhIe
// The G.O.A.T Small Combo --> price_1PYFLk03vPVWwY4emohOmTTs


const express = require("express");
var cors = require("cors");
const stripe = require("stripe")("sk_test_51PYFEG03vPVWwY4ewx4cfovmwPG0ECdfpeT9TkBNIi9ecFvuoos3aRvZWayrzlJgmLUvjbztaFU0zO7u4O0aV3Y0009B32BDTC")

const app = express();

app.use(cors());

app.use(express.static("public"));

app.use(express.json());

app.post("/checkout", async (req, res) => {

    console.log(req.body);

    const items = req.body.items;
    let lineItems = [];

    items.forEach((item) => {
        lineItems.push({
            price: item.id,
            quantity: 1
        })
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:5173/success',
        cancel_url: 'http://localhost:5173/cancel'
    })

    res.send(JSON.stringify({
        url: session.url
    }))
})

app.listen(4000, () => {
    console.log("Listening on Port 4000")
})