import express from "express";
const router = express.Router();

import { createCustomer, deleteCustomer, updateCustomer } from "../controllers/customers.controllers.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";

router.post("/createCustomer",authMiddleware,createCustomer);
router.put("/updateCustomer/:cid",authMiddleware,updateCustomer);
router.delete("/deleteCustomer/:cid",authMiddleware,deleteCustomer);

export default router;