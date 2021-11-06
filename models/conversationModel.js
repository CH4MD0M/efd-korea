const mongoose = require('mongoose');

const URI = require('./../config/URI')(process.env);
const autoIncrement = require('./../utils/autoIncrement')(URI);

const conversationSchema = new mongoose.Schema({
    language: {
        type: String,
        require: true,
        enum: ['kl', 'cl', 'el', 'rl'],
    },
    level: {
        type: Number,
        require: true,
        enum: [11, 12, 21, 22, 31, 32],
    },
    unit: {
        type: Number,
        require: true,
        enum: [1, 2, 3, 29],
    },
    classification: {
        type: Number,
        require: true,
        enum: [1, 2, 3, 4, 5, 6, 7],
    },
    sentence: [
        {
            kl: { type: String, require: true },
            el: { type: String, require: true },
            rl: { type: String, require: true },
            cl: { type: String, require: true },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false,
    },
});

conversationSchema.plugin(autoIncrement.plugin, {
    model: 'conversationModel',
    field: 'seq',
    startAt: 1, //시작
    increment: 1, // 증가
});

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;
