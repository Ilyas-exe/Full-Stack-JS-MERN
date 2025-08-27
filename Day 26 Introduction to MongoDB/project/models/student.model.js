const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Student schema
const studentSchema = new Schema({
  studentId: {
    type: Number,
    unique: true,
    
  },
  name: {
    type: String,
    
    trim: true
  },
  age: {
    type: Number,
    min: 16
  },
  major: {
    type: String,
    
  }
});


const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
