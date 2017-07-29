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

// // attempts connection to mysql server.
// connection.connect(function(err) {
// 	if (err) {
// 		return console.log('\nUnable to connect to server:\n'
// 		+ 'Failed to establish connection to MySQL database.');
// 	}
// 	// returns resolve if connection is successful
// 	console.log('connected as id ' + connection.threadId);
// });