const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            select: false,
        },
        author: {
            type: String,
            required: true,
        },
    },
    { strict: false }
);

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
