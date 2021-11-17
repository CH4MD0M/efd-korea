module.exports = (app) => {
    const User = require('./../models/userModel');

    const passport = require('passport');

    const local = require('./local');
    const google = require('./google');

    app.use(passport.initialize());
    app.use(passport.session()); // req.session에 passport정보 저장

    // 로그인 성공 시 세션 스토어에 저장(로그인 시 딱 한 번만 사용됨)
    // req.session에 어떤 데이터를 저장할지 선택
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    // 매 요청 시 실행.
    passport.deserializeUser((user, done) => {
        User.findOne({ email: user.email }, (err, user) => {
            done(err, user);
        });
    });

    local(passport);
    google(passport);

    return passport;
};

// req.user 사용자 정보 담김
