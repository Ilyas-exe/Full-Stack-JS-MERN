const Student = require('../models/student.model.js')

// const handleErrors = (res, err) => {
//   console.error(err);
//   res.status(500).json({ message: 'Server error', error: err.message });
// };

exports.createStudent = async (req, res) => {
  try {
    const { studentId, name, age, major } = req.body;
    const newStudent = new Student({
      studentId,
      name,
      age,
      major,
    });
    await newStudent.save();
    res.status(201).json(newStudent)
  } catch (err) {
    res.status(400).json({ message: 'Error', error: err.message })
  }
  // handleErrors(res, err);
};
exports.getAllStudents = async(req, res) => {
  try {
    const students = await Student.find()
    res.status(200).json(students)
  } catch (error) {
    res.status(500).error({message : 'error',error : error.message})
  }
}

exports.getStudentById = async (req, res) => {
  try {
    const foundstudent = await Student.findOne({ studentId: req.params.id});
    if (!foundstudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(foundstudent);
  } catch (err) {
    handleErrors(res, err);
  }
};


exports.updateStudent = async (req, res) => {
  try {
    // const {studentId} = req.params.id;
    const updatedStudent = await Student.findOneAndUpdate({ studentId : req.params.id }, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Run schema validators on the update
    });

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(updatedStudent);
  } catch (err) {
      return res.status(400).json({ message: 'Error', error: err.message });
  }
  
};

exports.deleteStudent = async(req, res) => {
  try {
    // const {studentId} = req.params.id;
    const deleteStudent = await Student.findOneAndDelete({ studentId : req.params.id });

    if (!deleteStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student Deleted'});
  } catch (err) {
      return res.status(400).json({ message: 'Error', error: err.message });
  }
};