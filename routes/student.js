import express from 'express';
import { getStudents, createStudent } from '../controllers/student.js';
import student from '../modles/student.js';
const router = express.Router();

router.get('/', getStudents);
router.get('/', createStudent); 

export default router;