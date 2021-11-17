'use strict';
const nodemailer = require('nodemailer');

const sendEmail = (options) => {
    // 메일발송 함수

    let transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE, // 메일 보내는 곳
        port: process.env.EMAIL_PORT,
        host: process.env.EMAIL_HOST,
        // secure: false,
        // requireTLS: true,
        auth: {
            user: process.env.EMAIL_USERNAME, // 보내는 메일의 주소
            pass: process.env.EMAIL_PASSWORD, // 보내는 메일의 비밀번호
        },
    });
    // 메일 옵션
    var mailOptions = {
        from: process.env.EMAIL_USERNAME, //보내는 메일의 주소
        to: options.email, // 수신할 이메일
        subject: options.subject,
        text: options.message,
    };

    // 메일 발송
    transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
