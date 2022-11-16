import express from 'express';
import cors from 'cors';
import router from './routes/routes';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3333;
const databaseUri = process.env.DATABASE_URI || '';

mongoose.connect(databaseUri)
    .then(() => console.log("Connected to database"))
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(router);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));