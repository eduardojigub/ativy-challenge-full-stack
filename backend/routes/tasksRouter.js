/* eslint-disable import/extensions */
import express from 'express';
import { createTask, getAllTasks } from '../controllers/taskController.js';

const router = express.Router();

router.post('/', createTask);
router.get('/all', getAllTasks);

export default router;
