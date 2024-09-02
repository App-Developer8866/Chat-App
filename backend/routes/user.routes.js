import express from 'express';
import protectRoute from '../middlewares/protectRoutes.js';
import { getAllUsers } from '../controllers/user.controllers.js';

const router = express.Router();

router.get('/', protectRoute, getAllUsers);

export default router;
