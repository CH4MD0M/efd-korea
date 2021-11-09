const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();
module.exports = (passport) => {
    router.route('/signIn').post(authController.signIn(passport));

    router.route('/google').get(authController.google(passport));
    router
        .route('/google/callback')
        .get(authController.googleCallback(passport), authController.redirect);

    router.route('/logout').get(authController.logout);

    router.route('/signUp').post(authController.signUp);

    // router.get('/emailVerification', authController.emailVerification);

    return router;
};
