import express from "express";
import {addPayment ,getOnePayment ,totalAmountPaid} from '../controllers/paymentController.js'
import { verifyLogin } from "../middleware/protectedRoute.js";

const router=express();

router.post('/add',addPayment)
router.get('/getOne/:_id',getOnePayment)
router.get('/total/:_id',totalAmountPaid)




export default router;