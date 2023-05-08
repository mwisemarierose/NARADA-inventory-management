import express from "express";
import {addPayment,getAllPayments,getPaymentByClientId ,deleteAllPayment} from '../controllers/paymentController.js'
import { verifyLogin } from "../middleware/protectedRoute.js";

const router=express();

router.post('/add/:clientid',addPayment)
router.get('/getAll',getAllPayments)
router.get('/getOne/:clientId',getPaymentByClientId)
router.delete('/deleteAll',deleteAllPayment)


export default router;