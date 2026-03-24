import { Router } from "express";
import userRoutes from "./user.routes.js";
import sum from "../sum.js";

const router = Router();

router.get("/", (_, res) => {
    return res.status(200).send("Api is running...");
});

router.get("/getSum/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.status(200).json({ data: sum(+a, +b) });
});

router.use("/users", userRoutes);

export default router;