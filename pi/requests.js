import createAxios from "./ApiAxios.js";

export const sendLightRequest = () => {
    const EXTERNAL_DOMAIN = process.env.EXTERNAL_DOMAIN;
    const EXTERNAL_PORT = process.env.EXTERNAL_PORT;

    const axios = createAxios(`http://${EXTERNAL_DOMAIN}.duckdns.org:${EXTERNAL_PORT}/thinkingOfYou`);

    res = axios.put("/thinkingOfYou");

    console.log("I have sent a note!", res);
}