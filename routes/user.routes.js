import create from "../controllers/user/create.js";
import get from "../controllers/user/get.js";
import express from "express";

const router = express.Router();

router.post("/", create);
router.get("/", get);

export default router;