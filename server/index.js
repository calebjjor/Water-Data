import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import sampleTypesRouter from './routes/waterDataRouter.js';
import clientNamesRouter from './routes/clientNames.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.URI;
const PORT = process.env.PORT;

mongoose.connect(uri);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api/sampleTypes', sampleTypesRouter);
app.use('/api/clientNames', clientNamesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});