import { Router } from 'express';
import {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} from '../controllers/thoughtController.js';

const router = Router();

router.route('/thoughts').get(getAllThoughts).post(createThought);

router
  .route('/thoughts/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route('/thoughts/:thoughtId/reactions').post(createReaction);

router.route('/thoughts/:thoughtId/reactions/:reactionId').delete(deleteReaction);

export default Router;