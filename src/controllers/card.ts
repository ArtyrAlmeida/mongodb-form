import { Request, Response } from "express";
import Card from "../models/cardSchema";

const sendData = async (req: Request, res: Response) => {
    const list = await Card.find();
    res.json(list)
}

const createCard = (req: Request, res: Response) => {
    const body = { ...req.body };

    const card = new Card(body);
    card.save((err) => {
        if(err) console.log(err);
    })
    
    return res.redirect('/')
}

const deleteCard = (req: Request, res: Response) => {
    const { id } = req.params;
    Card.deleteOne({ _id: id }, (err) => {
        console.log(err);
    });

    res.sendStatus(204);
}

export { sendData, createCard, deleteCard }