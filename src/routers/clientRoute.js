import express from "express";
import { createClient , getAllClients,getOneClient,deleteClient ,updateClient} from "../controllers/clientController.js";
import { verifyAdmin} from "../middleware/protectedRoute.js";

const router=express();

router.post('/addNew',verifyAdmin,createClient)
router.get('/getAll',verifyAdmin,getAllClients)
router.get('/getOne/:_id',verifyAdmin,getOneClient)
router.delete('/delete/:_id',verifyAdmin,deleteClient)
router.patch('/update/:_id',verifyAdmin,updateClient)


export default router;