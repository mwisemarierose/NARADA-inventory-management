import express from "express";
import {getPaymentReport} from "../controllers/reportingController";
import { verifyLogin } from "../middleware/protectedRoute.js";

const router=express();

router.get('/get/:clientId',getPaymentReport)



export default router;