import express from "express";
import request from "request";

// load env variables
import dotenv from "dotenv";
dotenv.config();

const PHILIPS_HUE_IP = process.env.PHILIPS_HUE_IP;
const PHILIPS_HUE_API_ID = process.env.PHILIPS_HUE_API_ID;
const PHILIPS_HUE_API_LIGHT_ID = process.env.PHILIPS_HUE_API_LIGHT_ID;

const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.get("/", (req, res) => {
    res.send("Welcome this test APi.")
});

app.put("/light", (req, res) => {
    request(`${PHILIPS_HUE_IP}/api/${PHILIPS_HUE_API_ID}/lights/${PHILIPS_HUE_API_LIGHT_ID}/state`,
        {
            method: "PUT",
            json: {
                "on": true,
                "bri": 254,
            }
        },
        (err, res, body) => {
            if (err) {
                return console.log(err);
            }
            return console.log(body);
        })
})
