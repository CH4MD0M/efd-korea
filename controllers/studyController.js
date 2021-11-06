const Voca = require('./../models/vocabularyModel');
const Conversation = require('./../models/conversationModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllVoca = catchAsync(async (req, res, next) => {
    const voca = await Voca.find();

    res.status(200).json({ status: 'SUCCESS', data: { voca } });
});

exports.createVoca = catchAsync(async (req, res, next) => {
    const converse = await Voca.create(req.body);

    res.status(200).json({ status: 'SUCCESS', data: { converse } });
});

exports.getConverse = catchAsync(async (req, res, next) => {
    const converse = await Conversation.find();

    res.status(200).json({ status: 'SUCCESS', data: { converse } });
});

exports.createConverse = catchAsync(async (req, res, next) => {
    const converse = await Conversation.create(req.body);

    res.status(200).json({ status: 'SUCCESS', data: { converse } });
});

exports.getVocaStats = catchAsync(async (req, res, next) => {
    const stats = await Tour.aggregate([
        { $match: { ratingsAverage: { $gte: 4.5 } } },
        {
            $group: {
                _id: { $toUpper: '$difficulty' }, // 지정한 필드별로 보여줌
                numTours: { $sum: 1 },
                numRatings: { $sum: '$ratingsQuantity' },
                avgRating: { $avg: '$ratingsAverage' },
                avgPrice: { $avg: '$price' },
                minPrice: { $min: '$price' },
                maxPrice: { $max: '$price' },
            },
        },
        { $sort: { avgPrice: 1 } },
        //   { $match: { _id: { $ne: 'EASY' } /* 지정한 놈 제외 */ } }
    ]);

    res.status(200).json({
        status: 'success',
        data: { stats },
    });
});
