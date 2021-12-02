const express = require('express');

const boardController = require('../controllers/boardController');
const authController = require('./../controllers/authController');

// const multer = require('multer')();

const router = express.Router();

// 이 후 해당하는 모든 경로는 로그인이 되었나 안 되었나를 확인
router.use(authController.isLoggedIn);

router.route('/').post(boardController.createBoard);
// post(multer.single('voca'), boardController.createBoard);

module.exports = router;
