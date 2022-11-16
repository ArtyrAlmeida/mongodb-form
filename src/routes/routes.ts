import { Router } from "express";
import { createCard } from "../controllers/card";
import { sendPage } from "../controllers/sendPage";

const router = Router();

router.get('/', sendPage);

router.post('/createCard', createCard)

export default router;