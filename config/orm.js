const connection = require('./connection.js');

// declares object to be exported
const orm = {
	// orm.connect() returns a promise
	connect: () => {
		return new Promise( (resolve, reject) => {
			// attempts connection to mysql server.
			connection.connect(function(err) {
				if (err) {
					return reject('\nUnable to connect to server:\n'
					+ 'Failed to establish connection to MySQL database.');
				}
				console.log('connected as id ' + connection.threadId);
				// returns resolve if connection is successful
				return resolve();
			});
		});
	} // end of orm.connect
};

module.exports = orm;
