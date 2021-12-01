const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const auth = require('../auth');

// ! Check Admin Username
module.exports.checkAdminUsername = async (params) => {
  const result = await Admin.find({ username: params.username });
  return result.length > 0 ? true : false;
};

// ! Create Admin
module.exports.createAdmin = async (params) => {
  let newAdmin = new Admin({
    firstname: params.firstname,
    lastname: params.lastname,
    username: params.username,
    password: bcrypt.hashSync(params.password, 20),
    superAdmin: params.superAdmin,
  });
  let result = await newAdmin.save();
  return result ? true : false;
};

// ! Check Admin Login
module.exports.login = async (params) => {
  const result = await Admin.findOne({ username: params.username });
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

// //Manage Students
// //start of students
// //NOTE Create Student, PaymentStatus and Admission Status
// module.exports.createStudent = async (params) => {
//   let newStudent = new Student({
//     firstname: params.firstname,
//     lastname: params.lastname,
//     age: params.age,
//     birthday: params.birthday,
//     addresss: params.addresss,
//     mobileNo: params.mobileNo,
//     course: params.course,
//     year: params.year,
//     parentsName: params.parentsName,
//     parentsMobileNo: params.parentsMobileNo,
//     username: params.username,
//     password: bcrypt(params.password, 20),
//   });
//   let resultStudent = await newStudent.save();

//   let newPayment = new Payment({
//     name: 'New Enrollment',
//     amount: params.amount,
//     payor: resultStudent.id,
//     createdBy: resultStudent.id,
//   });
//   const resultPayment = await newPayment.save();

//   let newAdmission = new Admission({
//     studentId: resultStudent.id,
//     paymentId: resultPayment.id,
//   });

//   const result = await newAdmission.save();

//   return result ? true : false;
// };
// //TODO Get All Student
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
// //end of student

// //Manage Sub-Admins
// //start of sub-admin
// //TODO Create Sub Admin
// module.exports.createAdmin = async (params) => {
//   let newAdmin = new Admin({
//     firstname: params.firstname,
//     lastname: params.lastname,
//     age: params.age,
//     gender: params.gender,
//     birthday: params.birthday,
//     addresss: params.addresss,
//     mobileNo: params.mobileNo,
//     superAdmin: params.superAdmin,
//     username: params.username,
//     password: bcrypt.hashSync(params.password, 15),
//   });
//   let result = await newAdmin.save();
//   return result ? true : false;
// };

// //TODO Details
// module.exports.detail = async (params) => {
//   const result = await Admin.findById(params.adminId);
//   result.password = undefined;
//   return result;
// };

// //TODO Get All Sub Admin
// module.exports.getAllAdmin = async () => {
//   const result = await Admin.find({});
//   result.password = undefined;
//   return result;
// };
// //TODO Single Sub Admin
// module.exports.getOneAdmin = async (params) => {
//   const result = await Admin.findById(params.adminId);
//   result.password = undefined;
//   return result;
// };
// //TODO Update Sub Admin
// module.exports.updateAdmin = async (params) => {
//   let updateAdmin = {
//     firstname: params.firstname,
//     lastname: params.lastname,
//     age: params.age,
//     birthday: params.birthday,
//     addresss: params.addresss,
//     mobileNo: params.mobileNo,
//   };
//   let result = await Admin.findByIdAndUpdate(params.adminId, updateAdmin);
//   return result ? true : false;
// };
// //TODO Delete Sub Admin
// module.exports.deleteAdmin = async (params) => {
//   const result = await Admin.findByIdAndDelete(params.adminId);
//   return result ? true : false;
// };
// //end of sub-admin

// //Manage Class
// //start of class
// //TODO Create Section
// module.exports.createSection = async (params) => {
//   let newSection = new Section({
//     name: params.name,
//     subjects: params.subjects,
//     students: params.students,
//     maxStudent: params.maxStudent,
//     createdBy: params.createdBy,
//   });
//   let result = await newSection.save();
//   return result ? true : false;
// };

// //TODO Get All Section
// module.exports.getAllSection = async () => {
//   const result = await Section.find({});
//   return result;
// };

// //TODO Single Section
// module.exports.getOneSection = async (params) => {
//   const result = await Section.findById(params.sectionId);
//   return result;
// };

// //TODO Update Section
// module.exports.updateSection = async (params) => {
//   let updateSection = {
//     name: params.name,
//     maxStudent: params.maxStudent,
//   };
//   let result = await Section.findByIdAndUpdate(params.sectionId, updateSection);
//   return result ? true : false;
// };
// //TODO Delete Section
// module.exports.deleteSection = async (params) => {
//   const result = await Section.findByIdAndDelete(params.section);
//   return result ? true : false;
// };
// //TODO enroll student to a Section
// module.exports.enrollStudentToSection = async (params) => {
//   const section = await Section.findById(params.sectionId);
//   section.students.push({
//     studentId: params.studentId,
//   });
//   let updateEnrollment = {
//     sectionId: params.sectionId,
//   };
//   const resultStudent = await Student.findByIdAndUpdate(
//     params.studentId,
//     updateEnrollment
//   );
//   const result = await section.save();
//   return result ? (resultStudent ? true : false) : false;
// };
// //end of class

// //Mamage Course
// // Start of course
// //TODO Create Course
// module.exports.createCourse = async (params) => {
//   let newCourse = new Course({
//     name: params.name,
//     maxStudent: params.maxStudent,
//     createdBy: params.createdBy,
//   });
//   let result = await newCourse.save();
//   return result ? true : false;
// };

// //TODO Add Subjects to Course
// module.exports.addSubjectToCourse = async (params) => {
//   const courseResult = await Course.findById(courseId);
//   courseResult.subjects.push({
//     subjectId: params.subjectId,
//   });
//   const result = await courseResult.save();
//   return result ? true : false;
// };

// //TODO Get All Course
// module.exports.getAllCourses = async () => {
//   const result = await Course.find({});
//   return result;
// };

// //TODO Single Course
// module.exports.getOneCourse = async (params) => {
//   const result = await Course.findById(params.courseId);
//   return result;
// };

// //TODO Update Course
// module.exports.updateCourse = async (params) => {
//   let updateCourse = {
//     name: params.name,
//     maxStudent: params.maxStudent,
//   };
//   let result = await Course.findByIdAndUpdate(params.courseId, updateCourse);
//   return result ? true : false;
// };

// //TODO Delete Course
// module.exports.deleteCourse = async (params) => {
//   const result = await Course.findByIdAndDelete(params.courseId);
//   return result ? true : false;
// };
// //TODO enroll student to a Course
// module.exports.enrollStudentToCourse = async (params) => {
//   const course = await Course.findById(params.courseId);
//   course.students.push({
//     studentId: params.studentId,
//   });
//   let updateEnrollment = {
//     courseId: params.courseId,
//   };
//   const resultStudent = await Student.findByIdAndUpdate(
//     params.studentId,
//     updateEnrollment
//   );
//   const result = await course.save();
//   return result ? (resultStudent ? true : false) : false;
// };
// // End of course

// //Manage Subject
// //start of subject
// //TODO Create Subject
// module.exports.createSubject = async (params) => {
//   let newSubject = new Subject({
//     name: params.name,
//     subjectType: params.subjectType,
//     teacer: params.teacer,
//     subjectStart: params.subjectStart,
//     subjectEnd: params.subjectEnd,
//     room: params.room,
//     maxStudent: params.maxStudent,
//     createdBy: params.createdBy,
//   });
//   let result = await newSubject.save();
//   return result ? true : false;
// };

// //TODO Get All Subject
// module.exports.getAllSubjects = async () => {
//   const result = await Subject.find({});
//   return result;
// };
// //TODO Single Subject
// module.exports.getOneSubject = async (params) => {
//   const result = await Subject.findById(params.adminId);
//   return result;
// };
// //TODO Update Subject
// module.exports.updateSubject = async (params) => {
//   let updateSubject = {
//     name: params.name,
//     subjectType: params.subjectType,
//     teacer: params.teacer,
//     subjectStart: params.subjectStart,
//     subjectEnd: params.subjectEnd,
//     room: params.room,
//     maxStudent: params.maxStudent,
//   };
//   let result = await Subject.findByIdAndUpdate(params.subjectId, updateSubject);
//   return result ? true : false;
// };
// //TODO Delete Subject
// module.exports.deleteSubject = async (params) => {
//   const result = await Subject.findByIdAndDelete(params.subjectId);
//   return result ? true : false;
// };

// //TODO assign a subject to a class or course
// module.exports.addSubjectToClass = async (params) => {
//   const section = await Section.findById(paras.sectionId);
//   section.subjects.push({
//     subjectId: params.subjectId,
//   });
//   const result = await section.save();
//   return result ? true : false;
// };

// module.exports.addSubjectToCourse = async (params) => {
//   const course = await Course.findById(paras.courseId);
//   course.subjects.push({
//     subjectId: params.subjectId,
//   });
//   const result = await course.save();
//   return result ? true : false;
// };

// //TODO add student to class or course
// module.exports.addStudentToClass = async (params) => {
//   const section = await Section.findById(paras.sectionId);
//   section.students.push({
//     studentId: params.studentId,
//   });
//   const result = await section.save();
//   return result ? true : false;
// };

// module.exports.addStudentToCourse = async (params) => {
//   const course = await Course.findById(paras.courseId);
//   course.students.push({
//     studentId: params.studentId,
//   });
//   const result = await course.save();
//   return result ? true : false;
// };
// //end of subject

// //Manage Payments
// //start of Payments
// //TODO Get All Payment
// module.exports.getAllPayment = async () => {
//   const result = await Payment.find({});
//   return result;
// };

// //TODO Single Payment
// module.exports.getOnePayment = async (params) => {
//   const result = await Payment.findById(params.paymentId);
//   return result;
// };

// //TODO Update Payment
// module.exports.updatePayment = async (params) => {
//   let updatePayment = {
//     remarks: params.remarks,
//     status: params.status,
//   };
//   let result = await Payment.findByIdAndUpdate(params.paymentId, updatePayment);
//   return result ? true : false;
// };
// //TODO Delete Payment
// module.exports.deletePayment = async (params) => {
//   const result = await Payment.findByIdAndDelete(params.paymentId);
//   return result ? true : false;
// };
// //end of Payments

// //Update Admission
// //start of Admission
// //TODO Update Admission and update statut in student
// module.exports.updateAdmission = async (params) => {
//   let updateEnrollmentStatus = {
//     status: params.studentStatus,
//   };
//   const resultStudentUpdate = await Student.findByIdAndUpdate(
//     params.studentId,
//     updateEnrollmentStatus
//   );
//   let resultAdmission = false;
//   if (resultStudentUpdate) {
//     let updateAdmission = {
//       enrollmentStatus: params.admissionEnrollmentStatus,
//     };
//     resultadmission = await Admission.findByIdAndUpdate(
//       admissionId,
//       updateAdmission
//     );
//   }
//   return resultAdmission ? true : false;
// };

//end of Admission
