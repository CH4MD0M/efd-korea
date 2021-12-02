const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const sendEmail = require('./../utils/email');
const crypto = require('crypto');

const createAuthenticationToken = () =>
    (
        crypto.randomBytes(256).toString('hex').substr(100, 5) +
        crypto.randomBytes(256).toString('base64').substr(50, 5)
    ).replace(/[\!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\#\[\]]/g, Math.floor(Math.random() * 10));

const createAuthenticationEmail = (req, token) => {
    const url = `${req.protocol}://${req.get(
        'host'
    )}/auth/emailVerification?token=${token}`;

    return `아래 인증 코드를 사용하여 계정을 활성화하십시오. \n ${url} \n이 전자 메일을 요청하지 않은 경우 무시해도 됩니다.`;
};

exports.signIn = (passport) => (req, res, next) => {
    passport.authenticate(
        'local',
        catchAsync(async (err, user) => {
            if (err) {
                console.error(err);
                return next(err);
            }

            if (!user)
                return res.status(401).json({
                    status: 'FAIL',
                    message: '아이디 또는 비밀번호가 정확한지 확인해주세요',
                });

            if (user && !user.email_verified) {
                const key_for_verify = createAuthenticationToken();
                await User.findOneAndUpdate({ email: user.email }, { key_for_verify });

                const message = createAuthenticationEmail(req, key_for_verify);

                await sendEmail({
                    email: user.email,
                    subject: '잘 오셨어요! 이메일 확인바랍니다.',
                    message,
                });
                //See Other:클라이언트가 요청한 리소스를 다른 URI에서 GET 요청을 통해 얻어야 할 때
                return res.status(303).json({
                    status: 'FAIL',
                    message:
                        '이메일 인증을 받은 계정이 아닙니다. 이메일 인증을 받아주시기 바랍니다.',
                });
            }

            req.logIn(user, (err) => {
                if (err) {
                    console.error(err);
                    return next(err);
                }
                res.status(200).json({ status: 'SUCCESS', user });
            });
        })
    )(req, res, next);
};

exports.google = (passport) =>
    passport.authenticate('google', { scope: ['profile', 'email'] });

exports.googleCallback = (passport) =>
    passport.authenticate('google', { failureRedirect: '/login' });

exports.redirect = (req, res, next) => {
    const session = req.session;
    res.status(200).json({ status: 'SUCCESS', session });
};

exports.logout = (req, res, next) => {
    req.logout();
    req.session.save(() => {
        res.status(200).json({ status: 'SUCCESS' });
    });
};

exports.signUp = catchAsync(async (req, res, next) => {
    const key_for_verify = createAuthenticationToken();

    const message = createAuthenticationEmail(req, key_for_verify);

    const { email, password, passwordConfirm, displayName } = req.body;

    const user = await User.create({
        email,
        password,
        passwordConfirm,
        displayName,
        key_for_verify,
    });

    await sendEmail({
        email,
        subject: '잘 오셨어요! 이메일 확인바랍니다.',
        message,
    });

    // CREATE
    res.status(201).json({
        status: 'SUCCESS',
        message: '인증 이메일을 보냈습니다.',
        data: {
            user,
        },
    });
});

exports.emailVerification = catchAsync(async (req, res, next) => {
    // 1) 토큰을 기반으로 사용자 가져오기
    const user = await User.findOne({
        key_for_verify: `${req.query.token}`,
    });

    // 2) 토큰이 만료되지 않았고 사용자가 있는 경우, 새 비밀번호를 설정합니다.
    // 요청한 URI의 리소스가 일시적으로 변경되었음을 의미
    if (!user) {
        return res.status(302).json({
            status: 'FAIL',
            message:
                '토큰이 만료되었거나 유효하지 않습니다. 다시 확인하여 주시기 바랍니다.',
        });
    }

    //3) 이메일 인증에 대한 email_verified 속성 업데이트
    user.email_verified = true;
    user.key_for_verify = undefined;
    await user.save({ validateBeforeSave: false });

    res.status(200).json({
        status: 'SUCCESS',
        message: '이메일 인증에 성공했습니다.',
    });
});

// 로그인 한 사람만 접근 가능
exports.isLoggedIn = (req, res, next) => {
    // return the true || false
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(403).json({
            status: 'FAIL',
            message: '로그인을 후 이용이 가능합니다.',
        });
    }
};

// 로그인하지 않은 사람만 접근 가능
exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/');
    }
};

// 권한 제한
exports.restrictTo =
    (...roles) =>
    (req, res, next) => {
        if (roles.includes(req.user.roles)) {
            next();
        } else {
            res.status(400).json({
                status: 'FAIL',
                message: '이용 권한이 없습니다.',
            });
        }
    };
