import express from "express";
import { createClient , getAllClients,getOneClient,deleteClient ,updateClient ,deleteAllClients} from "../controllers/clientController.js";
import { verifyAdmin} from "../middleware/protectedRoute.js";

const router=express();

router.post('/addNew',createClient)
router.get('/getAll',getAllClients)
router.get('/getOne/:_id',verifyAdmin,getOneClient)
router.delete('/delete/:_id',verifyAdmin,deleteClient)
router.delete('/deleteAll',deleteAllClients)
router.patch('/update/:_id',verifyAdmin,updateClient)

export default router;