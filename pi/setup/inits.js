import ApiAxios from "../ApiAxios.js";
import { initButton } from "./button.js";
import { duckDNSinterval } from "./intervals.js";

const init = async () => { 
    const PHILIPS_HUE_API_ID = process.env.PHILIPS_HUE_API_ID;

    const res = await ApiAxios.get("https://discovery.meethue.com/", (err, res, body) => {
        if (err) {
            console.log("error:", err);
            return err;
        } else {
            return res;
        }
    });
    console.log("I found a HUE Bridge connected at this IP address:", res.data[0].internalipaddress);

    const res2 = await ApiAxios.get(`${res.data[0].internalipaddress}/api/${PHILIPS_HUE_API_ID}/lights`, (err, res, body) => {
        if (err) {
            console.log("error:", err);
            return err;
        } else {
            return res;
        }
    });

    console.log("I found these lights connected to the HUE Bridge:", res2.data);

    initButton();

    duckDNSinterval();
}

export default init;