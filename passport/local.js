module.exports = (passport) => {
    const User = require('./../models/userModel');
    const LocalStrategy = require('passport-local').Strategy;
    const bcrypt = require('bcryptjs');

    passport.use(
        new LocalStrategy(
            { usernameField: 'email', passwordField: 'password' },
            async (email, password, cb) => {
                const user = await User.findOne({ email }).select('+password');
                if (user) {
                    bcrypt.compare(password, user.password, (err, result) => {
                        if (result) {
                            // 로그인 성공
                            return cb(null, user);
                        } else {
                            // 비밀번호 틀림
                            return cb(null, false, {
                                status: 'FAIL',
                                message: '비밀번호를 틀리셨습니다.',
                            });
                        }
                    });
                } else {
                    // 아이디부터 틀림
                    return cb(null, false, {
                        status: 'FAIL',
                        message: '없는 계정입니다.',
                    });
                }
            }
        )
    );
    return passport;
};
