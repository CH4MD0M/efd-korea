module.exports = (URI) => {
    const mongoose = require('mongoose');

    const autoIncrement = require('mongoose-auto-increment');
    const connection = mongoose.createConnection(URI);
    autoIncrement.initialize(connection);

    return autoIncrement;
};
