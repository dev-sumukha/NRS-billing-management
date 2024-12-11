import express from "express";
const router = express.Router();

import { createCustomer, deleteCustomer } from "../controllers/customers.controllers.js";

router.post("/createCustomer",createCustomer);
router.delete("/deleteCustomer",deleteCustomer);

export default router;