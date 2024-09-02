import express from 'express';
import { getMessagesByRecId, sendMessage } from '../controllers/message.controllers.js';
import protectRoute from '../middlewares/protectRoutes.js';

const router = express.Router();

router.get('/:id', protectRoute, getMessagesByRecId);
router.post('/send/:id', protectRoute, sendMessage);

export default router;
