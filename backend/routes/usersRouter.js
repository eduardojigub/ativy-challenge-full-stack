/* eslint-disable import/extensions */
import express from 'express';
import { getUserInfo } from '../controllers/userController.js';

const router = express.Router();

router.get('/me/info/', getUserInfo);

export default router;
