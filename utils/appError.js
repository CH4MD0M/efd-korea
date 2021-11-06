class AppError extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'FAIL' : 'err';
        this.isOperational = true; // 코드(개발자) 문제가 아닌 운영상(사용자)의 문제

        //this: Error: ID가 없습니다
        //this.constructor: class~Error.cap...까지 코드 전부

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;
