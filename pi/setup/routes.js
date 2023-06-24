import app from "../app.js";
import { switchState } from "../states.js";

const initRoutes = () => {
    app.get("/test", (req, res) => {
        res.send("Welcome the PlinasLichtBox API!")
    });

    app.put("/thinkingOfYou", (req, res) => {
        switchState("api");
        console.log("Someone was thinking of you!");
        res.send("Thanks for thinking of me!");
    })
}

export default initRoutes;