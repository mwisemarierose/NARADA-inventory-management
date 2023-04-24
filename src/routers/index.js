import express from "express";
import userRouter from "./userRoute.js"
import clientRouter from "./clientRoute.js"

const router = express.Router()

router.use('/user', userRouter)
router.use('/client', clientRouter)

export default router