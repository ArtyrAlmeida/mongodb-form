import { Router } from "express";
import { sendPage } from "../controllers/sendPage";

const router = Router();

router.get('/', sendPage);

export default router;