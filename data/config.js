const mysql = require ('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'gamer4ever',
    database: 'api',
};

const pool = mysql.createPool(config);

module.exports = pool;