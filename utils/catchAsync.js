module.exports = (fn) => (req, res, next) => {
    // catch가 있는 이유는 비동기함수는 Promise를 반환하니까 오류 발생 시 .catch를 쓸 수 있는거임
    fn(req, res, next).catch(next);
};
