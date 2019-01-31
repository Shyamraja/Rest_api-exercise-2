'use strict'

var varstudentsstudentsIdController = require('./studentsstudentsIdControllerService');

module.exports.funcstudentsstudentsIdPARAMETERS = function funcstudentsstudentsIdPARAMETERS(req, res, next) {
  varstudentsstudentsIdController.funcstudentsstudentsIdPARAMETERS(req.swagger.params, res, next);
};

module.exports.getStudents = function getStudents(req, res, next) {
  varstudentsstudentsIdController.getStudents(req.swagger.params, res, next);
};

module.exports.updateStudents = function updateStudents(req, res, next) {
  varstudentsstudentsIdController.updateStudents(req.swagger.params, res, next);
};

module.exports.deleteStudents = function deleteStudents(req, res, next) {
  const deleteID = req.undefined.value.deleteID;
console.log("students delete id", deleteID);
let deleteIndex = null;
students.map( callbackfn: (student, index) => {
  if (student.studentID == deleteID) {
    deleteIndex = index;
  }
  });
  if (deleteIndex >= 0){
    grades.splice(deleteIndex, 1);
    res.send('STUDENTS DELETE OK');
  } else {
    res.send('NOT FOUND');
  }

  };

module.exports.funcstudentsstudentsIdPOST = function funcstudentsstudentsIdPOST(req, res, next) {
  varstudentsstudentsIdController.funcstudentsstudentsIdPOST(req.swagger.params, res, next);
};
'use strict'

var varstudentsstudentsIdController = require('./studentsstudentsIdControllerService');

module.exports.funcstudentsstudentsIdPARAMETERS = function funcstudentsstudentsIdPARAMETERS(req, res, next) {
  varstudentsstudentsIdController.funcstudentsstudentsIdPARAMETERS(req.swagger.params, res, next);
};

module.exports.getStudents = function getStudents(req, res, next) {
  varstudentsstudentsIdController.getStudents(req.swagger.params, res, next);
};

module.exports.updateStudents = function updateStudents(req, res, next) {
  
  
module.exports.deleteStudents = function deleteStudents(req, res, next) {
 const deleteID = req.undefined.value.deleteID;
console.log("students delete id", deleteID);
let deleteIndex = null;
students.map( callbackfn: (STUDENTS, index) => {
  if (student.studentID = deleteID) {
    deleteIndex = index;
  }
  });
  if (deleteIndex >= 0){
    grades.splice(deleteIndex, 1);
    res.send('STUDENTS DELETE OK');
  } else {
    res.send('NOT FOUND');
  }

  };


module.exports.funcstudentsstudentsIdPOST = function funcstudentsstudentsIdPOST(req, res, next) {
  varstudentsstudentsIdController.funcstudentsstudentsIdPOST(req.swagger.params, res, next);
};