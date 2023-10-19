import { Router } from 'express';

const router = Router();

import userRoutes from './userRoutes';
import thoughtRoutes from './thoughtRoutes';

router.use('/api/thoughts', thoughtRoutes);
router.use('/api/users', userRoutes);

export default router;
