const studentModel = require('../models/student.model.js')

exports.getAllStudents = (req,res) => {
    res.status(200).json(studentModel.getAll())
}

exports.getStudentById = (req, res) => {
    if (studentModel.getById(parseInt(req.params.id))) {
        res.status(200).json(studentModel.getById(parseInt(req.params.id)));
    } else {
        res.status(404).json({ message: "Student not found." });
    }
};

exports.createStudent = (req, res) => {
  try {
    const createdStudent = studentModel.create(req.body);
    res.status(201).json({ 
      message: "Student created successfully.", 
      data: createdStudent 
    });
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({ message: "An internal server error occurred." });
  }
};

exports.updateStudent = (req, res) => {
    const updatedStudent = studentModel.update(req.params.id, req.body);
    if (updatedStudent) {
        res.status(200).json({ message: "Student updated successfully.", data: updatedStudent });
    } else {    
        res.status(404).json({ message: "Student not found." });
    }
};

exports.deleteStudent = (req, res) => {
  try {
    // Call the model function to remove the student
    const wasRemoved = studentModel.remove(parseInt(req.params.id));

    if (wasRemoved) {
      // If the student was successfully removed, send a 204 (No Content) status
      res.status(204).send();
    } else {
      // If the student was not found, send a 404 (Not Found) status
      res.status(404).json({ message: "Student not found." });
    }
  } catch (error) {
    // Handle any unexpected server errors
    console.error("Error deleting student:", error);
    res.status(500).json({ message: "An internal server error occurred." });
  }
};