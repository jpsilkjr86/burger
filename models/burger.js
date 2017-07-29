const orm = require('../config/orm.js');

orm.connect().then( () => {
	console.log('test connection');

});

module.exports = orm;

	// orm.selectAll('burgers').then(results => {
	// 	console.log(results);
		
		
	// });
	
	// orm.insertOneNoDupe('burgers', 'burger_name', 'Chili Burger').then(result => {
	// 	console.log(result);
	// }).catch(err => {
	// 	console.log(err);
	// });

	// orm.insertOne('Spicy Burger').then(result => {
	// 	console.log(result);
	// 	orm.selectAll().then(results => {
	// 		console.log(results);
	// 	});
	// 	orm.end().then(() => {
	// 		console.log('Connection ended.');
	// 	});
	// }).catch(error => {
	// 	console.log(error);
	// });

		// orm.updateOneWhereEquals(
		// 	'burgers', 'devoured', false, 'burger_name', 'Angus Burger'
		// ).then(result => {
		// 	console.log(result);
		// 	orm.selectAll('burgers').then(results => {
		// 		console.log(results);
		// 		orm.end();
		// 	});
		// }).catch(err => {
		// 	console.log(err);
		// 	orm.end();
		// });