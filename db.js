if(process.env.NODE_ENV !== 'production') require('dotenv').config();
const pgp = require('pg-promise')({});

const cn = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DATABASE,
    user: process.env.USERNAME,
    password: process.env.PASSWORD
};

const db = pgp(cn); // database instance;

module.exports = db;