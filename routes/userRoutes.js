const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/authMiddleware');

// Public Routes
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/usermeta/:id', userController.getUserMetaById);

// Protected Routes
router.get('/users/:id', authenticateToken, userController.getUserById);
router.put('/users/:id', authenticateToken, userController.updateUser);
router.delete('/users/:id', authenticateToken, userController.deleteUser);

module.exports = router;
