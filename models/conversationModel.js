const mongoose = require('mongoose');

const URI = require('./../config/URI')(process.env);
const autoIncrement = require('./../utils/autoIncrement')(URI);

const conversationSchema = new mongoose.Schema({
    language: {
        type: String,
        required: true,
        // enum: ['kl', 'cl', 'el', 'rl'],
    },
    level: {
        type: Number,
        required: true,
        // enum: [11, 12, 21, 22, 31, 32],
    },
    // 단원
    chapter: {
        type: Number,
        required: true,
        // enum: [1, 2, 3, 29],
    },
    classification: {
        type: Number,
        required: true,
        // enum: [1, 2, 3, 4, 5, 6, 7],
    },
    kl: { type: String, required: true },
    el: { type: String, required: true },
    rl: { type: String, required: true },
    cl: { type: String, required: true },
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
