const express = require('express');
const auth = require('../auth');
const router = express.Router();
const PassengerController = require('../controllers/passengerController');

//TODO Create Passenger
router.post('/', async (req, res) => {
  console.log('Passenger Routes');
  const result = await PassengerController.createPassenger(req.body);

  res.send(result);
});

//TODO Login
router.post('/login', async (req, res) => {
  const result = await PassengerController.login(req.body);
  if (result == false) {
    res.send(404).send('Incorrect Username or Password');
  }
  res.send(result);
});

// //TODO Get all Student
// router.get('/', auth.verify, async (res) => {
//   const result = await StudentController.getAllStudent();
//   res.send(result);
// });

// //TODO get details
// router.get('/details', auth.verify, async (req, res) => {
//   const student = auth.decode(req.headers.authorization);
//   const result = await StudentController.detail({ studentId: student.id });
//   res.send(result);
// });

// //TODO Get Single Student
// router.get('/:studentId', auth.verify, async (req, res) => {
//   let studentId = req.params.studentId;
//   const result = await StudentController.getOneStudent({ studentId });
//   res.send(result);
// });

// //TODO Update Student
// router.put('/', auth.verify, async (req, res) => {
//   const result = await StudentController.updateStudent(req.body);
//   res.send(result);
// });

// //TODO Delete Student
// router.delete('/', auth.verify, async (req, res) => {
//   const result = await StudentController.deleteStudent(req.body);
//   res.send(result);
// });

module.exports = router;
