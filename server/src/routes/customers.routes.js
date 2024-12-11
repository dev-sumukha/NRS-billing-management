import express from "express";
const router = express.Router();

import { createCustomer, deleteCustomer, updateCustomer } from "../controllers/customers.controllers.js";

router.post("/createCustomer",createCustomer);
router.put("/updateCustomer/:cid",updateCustomer);
router.delete("/deleteCustomer/:cid",deleteCustomer);

export default router;