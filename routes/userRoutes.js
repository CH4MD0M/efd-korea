const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.login);
router.get('/emailVerification', authController.emailVerification);

module.exports = router;
