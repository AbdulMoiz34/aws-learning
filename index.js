import express from "express";
import "dotenv/config";
import routes from "./routes/index.js";

const app = express();
app.use(express.json());

app.use("/api", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));