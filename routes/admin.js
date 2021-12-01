const express = require('express');
const auth = require('../auth');
const router = express.Router();
const AdminController = require('../controllers/adminController');

//TODO Create Admin
router.post('/', async (req, res) => {
  const result = await AdminController.createAdmin(req.body);
  res.send(result);
});

//TODO Login Admin
router.post('/login', async (req, res) => {
  const result = await AdminController.login(req.body);
  if (result == false) {
    res.sendStatus(404).send('Incorrect Username or Password');
  }
  res.send(result);
});

// //TODO Get all Admin
// router.get('/', async (res) => {
//   const result = await AdminController.getAllAdmin();
//   res.send(result);
// });

// //details
// //TODO get details
// router.get('/details', auth.verify, async (req, res) => {
//   const admin = auth.decode(req.headers.authorization);
//   const result = await AdminController.detail({ adminId: admin.id });
//   res.send(result);
// });

// //TODO Get Single Admin
// router.get('/:adminId', auth.verify, async (req, res) => {
//   let adminId = req.params.adminId;
//   const result = await AdminController.getOneAdmin({ adminId });
//   res.send(result);
// });

// //TODO Update Admin
// router.put('/', auth.verify, async (req, res) => {
//   const result = await AdminController.updateAdmin(req.body);
//   res.send(result);
// });

// //TODO Delete Admin
// router.delete('/', auth.verify, async (req, res) => {
//   const result = await AdminController.deleteAdmin(req.body);
//   res.send(result);
// });

module.exports = router;
