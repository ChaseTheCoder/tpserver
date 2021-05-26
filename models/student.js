import mongoose from 'mongoose';

const StudentSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  grade: String
});

const student = mongoose.model('student', StudentSchema);

export default student;