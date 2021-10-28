const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, '이름을 입력하세요.'],
        // validate: [validator.isAlpha, 'user name must only contain characters']
    },
    email: {
        type: String,
        required: [true, '이메일 입력은 필수입니다.'],
        unique: true,
        maxlength: [40, '이메일의 길이는 최대 40자 이하로 입력해야 합니다'],
        minlength: [10, '이메일의 길이는 최소 10자 이상 입력해야 합니다'],
        lowercase: true, // validator가 아닌 필수로 해야하는 조건
        validate: [validator.isEmail, '이메일형식에 맞지 않으니 확인 바랍니다.'],
    },
    password: {
        type: String,
        required: [true, '비밀번호를 입력해주세요'],
        minlength: [8, '비밀번호의 길이는 최소 8자 이상 입력해야 합니다'],
        validate: [validator.isStrongPassword, '비밀번호가 너무 쉽습니다.'],
        select: false,
    },
    passwordConfirm: {
        type: String,
        required: [true, '비밀번호 확인 해주세요'],
        validate: {
            // 이 기능은 CREATE & SAVE에만 작동함.
            validator: function (val) {
                // this를 사용하기 위해서 화살표 함수는 사용 불가
                return val === this.password;
            },
            message: '비밀번호가 다릅니다.',
        },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
});

// 회원가입 시 사용되는 pre 미들웨어
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);

    this.passwordConfirm = undefined;
    next();
});

// (resetPassword)
userSchema.pre('save', async function (next) {
    // 비밀번호가 수정된 적이 없거나 회원가입 하는 경우에는 그냥 보낸다.
    if (!this.isModified('password') || this.isNew) return next();

    this.passwordChangedAt = Date.now() - 1000;
    next();
});

userSchema.pre(/^find/, function (next) {
    this.find({ active: { $ne: false } });
    next();
});

// 로그인 시 사용
userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword); // return true || false
};

// (protect) 로그인 할 때 비밀번호 변경 이력이 있나 확인
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);

        return JWTTimestamp < changedTimestamp;
    }

    // False means NOT changed
    return false;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
