module.exports = (passport) => {
    const User = require('./../models/userModel');
    const LocalStrategy = require('passport-local').Strategy;
    const catchAsync = require('./../utils/catchAsync');

    // const bcrypt = require('bcryptjs');

    passport.use(
        new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
                session: true, // 세션에 저장 여부
            },
            catchAsync(async (email, password, cb) => {
                const user = await User.findOne({ email }).select('+password');

                if (!user || !(await user.correctPassword(password, user.password)))
                    return cb(null, false);

                user.password = undefined;
                cb(null, user);
            })
        )
    );
    return passport;
};
