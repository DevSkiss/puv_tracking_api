const Driver = require('../models/Driver');
const bcrypt = require('bcrypt');
const auth = require('../auth');
const LocationController = require('../controllers/locationController');

//TODO Check if username exist
module.exports.checkDriverUsername = async (params) => {
  const result = await Driver.find({ username: params.username });
  return result.length > 0 ? true : false;
};
//TODO Create Teacer
module.exports.createDriver = async (params) => {
  let newDriver = new Driver({
    firstname: params.firstname,
    lastname: params.lastname,
    plate_no: params.plate_no,
    license_no: params.license_no,
    mobile_no: params.mobile_no,
    address: params.address,
    username: params.username,
    password: bcrypt.hashSync(params.password, 15),
  });
  let result = await newDriver.save();
  result.password = '';
  LocationController.addLocation({
    latitude: '11.123',
    longitude: '125.123',
    userId: result._id,
    user_type: 'driver',
  });
  return result;
};

//TODO login
module.exports.login = async (params) => {
  const result = await Driver.findOne({ username: params.username });
  if (result == null) {
    return false;
  }
  const isPasswordMatched = bcrypt.compareSync(
    params.password,
    result.password
  );
  if (isPasswordMatched) {
    result.password = '';
    return {
      user: result,
      access: auth.createAccessToken(result),
    };
  } else {
    return false;
  }
};

// //TODO Details
// module.exports.detail = async (params) => {
//   const result = await Teacher.findById(params.teacherId);
//   result.password = undefined;
//   return result;
// };

// //TODO Get All Teacher
// module.exports.getAllTeacher = async () => {
//   const result = await Teacher.find({});
//   result.password = undefined;
//   return result;
// };

// //TODO Single Teacher
// module.exports.getOneTeacher = async (params) => {
//   const result = await Teacher.findById(params.teacherId);
//   result.password = undefined;
//   return result;
// };

// //TODO Update Teacher
// module.exports.updateTeacher = async (params) => {
//   let updateTeacher = {
//     firstname: params.firstname,
//     lastname: params.lastname,
//     age: params.age,
//     birthday: params.birthday,
//     addresss: params.addresss,
//     mobileNo: params.mobileNo,
//     specialization: params.specialization,
//   };
//   let result = await Teacher.findByIdAndUpdate(params.teacherId, updateTeacher);
//   return result ? true : false;
// };

// //TODO Delete Teacher
// module.exports.deleteTeacher = async (params) => {
//   const result = await Teacher.findByIdAndDelete(params.teacherId);
//   return result ? true : false;
// };
// //end of teacher
