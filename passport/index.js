module.exports = (app) => {
    const User = require('./../models/userModel');

    const passport = require('passport');

    const local = require('./local');
    const google = require('./google');

    app.use(passport.initialize()); // req에 passport 설정 저장
    app.use(passport.session()); // req.session에 passport정보 저장

    // 로그인 성공 시 세션 스토어에 저장(로그인 시 딱 한 번만 사용됨)
    // req.session에 어떤 데이터를 저장할지 선택
    // 사용자 정보 객체를 세션에 아이디로 저장
    passport.serializeUser((user, done) => {
        done(null, user.email);
    });

    // 매 요청 시 실행.
    //세션에 저장한 아이디를 통해 사용자 정보 객체를(req.user를 통해) 불러옴
    passport.deserializeUser(async (email, done) => {
        try {
            const user = await User.findOne({ email });
            return done(null, user); // req.user에 조회한 정보 저장
        } catch (e) {
            console.error(e);
            return done(e);
        }
    });

    local(passport);
    google(passport);

    return passport;
};
