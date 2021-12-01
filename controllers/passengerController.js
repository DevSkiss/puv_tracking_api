const Passenger = require('../models/Passenger');
const locationController = require('../controllers/locationController');
const bcrypt = require('bcrypt');
const auth = require('../auth');

module.exports.createPassenger = async (params) => {
  console.log(params);
  let newPassenger = new Passenger({
    firstname: params.firstname,
    lastname: params.lastname,
    username: params.username,
    password: bcrypt.hashSync(params.password, 15),
  });
  let passenger = await newPassenger.save();
  passenger.password = '';
  locationController.addLocation({
    latitude: '11.123',
    longitude: '125.123',
    userId: passenger._id,
    user_type: 'passenger',
  });

  return passenger;
};

//! login
module.exports.login = async (params) => {
  const result = await Passenger.findOne({ username: params.username });
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

//! Details
// module.exports.detail = async (params) => {
//   const passenger = await Passenger.findById(params.passengerId);

//   result.password = undefined;
//   return result;
// };

// //TODO DELETE ALL THIS
// module.exports.getAllStudent = async () => {
//   const result = await Student.find({});
//   result.password = undefined;
//   return result;
// };
// //TODO Single Student
// module.exports.getOneStudent = async (params) => {
//   const result = await Student.findById(params.studentId);
//   result.password = undefined;
//   return result;
// };
// //TODO Update Student
// module.exports.updateStudent = async (params) => {
//   let updateStudent = {
//     firstname: params.firstname,
//     lastname: params.lastname,
//     age: params.age,
//     gender: params.gender,
//     birthday: params.birthday,
//     addresss: params.addresss,
//     mobileNo: params.mobileNo,
//   };
//   let result = await Student.findByIdAndUpdate(params.studentId, updateStudent);
//   return result ? true : false;
// };
// //TODO Delete Student
// module.exports.deleteStudent = async (params) => {
//   const result = await Student.findByIdAndDelete(params.studentId);
//   return result ? true : false;
// };
