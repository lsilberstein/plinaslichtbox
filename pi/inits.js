import axios from "axios";

const init = () => {
    console.log("initializing information...");
    console.log("searching for Philips Hue Bridge...");
    axios.get("https://discovery.meethue.com/", (err, res, body) => {
        if (err) {
            console.log("error:", err);
        } else {
            console.log("body:", body);
        }
    });
    console.log("initialization complete.");
}

export default init;