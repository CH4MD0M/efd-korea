const Voca = require('./../models/vocabularyModel');
const Conversation = require('./../models/conversationModel');
const catchAsync = require('./../utils/catchAsync');
const readCSV = require('./../utils/readCSV');

exports.getAllVoca = catchAsync(async (req, res, next) => {
    const data = await Voca.find();

    res.status(200).json({ status: 'SUCCESS', data });
});

exports.createVoca = catchAsync(async (req, res, next) => {
    const converse = readCSV(req.file.buffer);

    const data = await Voca.create(converse);

    res.status(200).json({ status: 'SUCCESS', data });
});

exports.getConverse = catchAsync(async (req, res, next) => {
    const data = await Conversation.find();

    res.status(200).json({ status: 'SUCCESS', data });
});

exports.createConverse = catchAsync(async (req, res, next) => {
    const converse = readCSV(req.file.buffer);

    // console.log(converse);
    const data = await Conversation.create(converse);

    res.status(200).json({ status: 'SUCCESS', data });
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
        status: 'SUCCESS',
        data: { stats },
    });
});
