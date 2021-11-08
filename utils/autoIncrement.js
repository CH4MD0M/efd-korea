module.exports = (URI) => {
    const mongoose = require('mongoose');

    const autoIncrement = require('mongoose-auto-increment');
    const connection = mongoose.createConnection(URI, {
        dbName: 'efdkorea',
    });
    autoIncrement.initialize(connection);

    return autoIncrement;
};
