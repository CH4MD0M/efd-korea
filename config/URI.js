module.exports = (env) => {
    if (env.NODE_ENV === 'production') {
        return env.DATABASE.replace('<PASSWORD>', env.DATABASE_PASSWORD)
            .replace('<USERNAME>', env.DATABASE_USERNAME)
            .replace('<HOST>', env.DATABASE_HOST);
    } else {
        return env.DATABASE_LOCAL;
    }
};
