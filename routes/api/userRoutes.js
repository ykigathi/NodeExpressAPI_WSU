import express from 'express';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../../controllers/userController.js';
// import UserController from '../../controllers/userController.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', createUser);
// Add other user-related API routes as needed

export default router;