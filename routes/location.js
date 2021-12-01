const express = require('express');
const auth = require('../auth');
const router = express.Router();
const LocationController = require('../controllers/locationController');

//TODO Add Location
router.post('/', async (req, res) => {
  const result = await LocationController.addLocation(req.body);
  res.send(result);
});

//TODO Get all Active Location
router.get('/', async (req, res) => {
  const result = await LocationController.getAllActiveLocation();
  res.send({
    listLocation: result,
  });
});

//TODO Get all Active Location by user type
router.post('/user-type', async (req, res) => {
  const result = await LocationController.getLocationByUserType(req.body);
  res.send({
    listLocation: result,
  });
});

//TODO Get Single Location
router.get('/:locationId', async (req, res) => {
  let locationId = req.params.locationId;
  const result = await LocationController.getOneLocation({ locationId });
  res.send(result);
});

//TODO Update Location
router.put('/', async (req, res) => {
  const result = await LocationController.updatePosition(req.body);
  res.send(result);
});

//TODO Deactivate Location
router.put('/deactivate', async (req, res) => {
  const result = await LocationController.deactivateLocation(req.body);
  res.send(result);
});

module.exports = router;
