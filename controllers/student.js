import StudentData from '../models/student.js';

export const getStudents = async (req, res)=> {
  try {
    const allStudents = await StudentData.find(); // finds student in allStudents variable and waits for it

    res.status(200).json(allStudents); //send back all students to client in form of JSON
  } catch (error) { //if error, send response
    res.status(404).json({ message: error.message })
  }
};

export const createStudent = async (req, res)=> { //client sends data as request 'req'
  const student = req.body; //whatever request you get from client side, the body of it will be stored here in student

  const newStudent = new StudentData(student);//use client side json into node from model 'StudentData'
  try{
    await newStudent.save(); //takes time to save in database, so must 'await', if await then add 'async'
    res.status(201).json(newStudent);
  } catch ( error) {
    res.status(409).json({ message: error.message })
  }
};
