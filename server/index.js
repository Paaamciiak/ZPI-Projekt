import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Connection from './database/db.js';
import Router from './routes/route.js'
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

app.use(cors());
app.use('/', Router);
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);