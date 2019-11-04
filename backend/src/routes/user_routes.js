const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user_controller');

router.route('/register').post(UserController.registerUser);
router.route('/login').post(UserController.loginUser);
router.route('/:id').put(UserController.updateUser);

module.exports = router;