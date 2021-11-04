const express = require('express');
const auth = require('../auth');
const router = express.Router();
const TeacherController = require('../controllers/driverController');

//TODO Create Teacher
router.post('/', auth.verify, async (req, res) => {
  const result = await TeacherController.createTeacher(req.body);
  res.send(result);
});

//TODO Login
router.post('/login', async (req, res) => {
  const result = await TeacherController.login(req.body);
  res.send(result);
});

//TODO Get all Teacher
router.get('/', auth.verify, async (res) => {
  const result = await TeacherController.getAllTeacher();
  res.send(result);
});

//TODO get details
router.get('/details', auth.verify, async (req, res) => {
  const teacher = auth.decode(req.headers.authorization);
  const result = await TeacherController.detail({ teacherId: teacher.id });
  res.send(result);
});

//TODO Get Single Teacher
router.get('/:teacherId', auth.verify, async (req, res) => {
  let teacherId = req.params.teacherId;
  const result = await TeacherController.getOneTeacher({ teacherId });
  res.send(result);
});

//TODO Update Teacher
router.put('/', auth.verify, async (req, res) => {
  const result = await TeacherController.updateTeachers(req.body);
  res.send(result);
});

//TODO Delete Teacher
router.delete('/', auth.verify, async (req, res) => {
  const result = await TeacherController.deleteTeacher(req.body);
  res.send(result);
});

module.exports = router;
