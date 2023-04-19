import express from "express";
import {signup} from "../controllers/userController.js";


const routes=express();

routes.post('/register',signup)




export default routes;