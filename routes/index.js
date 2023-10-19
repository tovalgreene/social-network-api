import { Router } from 'express';

import userRoutes from './userRoutes';
router.use('/api/users', userRoutes);

import thoughtRoutes from './thoughtRoutes';
router.use('/api/thoughts', thoughtRoutes);

export default Router;
