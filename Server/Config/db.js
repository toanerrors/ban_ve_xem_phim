const mongoose = require('mongoose');

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const connection = `mongodb+srv://${dbUser}:${dbPass}@${host}/${dbName}`;

mongoose.connect(connection, { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to database');
    })
    .catch(err => {
        console.log('Error connecting to database', err);
    });
    
