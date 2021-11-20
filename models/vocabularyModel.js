const mongoose = require('mongoose');

const URI = require('./../config/URI')(process.env);
const autoIncrement = require('./../utils/autoIncrement')(URI);

const vocabularySchema = new mongoose.Schema({
    language: {
        type: String,
        // enum: ['kl', 'cl', 'el', 'rl'],
    },
    level: {
        type: Number,
        require: true,
    },
    // 단원
    chapter: {
        type: Number,
        require: true,
        // enum: [1, 2, 3, 29],
    },
    //구분, gubun
    classification: {
        type: Number,
        require: true,
        // enum: [1, 2, 3, 4, 5, 6, 7],
    },
    kl: { type: String, require: true },
    el: { type: String, require: true },
    rl: { type: String, require: true },
    cl: { type: String, require: true },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false,
    },
});

vocabularySchema.plugin(autoIncrement.plugin, {
    model: 'vocabularyModel',
    field: 'seq',
    startAt: 1, //시작
    increment: 1, // 증가
});

const Vocabulary = mongoose.model('Vocabulary', vocabularySchema);

module.exports = Vocabulary;
