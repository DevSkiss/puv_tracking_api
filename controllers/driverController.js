const Teacher = require('../models/Driver');
const bcrypt = require('bcrypt');
const auth = require('../auth');

//TODO Check if username exist
module.exports.checkTeacherUsername = async (params) => {
  const result = await Teacher.find({ username: params.username });
  return result.length > 0 ? true : false;
};
//TODO Create Teacer
module.exports.createTeacher = async (params) => {
  let newTeacher = new Teacher({
    firstname: params.firstname,
    lastname: params.lastname,
    age: params.age,
    gender: params.gender,
    birthday: params.birthday,
    addresss: params.addresss,
    mobileNo: params.mobileNo,
    specialization: params.specialization,
    username: params.username,
    password: bcrypt.hashSync(params.password, 15),
  });
  let result = await newTeacher.save();
  return result ? true : false;
};

//TODO Details
module.exports.detail = async (params) => {
  const result = await Teacher.findById(params.teacherId);
  result.password = undefined;
  return result;
};

//TODO login
module.exports.login = async (params) => {
  const result = await Teacher.findOne({ username: params.username });
  if (result == null) {
    return false;
  }
  const isPasswordMatched = bcrypt.compareSync(
    params.password,
    result.password
  );
  if (isPasswordMatched) {
    return { access: auth.createAccessToken(result) };
  } else {
    return false;
  }
};

//TODO Get All Teacher
module.exports.getAllTeacher = async () => {
  const result = await Teacher.find({});
  result.password = undefined;
  return result;
};

//TODO Single Teacher
module.exports.getOneTeacher = async (params) => {
  const result = await Teacher.findById(params.teacherId);
  result.password = undefined;
  return result;
};

//TODO Update Teacher
module.exports.updateTeacher = async (params) => {
  let updateTeacher = {
    firstname: params.firstname,
    lastname: params.lastname,
    age: params.age,
    birthday: params.birthday,
    addresss: params.addresss,
    mobileNo: params.mobileNo,
    specialization: params.specialization,
  };
  let result = await Teacher.findByIdAndUpdate(params.teacherId, updateTeacher);
  return result ? true : false;
};

//TODO Delete Teacher
module.exports.deleteTeacher = async (params) => {
  const result = await Teacher.findByIdAndDelete(params.teacherId);
  return result ? true : false;
};
//end of teacher
