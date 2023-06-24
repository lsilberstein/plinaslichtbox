import createAxios from "../ApiAxios.js";
import { initButton } from "./button.js";
import { duckDNSinterval } from "./intervals.js";
import { setLightsAxios, turnLightOn } from "../lights.js";

const init = async () => { 
    const discoveryAxios = createAxios("");

    const res = await discoveryAxios.get("https://discovery.meethue.com/", (err, res, body) => {
        if (err) {
            console.log("error:", err);
            return err;
        } else {
            return res;
        }
    });
    
    console.log("I found a HUE Bridge connected at this IP address:", res.data[0].internalipaddress, "port:", res.data[0].port);

    setLightsAxios(createAxios(`$//${res.data[0].internalipaddress}/`));
    //setLightsAxios(createAxios("//192.168.2.68/"));

    turnLightOn();

    initButton();

    duckDNSinterval();
}

export default init;