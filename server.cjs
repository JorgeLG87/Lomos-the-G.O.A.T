// pk_test_51PYFEG03vPVWwY4eJs5YvcEZi3W04wRaNejh28GIbKDqZqnhWNBv8Y3j8LwDuDluOm6MYHqY8PQyOiPT7BlngjbR00gGJyNhIe
// The G.O.A.T Small Combo --> price_1PYFLk03vPVWwY4emohOmTTs

const express = require("express");
const path = require("path");
require("dotenv").config();
var cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "build")));

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

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})