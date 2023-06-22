import app from "./app.js";
import initRoutes from "./setup/routes.js";
import init from "./setup/inits.js";
// load env variables
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

init();
initRoutes();