/* 
게시글 인덱스
제목
내용
작성시작
작성자
*/
const Board = require('./../models/boardModel');

exports.createBoard = async (req, res, next) => {
    try {
        /* 
      title: { type: String},
      description: { type: String},
    */
        const body = req.body;

        const data = await Board.create({
            title: body.title,
            description: body.description,
            author: req.user.displayName,
        });

        res.status(201).json({ status: 'SUCCESS', data });
    } catch (err) {
        console.error(err);
    }
};
