import express from "express";
import { createClient } from "../controllers/clientController.js";
import { checkAdmin } from "../middleware/protectedRoute.js";

const routes=express();

routes.post('/addNew',createClient)

export default routes;