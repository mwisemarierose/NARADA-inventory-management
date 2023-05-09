import express from "express";
import {signup ,signin ,updateProfile ,getAllUsers} from "../controllers/userController.js";
import { verifyLogin } from "../middleware/protectedRoute.js";

const router=express();

router.post('/register',signup)
router.post('/signin',signin)
router.patch('/update/:_id',verifyLogin,updateProfile)
router.patch('/getAll',getAllUsers)

export default router;