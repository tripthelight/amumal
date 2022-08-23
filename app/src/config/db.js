const mwsql = require('mysql');

const db = mwsql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '111111',
    database: 'nodedb'
});

db.connect();

module.exports = db;
