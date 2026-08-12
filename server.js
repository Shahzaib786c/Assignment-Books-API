import express from "express";
import config from "./config/config.js";
import connectDB from "./Config/db.js";
import auth from "./middleware/auth.js";
import errorHandler from "./middleware/errorHandler.js";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();
app.use(express.json());
connectDB();
app.use("/api/Books", auth, bookRoutes);

app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`${config.appName} running on http://localhost:${config.port}`);
});
