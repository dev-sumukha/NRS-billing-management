import express from "express";
const router = express.Router();

import { createVoucher, updateVoucher, getVouchers } from "../controllers/voucher.controllers.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js"

router.post("/createVoucher/:customerId",authMiddleware,createVoucher);
router.get("/getVouchers/:customerId",authMiddleware,getVouchers);
router.put("/updateVoucher/:voucherId",authMiddleware,updateVoucher);

export default router;