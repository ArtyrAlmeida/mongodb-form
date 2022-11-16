import { Request, Response } from "express";
import Card from "../models/cardSchema";

const sendData = async (req: Request, res: Response) => {
    const list = await Card.find();
    res.json(list)
}

const createCard = (req: Response, res: Response) => {
    const body = { ...req.body };

    const card = new Card(body);
    card.save((err) => {
        if(err) console.log(err);
    })
    
    res.redirect('/');
}

export { sendData, createCard }