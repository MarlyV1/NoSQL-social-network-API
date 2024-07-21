const mongoose = require('mongoose');

//Connects to MongoDB
mongoose.connect(process.env.MONGOURI);

//Exports Mongoose connection
module.exports = mongoose.connection;