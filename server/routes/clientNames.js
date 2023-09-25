// clientNames.js
import express from 'express';
import WaterSample from '../models/WaterSample.js'
const clientNamesRouter = express.Router();

clientNamesRouter.get('/', async (req, res) => {
  try {
    // Get all distinct client names
    const clientNames = await WaterSample.distinct('Client');
    res.json(clientNames);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default clientNamesRouter