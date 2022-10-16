/* eslint-disable import/extensions */
import express from 'express';
import authRoutes from './authRouter.js';
import usersRoutes from './usersRouter.js';
import tasksRoutes from './tasksRouter.js';
import checkAuth from '../middlewares/checkAuth.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', checkAuth, usersRoutes);
router.use('/tasks', checkAuth, tasksRoutes);

export default router;
