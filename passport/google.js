module.exports = (passport) => {
    const User = require('./../models/userModel');

    const GoogleStrategy = require('passport-google-oauth20').Strategy;

    // 여기가 1번, 구글 로그인 성공하면 cb를 통해 serializeUser로 user정보 전달(로그인 시에만 쓰임) 그 후에는 deserializeUser를 실행해서 session에서 user를 꺼내 복원
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_SECRET,
                callbackURL: process.env.GOOGLE_CALLBACK_URL,
            },
            async (accessToken, refreshToken, profile, cb) => {
                const email = profile.emails[0].value;
                const users = await User.findOne({ email });

                if (!users)
                    cb(
                        JSON.stringify({
                            status: 'FAIL',
                            message: '회원가입을 해주시기 바랍니다.',
                        })
                    );

                if (users.googleId) {
                    cb(null, users);
                } else {
                    const user = await User.findOneAndUpdate(
                        { email },
                        { googleId: profile.id }
                    );

                    cb(null, user);
                }
            }
        )
    );
    return passport;
};
