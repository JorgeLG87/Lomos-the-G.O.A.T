// pk_test_51PYFEG03vPVWwY4eJs5YvcEZi3W04wRaNejh28GIbKDqZqnhWNBv8Y3j8LwDuDluOm6MYHqY8PQyOiPT7BlngjbR00gGJyNhIe
// The G.O.A.T Small Combo --> price_1PYFLk03vPVWwY4emohOmTTs

const express = require("express");
const path = require("path");
require("dotenv").config();
var cors = require("cors");
const stripe = require("stripe")(process.env.VITE_STRIPE_SECRET_KEY)

const app = express();

app.use(cors({
    origin: "https://lomosthegoat.netlify.app",
    methods: ["GET", "POST"],
    credentials: true,
}));

app.use(express.static(path.join(__dirname, "build")));

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 })

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
        success_url: 'https://lomos-the-g-o-a-t.onrender.com/success',
        cancel_url: 'https://lomos-the-g-o-a-t.onrender.com/cancel'
    })

    res.send(JSON.stringify({
        url: session.url
    }))
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})