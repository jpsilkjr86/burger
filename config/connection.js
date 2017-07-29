// imports keys for password validation
const keys = require('./keys.js');

// imports mysql npm and establishes connection
const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: keys.pw,
	database: 'burger_db'
});

module.exports = connection;