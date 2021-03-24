import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import config from './config.json'
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(config.port, () => console.log(`Server started on port ${config.port}`));