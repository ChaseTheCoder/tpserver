export const getStudents = async (req, res)=> {
  try {
    const allStudents = await student.find(); // finds student in allStudents variable

    res.status(200).json(allStudents); //send back all students to client
  } catch (error) { //if error, send response
    res.status(404).json({ message: error.message })
  }
};

export const createStudent = async (req, res)=> {
  const student = req.body; //whatever request you get from client side, the body of it will be stored here in student

  const newStudent = new student(student)//smart enough to know which one is the model and varialbe
   try{
     await newStudent.save(); //takes time to save, so must 'await', if await then add 'async'
     res.status(201).json(newStudent);
   } catch (error) {
     res.status(409).json({ message: error.message })
   }
};