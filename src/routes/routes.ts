import { Router } from "express";
import { createCard, sendData } from "../controllers/card";
import { sendPage } from "../controllers/sendPage";

const router = Router();

router.get('/', sendPage);

router.get('/displayData', sendData)
router.post('/createCard', createCard);

export default router;