import ApiAxios from "../ApiAxios.js";

export const duckDNSinterval = () => {setInterval(async () => {
    // get DuckDNS domain and token form .env
    const domain = process.env.DUCKDNS_DOMAIN;
    const token = process.env.DUCKDNS_TOKEN;

    const res = await ApiAxios.get(`https://duckdns.org/update?domains=${domain}&token=${token}`, (err, res, body) => {
        if (err) {
            console.log("error:", err);
            return err;
        } else {
            console.log("DuckDNS update:", body);
            return res;
        }
    });

    console.log("I updated the DuckDNS adress:", res.data);

}, 
// Interval is set to 15 Minutes; Maybe change to something different or make it changeable in .env
1000 * 60 * 15)};