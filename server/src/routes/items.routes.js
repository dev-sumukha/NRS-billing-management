import express from "express";
const router = express.Router();

import { createItem, deleteItem } from "../controllers/items.controllers.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js"

router.post("/createItem",authMiddleware,authMiddleware,createItem);
router.delete("/deleteItem/:id",authMiddleware,authMiddleware,deleteItem);

export default router;