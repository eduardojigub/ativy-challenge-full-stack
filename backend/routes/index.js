/* eslint-disable import/extensions */
import express from 'express';
import authRoutes from './authRouter.js';
import usersRoutes from './usersRouter.js';
import tasksRoutes from './tasksRouter.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
router.use('/tasks', tasksRoutes);

export default router;
