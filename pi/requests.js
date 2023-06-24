import createAxios from "./ApiAxios.js";

export async function sendLightRequest () {
    const EXTERNAL_DOMAIN = process.env.EXTERNAL_DOMAIN;
    const EXTERNAL_PORT = process.env.EXTERNAL_PORT;

    const axios = createAxios(`http://${EXTERNAL_DOMAIN}.duckdns.org:${EXTERNAL_PORT}`);

    try {
        res = await axios.put("/thinkingOfYou");
        console.log("I have sent a note!", res);
    } catch (err) {
        console.log("Error sending note", err);
    }
}