import { Router } from 'express';
import studentsRouter from './students.js';
import authRouter from './auth.js';

const router = Router();

router.use('/contacts', studentsRouter);
router.use('/auth', authRouter);

export default router;
