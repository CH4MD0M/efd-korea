const express = require('express');
const viewsController = require('./../controllers/viewController');

const router = express.Router();

router.route('/').get(viewsController.getOverview);

router.route('/login').get(viewsController.login);
router.route('/signup').get(viewsController.signup);

module.exports = router;
