const express = require('express');
const studyController = require('../controllers/studyController');
const multer = require('multer')();
// const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router
    .route('/vocabulary')
    .get(studyController.getAllVoca)
    .post(multer.single('voca'), studyController.createVoca);

router
    .route('/conversation')
    .get(studyController.getConverse)
    .post(multer.single('conversation'), studyController.createConverse);

module.exports = router;
