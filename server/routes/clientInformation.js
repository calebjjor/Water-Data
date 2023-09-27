// clientNames.js
import express from 'express';
import WaterSample from '../models/WaterSample.js'
const clientInformationRouter = express.Router();

clientInformationRouter.get('/', async (req, res) => {
  try {
    // Get all distinct client names
    const clientNames = await WaterSample.distinct('Client');
    res.json(clientNames);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

clientInformationRouter.get('/:clientName', async (req, res) => {
  try {
    const clientName = req.params.clientName;
    // Get all distinct client names
    const clientData = await WaterSample.find({ "Client": clientName});
    const isoData = clientData[1];
    const infoArr = ["Client", "Address", "City", "State", "ZIP"];
    const clientInfo = [];
    for(const element of infoArr){
      clientInfo.push(isoData[element])
    }
    res.json(clientInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default clientInformationRouter