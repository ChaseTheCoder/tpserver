import mongoose from 'mongoose';

const StudentSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  grade: String
});

const Student = mongoose.model('student', StudentSchema);

export default Student;