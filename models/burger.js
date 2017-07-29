const orm = require('../config/orm.js');

orm.connect().then( () => {
	console.log('test connection');

	orm.selectAll().then(results => {
		console.log(results);
	});

	orm.insertOne('Spicy Burger').then(result => {
		console.log(result);
		orm.selectAll().then(results => {
			console.log(results);
		});
		orm.end().then(() => {
			console.log('Connection ended.');
		});
	}).catch(error => {
		console.log(error);
	});

		
});