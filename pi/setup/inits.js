import ApiAxios from "../ApiAxios.js";
import { initButton } from "./button.js";
import { duckDNSinterval } from "./intervals.js";

const init = async () => {
    console.log("Searching for HUE Bridge...");
    
    const res = await ApiAxios.get("https://discovery.meethue.com/", (err, res, body) => {
        if (err) {
            console.log("error:", err);
            return err;
        } else {
            return res;
        }
    });
    console.log("I found a HUE Bridge connected at this IP address:", res.data[0].internalipaddress);

    initButton();

    duckDNSinterval();
}

export default init;