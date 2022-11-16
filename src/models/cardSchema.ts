import mongoose, { Schema } from "mongoose";

const cardSchema = new Schema({
    name: String,
    time: String,
    date: { type: Date, default: Date.now }
});

const Card = mongoose.model('Card', cardSchema);

export default Card;