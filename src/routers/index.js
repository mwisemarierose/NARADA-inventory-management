import express from "express";
import userRouter from "./userRoute.js"
import clientRouter from "./clientRoute.js"
import paymentRouter from "./paymentRoute.js"
import reportRouter from "./reportRouter.js";

const router = express.Router()

router.use('/user', userRouter)
router.use('/client', clientRouter)
router.use('/payment', paymentRouter)
router.use('/report', reportRouter)

export default router