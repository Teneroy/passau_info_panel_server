import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import config from './configs/config.json'
import weather from './api/weather';
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', weather);

app.listen(config.port, () => console.log(`Server started on port ${config.port}`));