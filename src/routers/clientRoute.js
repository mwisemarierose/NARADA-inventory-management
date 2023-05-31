import express from "express";
import {
  createClient,
  getAllClients,
  getOneClient,
  deleteClient,
  updateClient,
  deleteAllClients,
  filterClients,
  signin
} from "../controllers/clientController.js";
import { verifyAdmin } from "../middleware/protectedRoute.js";

const router = express();

router.post("/addNew", createClient);
router.post("/signin", signin);
router.get("/getAll", getAllClients);
router.get("/filter", filterClients);
router.get("/getOne/:_id",getOneClient);
router.delete("/delete/:_id", verifyAdmin, deleteClient);
router.delete("/deleteAll", deleteAllClients);
router.patch("/update/:_id", verifyAdmin, updateClient);

export default router;
