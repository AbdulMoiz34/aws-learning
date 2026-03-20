import { Router } from "express";
import userRoutes from "./user.routes.js";

const router = Router();

router.get("/", (req, res) => {
    return res.status(200).send("Api is running");
});

router.use("/users", userRoutes);

export default router;