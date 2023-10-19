import { Router } from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} from '../controllers/userController.js';

const router = Router();

router.route('/users').get(getAllUsers).post(createUser);

router.route('/users/:userId').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/users/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

export default Router;
