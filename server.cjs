const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const { type } = require("os");
const stripe = require("stripe")(process.env.VITE_STRIPE_KEY);
const API_KEY = process.env.VITE_GOOGLE_API_KEY;

const app = express();

app.use(cors({
    origin: ["https://lomosthegoat.netlify.app", "http://localhost:5173/showcart"],
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
    const completeAddress = req.query.address;
    console.log(completeAddress);

    if (!completeAddress) {
        return res.status(400).json({error: "Complete address is required"})
    }

    try {
        const fetchResponse = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${completeAddress}&origins=89 MacArthur Ave., Garfield, NJ&units=imperial&key=${API_KEY}`)
        
        if (!fetchResponse.ok) {
            throw new Error(`Google API error: ${fetchResponse.status}`);
        }
        const distance = await fetchResponse.json();
        res.send(distance);
    } catch (error) {
        console.error("Error fetching distance: ", error)
        res.status(500).json({
            status: "error",
            message: "Failed to fetch distance",
            error: error.message,
        });
    }
})

app.post("/checkout", async (req, res) => {

    console.log(req.body, "Request Body");

    const items = req.body.items;
    let lineItems = [];

    const deliveryCharge = req.body.deliveryCharge;
    const street = req.body.street;
    const city = req.body.city;
    const state = req.body.state;

    items.forEach((item) => {
        lineItems.push({
            price: item.id,
            quantity: 1
        })
    });

    const shippingRate = await stripe.shippingRates.create({
        display_name: "Delivery",
        type: "fixed_amount",
        fixed_amount: {
            amount: deliveryCharge,
            currency: "usd"
        },
        // delivery_estimate: {
        //     minimum: {
        //         unit: "business_day",
        //         value: 5
        //     },
        //     maximum: {
        //         unit: "business_day",
        //         value: 7
        //     }
        // },
    });

    const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {
            allowed_countries: ["US"]
        },
        shipping_options: [
            {
                shipping_rate_data: {
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: deliveryCharge,
                        currency: "usd"
                    },
                    display_name: "Delivery",
                    // delivery_estimate: {
                    //     minimum: {
                    //         unit: "business_day",
                    //         value: 5
                    //     },
                    //     maximum: {
                    //         unit: "business_day",
                    //         value: 7
                    //     }
                    // }
                }
            }
        ],
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