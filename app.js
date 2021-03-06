const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors"); // localhost fetch 쓸 때 오류를 없애주기 위한 미들웨어
const mongoSanitize = require("express-mongo-sanitize");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const xss = require("xss-clean");

const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();
if (process.env.NODE_ENV === "development") {
    // Development logging
    app.use(cors());
}
app.use(morgan("dev"));
// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" })); // form에서 보낸 데이터들을 req.body 객체에 담아주는 미들웨어
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());
app.use(compression());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Serving static files
const env = process.env.NODE_ENV === "development" ? "public" : "client/build";
const root = require("path").join(__dirname, `${env}`);
app.use(express.static(root));

const uri = require("./config/URI")(process.env);

app.use(
    session({
        secret: process.env.JWT_SECRET, // 별도의 파일로 빼서 저장해야하는 비밀키
        resave: false, //세션을 언제나 저장할지 설정함
        saveUninitialized: false, // 빈 값도 저장
        // rolling: true, // 새로고침, 페이지 이동 등 활동하면 세션 갱신. resave도 true로 바꾸어야 함
        store: new MongoDBStore({
            uri,
            collection: "session",
            databaseName: "efdkorea",
        }),
        cookie: {
            secure: false, // https 이외에서도 사용 가능하게 만드는 옵션
            HttpOnly: true, // 자바스크립트로 쿠키에 접근 불가
            maxAge: 60 * 60 * 1000,
            // maxAge: 5 * 1000,
        },
    })
);

const passport = require("./passport")(app);
const authRouter = require("./routes/authRoutes")(passport);
const studyRouter = require("./routes/studyRoutes");
const boardRouter = require("./routes/boardRoutes");

app.use("/study", studyRouter);
app.use("/auth", authRouter);
app.use("/board", boardRouter);

app.use("/*", (req, res) => {
    res.sendFile(path.join(root, "index.html"));
});

app.use(globalErrorHandler);

module.exports = app;
