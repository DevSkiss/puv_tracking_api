const Section = require('../models/Location');

//TODO Create Section
module.exports.createSection = async (params) => {
  let newSection = new Section({
    name: params.name,
    subjects: params.subjects,
    students: params.students,
    maxStudent: params.maxStudent,
    createdBy: params.createdBy,
  });
  let result = await newSection.save();
  return result ? true : false;
};

//TODO Get All Section
module.exports.getAllSection = async () => {
  const result = await Section.find({});
  return result;
};

//TODO Single Section
module.exports.getOneSection = async (params) => {
  const result = await Section.findById(params.sectionId);
  return result;
};

//TODO Update Section
module.exports.updateSection = async (params) => {
  let updateSection = {
    subject: params.subject,
    maxStudent: params.maxStudent,
  };
  let result = await Section.findByIdAndUpdate(params.sectionId, updateSection);
  return result ? true : false;
};

//TODO Delete Class
module.exports.deleteSection = async (params) => {
  const result = await Section.findByIdAndDelete(params.section);
  return result ? true : false;
};

//TODO enroll student to a class or course
//FIXME change the push
module.exports.enrollStudentToClass = async (params) => {
  let updatedEnrollment = {
    sectionId: params.sectionId,
  };
  const student = await Student.findByIdAndUpdate(
    params.studentId,
    updatedEnrollment
  );
  const section = await Section.findById(sectionId);
  section.students.push({
    studentId: studentId,
  });
  const result = await student.save();

  return result ? (student ? true : false) : false;
};
