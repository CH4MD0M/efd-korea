const catchAsync = require('./../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
    const user = req.user;

    res.status(200).render('overview', { title: 'EFD-KOREA', user });
});

exports.login = catchAsync(async (req, res, next) => {
    res.status(200).render('login', { title: 'EFD-KOREA' });
});

exports.signup = catchAsync(async (req, res, next) => {
    res.status(200).render('signup', { title: 'EFD-KOREA' });
});
