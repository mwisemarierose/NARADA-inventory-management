import express from "express";
import { createClient } from "../controllers/clientController.js";
import { checkAdmin } from "../middleware/protectedRoute.js";

const router=express();

router.post('/addNew',checkAdmin,createClient)

export default router;