const mongoose = require('mongoose');
// DB Component, 일부 오류처리, 환경 변수 있는 파일
const dotenv = require('dotenv');
// 예기치 못한 Exception 잡기: console.log(asd); <-이런거
process.on('uncaughtException', (err) => {
    console.log('예기치 못한 상황으로 인해 프로그램 강제종료.');
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({ path: './config/config.env' });

const URI = require('./config/URI')(process.env);

mongoose.connect(URI, {
    dbName: 'efdkorea',
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = require('./app');

const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
    console.log('서버 구성에 문제가 있어 프로그램을 강제종료 합니다.');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
