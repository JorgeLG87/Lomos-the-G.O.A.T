const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const stripe = require("stripe")(process.env.VITE_STRIPE_KEY);

const app = express();

app.use(cors({
    origin: ["https://lomosthegoat.netlify.app", "http://localhost:5173"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));

app.use(express.static(path.join(__dirname, "build")));

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 })

app.get("/api-get-distance", async (req, res) => {
    res.json({message: "Succesfull"});
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
        success_url: 'https://lomosthegoat.netlify.app/success',
        cancel_url: 'https://lomosthegoat.netlify.app/cancel'
    })

    res.send(JSON.stringify({
        url: session.url
    }))
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})