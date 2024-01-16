import express from 'express';
import UserController from '../../controllers/userController.js';

const router = express.Router();

// router.get('/health', (req, res) => {
//   res.json({ message: 'Server is healthy.' });
// });

router.get('/health', UserController.getAllUsers);

export default router;