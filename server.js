import express from "express";
import config from "./config/config.js";
import auth from "./middleware/auth.js";
import errorHandler from "./middleware/errorHandler.js";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();
app.use(express.json());


app.use("/api/Books", auth, studentRoutes);

app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`${config.appName} running on http://localhost:${config.port}`);
});
