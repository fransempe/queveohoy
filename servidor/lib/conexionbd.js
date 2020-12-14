const mysql  = require('mysql2');

const connection = {
  host: 'localhost',
  user: 'root',
  database: 'cursonodejs',
};

exports.connection = mysql.createConnection(connection);