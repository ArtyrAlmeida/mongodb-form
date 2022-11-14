import { Request, Response } from "express";
import path from 'path';

const sendPage = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../views/index.html'))
}

export { sendPage };