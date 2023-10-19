import { Router } from 'express';
import { createReaction, deleteReaction } from '../controllers/reactionController.js';

const router = Router();

router.route('/reactions').post(createReaction);

router.route('/reactions/:reactionId').delete(deleteReaction);

export default Router;