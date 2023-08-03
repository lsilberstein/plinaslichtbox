import createAxios from "../ApiAxios.js";

export const duckDNSinterval = () => {setInterval(async () => {
    sendDuckDNSReq();
}, 
// Interval is set to 15 Minutes; Maybe change to something different or make it changeable in .env
1000 * 60 * 15)};

export async function sendDuckDNSReq() {
    // get DuckDNS domain and token form .env
    const domain = process.env.DUCKDNS_DOMAIN;
    const token = process.env.DUCKDNS_TOKEN;

    const Axios = createAxios("//duckdns.org/");

    try {
        const res = await Axios.get(`update?domains=${domain}&token=${token}`, (err, res, body) => {
            if (err) {
                console.log("error:", err);
            } else {
                console.log("DuckDNS update:", body);
                return res;
            }
        });
    } catch (err) {
        console.log("Error updating DuckDNS:", err);
    }
}