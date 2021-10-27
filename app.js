const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); // localhost fetch 쓸 때 오류를 없애주기 위한 미들웨어
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const AppError = require('./utils/appError');

// const viewRouter = require('./routes/viewRoutes');

const app = express();
app.use(cors());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Security HTTP headers
// app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' })); // form에서 보낸 데이터들을 req.body 객체에 담아주는 미들웨어

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Serving static files
app.use(express.static(`${__dirname}/public`));

// Test middleware
app.use((req, res, next) => {
    // 생성 시간 알려주는 미들웨어
    req.requestTime = new Date().toISOString();
    next();
});

// app.use('/api/v1', viewRouter);
app.use('', (req, res) => res.json({ username: 'bryan' }));

// 익스프레스는 순서대로 실행되기에 오류 처리기는 다른 모든 미들웨어 뒤에 정의해야 함.
app.all('*', (req, res, next) => {
    next(new AppError(`${req.originalUrl} 경로를 찾을 수 없습니다.`, 404));
});

module.exports = app;
