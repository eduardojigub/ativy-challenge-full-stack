/* eslint-disable import/extensions */
import express from 'express';
import { getUserById, updateUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/me', getUserById);
router.put('/me', updateUser);

export default router;
