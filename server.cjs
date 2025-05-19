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

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//  })

app.get("/verify-payment", async (req, res) => {
    const sessionId  = req.query.session_id;

    if (!sessionId) {
        return res.status(400).json({ error: "Session ID is required" });
    }

    try {
        //RETRIEVE THE SESSION OBJECT USING THE SESSION ID
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        //CHECK IF THE SESSION IS COMPLETED
        if (session.payment_status === "paid") {
            return res.status(200).json({ success: true });
        } else {
            return res.status(400).json({success: false, error: "Payment not completed"});
        }
    } catch {
        return res.status(500).json({success: false, error: "Failed to retrieve payment session"})
    }
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
    
    items.forEach((item) => {
        lineItems.push({
            price: item.id,
            quantity: 1
        })
        if (item.steakInstruction !== "") {
            lineItems.push({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: "  - extra steak",
                    },
                    unit_amount: 200,
                },
                quantity: 1,
            })
        }
        if (item.aguacateInstruction !== "") {
            lineItems.push({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: "  - aguacate mayo",
                    },
                    unit_amount: 100,
                },
                quantity: 1,
            })
        }
        if (item.onionInstruction !== "") {
            lineItems.push({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: "  - onions",
                    },
                    unit_amount: 150,
                },
                quantity: 1,
            })
        }
        if (item.cheeseInstruction !== "") {
            lineItems.push({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: "  - cheese",
                    },
                    unit_amount: 100,
                },
                quantity: 1,
            })
        }
        if (item.mushroomInstruction !== "") {
            lineItems.push({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: "  - mushroom",
                    },
                    unit_amount: 150,
                },
                quantity: 1,
            })
        }

    });

    //ADDING THE DELIVERY COST TO THE LINE ITEMS
    lineItems.push({
        price_data: {
            currency: "usd",
            product_data: {
                name: "Delivery Charge",
            },
            unit_amount: deliveryCharge,
        },
        quantity: 1,
    });

    const shippingRate = await stripe.shippingRates.create({
        display_name: "Delivery",
        type: "fixed_amount",
        fixed_amount: {
            amount: deliveryCharge,
            currency: "usd"
        },
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'https://lomosthegoat.netlify.app/success?session_id={CHECKOUT_SESSION_ID}',
        cancel_url: 'https://lomosthegoat.netlify.app/cancel',
        customer_creation: "always",
    })

    res.send(JSON.stringify({
        url: session.url
    }))
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})