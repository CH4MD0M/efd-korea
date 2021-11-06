const express = require('express');
const studyController = require('../controllers/studyController');

const router = express.Router();

router
    .route('/vocabulary')
    .get(studyController.getAllVoca)
    .post(studyController.createVoca);

router
    .route('/conversation')
    .get(studyController.getConverse)
    .post(studyController.createConverse);

module.exports = router;
