/* eslint-disable import/extensions */
import express from 'express';
import {
  createTask, getAllTasks, getCurrentUserTasks, updateTask, deleteTask, getSingleTask,
} from '../controllers/taskController.js';

const router = express.Router();

router.post('/', createTask);
router.get('/all', getAllTasks);
router.get('/myTasks', getCurrentUserTasks);
router.put('/:taskId', updateTask);
router.get('/:taskId', getSingleTask);
router.delete('/:taskId', deleteTask);

export default router;
