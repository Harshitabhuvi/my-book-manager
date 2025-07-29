import { Router } from 'express';
const router = Router();
import { createMessage } from '../controllers/messageController';

router.post('/', createMessage);

export default router;
