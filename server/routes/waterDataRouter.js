// Import necessary modules and models
import express from 'express';
import WaterSample from '../models/WaterSample.js';

// Create a router
const sampleTypesRouter = express.Router();

// Define a route to get sample types for a specific client
sampleTypesRouter.get('/:clientName', async (req, res) => {
  try {
    const clientName = req.params.clientName;

    // Get unique client sample types
    const sampleTypes = await WaterSample.distinct('Sample', { 'Client': clientName });

    res.json(sampleTypes);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to get sample type data
sampleTypesRouter.get('/:clientName/:sampleType', async (req, res) => {
  try {
    const clientName = req.params.clientName;
    const sampleType = req.params.sampleType;

    // Get all data for requested sample type and sort from newest to oldest
    const data = await WaterSample.find({ 'Client': clientName, 'Sample': sampleType}).sort({'Date': -1});

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default sampleTypesRouter;