import express from "express";
const router = express.Router();

import { createVoucher, updateVoucher } from "../controllers/voucher.controllers.js";

router.post("/createVoucher/:customerId",createVoucher);
router.put("/updateVoucher/:voucherId",updateVoucher);


export default router;