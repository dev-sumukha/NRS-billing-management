import express from "express";
const router = express.Router();

import { createItem, deleteItem } from "../controllers/items.controllers.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js"

router.post("/createItem",authMiddleware,createItem);
router.delete("/deleteItem/:id",authMiddleware,deleteItem);

export default router;