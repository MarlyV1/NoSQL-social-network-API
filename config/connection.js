const mongoose = require('mongoose');

//Connects to MongoDB
mongoose.connect(process.env.MONGOURI || 'mongodb://localhost:27017/network_db');

//Exports Mongoose connection
module.exports = mongoose.connection;