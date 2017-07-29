const connection = require('./connection.js');

// declares object to be exported
const orm = {
	// orm.connect() returns a promise
	connect: () => {
		return new Promise( (resolve, reject) => {
			// attempts connection to mysql server.
			connection.connect(err => {
				if (err) {
					return reject('\nUnable to connect to server:\n'
					+ 'Failed to establish connection to MySQL database.');
				}
				console.log('connected as id ' + connection.threadId);
				// returns resolve if connection is successful
				return resolve();
			});
		});
	}, // end of orm.connect
	// returns promise which resolves with table of all burgers in the database
	selectAll: () => {
		return new Promise( (resolve, reject) => {
			const queryStr = 'SELECT * FROM burgers';
			// queries mysql server according to query string and values
			connection.query(queryStr, (err, results) => {
				if (err) {
					return reject('\nServer connection error.\n');
				}
				// returns resolve if connection is successful
				return resolve(results);
			});
		});
	},
	// returns promise which resolves with insert of new burger rows into burgers database
	insertOne: (burger_name) => {
		return new Promise( (resolve, reject) => {
			// instantiates locally scoped variables for query
			const queryStr = 'INSERT INTO burgers (??) VALUES (?)';
			const queryValAry = ['burger_name', burger_name];
			// queries mysql server according to query string and values
			connection.query(queryStr, queryValAry, (err, result) => {
				if (err) {
					return reject('\nServer connection error.\n');
				}
				// returns resolve if connection is successful
				return resolve(result);
			});
		});
	},
	// returns promise which resolves with update of burger row values
	updateOne: (id, burger_name, devoured) => {

	},
	// ends connection to mysql server
	end: () => {
		return new Promise( (resolve, reject) => { 
			connection.end(function(err) {
				if (err) {
					return reject('Error disconnencting: ' + err.stack);
				}
				// returns resolve if connection is successful
				return resolve();
			});
		});
	}
};

module.exports = orm;
