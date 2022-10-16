/* eslint-disable import/extensions */
import express from 'express';
import { createTask, getAllTasks, getCurrentUserTasks } from '../controllers/taskController.js';

const router = express.Router();

router.post('/', createTask);
router.get('/all', getAllTasks);
router.get('/myTasks', getCurrentUserTasks);

export default router;
