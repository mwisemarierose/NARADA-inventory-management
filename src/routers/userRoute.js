import express from "express";
import {signup ,signin ,updateProfile} from "../controllers/userController.js";
import { verifyLogin } from "../middleware/protectedRoute.js";

const routes=express();

routes.post('/register',signup)
routes.post('/signin',signin)
routes.patch('/update/:_id',verifyLogin,updateProfile)


export default routes;