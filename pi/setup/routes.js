import app from "../app.js";

const initRoutes = () => {
    app.get("/test", (req, res) => {
    res.send("Welcome the PlinasLichtBox API!")
    });
}

export default initRoutes;