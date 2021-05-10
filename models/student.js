import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  grade: String,
});

const student = mongoose.model('student', studentSchema);

export default student;