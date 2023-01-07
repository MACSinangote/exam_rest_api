import express from 'express'
import { getAllStudent, getByIdStudent, addStudent, deleteStudent, updateStudent } from '../controllers/students.js' 
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergeParams: true})

/*
router.get('/', verifyToken, getCourses)
router.get('/:id', verifyToken, getCourse)
router.post('/', verifyToken, addCourse)
router.put('/:id', verifyToken, updateCourse)
router.delete('/:id', verifyToken, deleteCourse)
*/

router.post('/', addStudent)

export default router