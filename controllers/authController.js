const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const sendEmail = require('./../utils/email');

const createAuthenticationToken = () =>
    crypto.randomBytes(256).toString('hex').substr(100, 5) +
    crypto.randomBytes(256).toString('base64').substr(50, 5);

const createAuthenticationEmail = (req, token) => {
    const url = `${req.protocol}://${req.get(
        'host'
    )}/user/emailVerification?token=${token}`;

    return `아래 인증 코드를 사용하여 계정을 활성화하십시오. \n ${url} \n이 전자 메일을 요청하지 않은 경우 무시해도 됩니다.`;
};

exports.signup = catchAsync(async (req, res, next) => {
    const key_for_verify = createAuthenticationToken();

    const message = createAuthenticationEmail(req, key_for_verify);

    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        key_for_verify,
    });
    try {
        await sendEmail({
            email: newUser.email,
            subject: '잘 오셨어요! 이메일 확인바랍니다.',
            message,
        });

        res.status(200).json({
            status: 'SUCCESS',
            message: '인증 이메일을 보냈습니다.',
            data: {
                newUser,
            },
        });
    } catch (err) {
        newUser.key_for_verify = undefined;
        await newUser.save({ validateBeforeSave: false });

        return next(
            new AppError(
                '이메일을 보내는 동안 오류가 발생했습니다. 나중에 다시 시도하세요!',
                500
            )
        );
    }
});

exports.emailVerification = catchAsync(async (req, res, next) => {
    // 1) 토큰을 기반으로 사용자 가져오기

    const user = await User.findOne({
        key_for_verify: req.query.token,
    });

    // 2) 토큰이 만료되지 않았고 사용자가 있는 경우, 새 비밀번호를 설정합니다.
    if (!user) {
        return next(
            new AppError(
                '토큰이 만료되었거나 유효하지 않습니다. 다시 확인하여 주시기 바랍니다.',
                400
            )
        );
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

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    // 1) 이메일, 비밀번호로 사용자 존재 여부 확인
    if (!email || !password) {
        return next(new AppError('아이디 또는 비밀번호를 입력해주세요', 400));
    }
    // 2) 사용자가 있는지, 비밀번호가 올바른지 확인
    const user = await User.findOne({ email }).select('+password');
    const correct = await user.correctPassword(password, user.password); // true || false

    if (!user || !correct) {
        // return next(new AppError('아이디 또는 비밀번호가 정확한지 확인해주세요', 401));
        return res.status(401).json({
            status: 'FAIL',
            message: '아이디 또는 비밀번호가 정확한지 확인해주세요',
        });
    }

    if (!user.email_verified) {
        const key_for_verify = createAuthenticationToken();

        const user = await User.findOneAndUpdate({ email }, { key_for_verify });

        const message = createAuthenticationEmail(req, key_for_verify);
        try {
            await sendEmail({
                email: user.email,
                subject: '잘 오셨어요! 이메일 확인바랍니다.',
                message,
            });

            return res.status(200).json({
                status: 'FAIL',
                message: '재인증 이메일을 보냈습니다.',
            });
        } catch (err) {
            user.key_for_verify = undefined;
            await user.save({ validateBeforeSave: false });

            return next(
                new AppError(
                    '재인증 이메일을 보내는 동안 오류가 발생했습니다. 나중에 다시 시도하세요!',
                    500
                )
            );
        }
    }
    // 3) 이상이 없으면 클라이언트로 토큰 전송
    res.status(200).json({
        status: 'SUCCESS',
        data: {
            user,
        },
    });
});

exports.protect = catchAsync(async (req, res, next) => {
    // 1) 토큰 가져오기 및 확인
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    // console.log(req.headers);
    if (!token) {
        return next(
            new AppError('로그인 하지 않았습니다. 로그인을 해주시기 바랍니다.', 401)
        );
    }

    // 2) 토큰 검증
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3) 사용자가 여전히 존재하는지 확인(계정이 삭제 되었는데 토큰은 남아있을 수 있다.)
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
        return next(new AppError('사용자의 토큰이 더 이상 존재하지 않습니다.', 401));
    }
    req.user = currentUser;
    next();
});
