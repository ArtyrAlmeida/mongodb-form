import express from 'express';
import cors from 'cors';
import router from './routes/routes';
const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));