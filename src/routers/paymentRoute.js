import express from "express";
import {addPayment,getAllPayments,getPaymentByClientId ,deleteAllPayment} from '../controllers/paymentController.js'
import { verifyLogin ,verifyAdmin } from "../middleware/protectedRoute.js";

const router=express();

router.post('/add/:clientid',verifyAdmin,addPayment)
router.get('/getAll',verifyAdmin,getAllPayments)
router.get('/getOne/:clientId',getPaymentByClientId)
router.delete('/deleteAll',deleteAllPayment)


export default router;