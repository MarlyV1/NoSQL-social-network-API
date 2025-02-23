const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

//Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

//After the database is open then the server will start running 
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    });
});