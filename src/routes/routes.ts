import { Router } from "express";
import { createCard, deleteCard, editCard, sendData } from "../controllers/card";
import { sendPage } from "../controllers/sendPage";

const router = Router();

router.get('/', sendPage);

router.get('/displayData', sendData);
router.post('/createCard', createCard);
router.delete('/deleteCard/:id', deleteCard);
router.put('/editCard/:id', editCard);

export default router;