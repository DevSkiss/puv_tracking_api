const express = require('express');
const auth = require('../auth');
const router = express.Router();
const SectionController = require('../controllers/locationController');

//TODO Create Section
router.post('/', async (req, res) => {
  const result = await SectionController.createSection(req.body);
  res.send(result);
});

//TODO Get all Section
router.get('/', auth.verify, async (res) => {
  const result = await SectionController.getAllSection();
  res.send(result);
});

//TODO Get Single Section
router.get('/:sectionId', auth.verify, async (req, res) => {
  let sectionId = req.params.sectionId;
  const result = await SectionController.getOneSection({ sectionId });
  res.send(result);
});

//TODO Update Section
router.put('/', auth.verify, async (req, res) => {
  const result = await SectionController.updateSection(req.body);
  res.send(result);
});

//TODO Delete Section
router.delete('/', auth.verify, async (req, res) => {
  const result = await SectionController.deleteSection(req.body);
  res.send(result);
});

module.exports = router;
