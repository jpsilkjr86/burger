const orm = require('../config/orm.js');



module.exports = orm;

// orm.connect().then( () => {
// 	console.log('test connection');

// 	orm.selectAll().then(results => {
// 		console.log(results);
// 	});

	

		
// });
	
	// orm.updateOne('Angus Burger', false).then(result => {
	// 	console.log(result);
	// 	orm.selectAll().then(results => {
	// 		console.log(results);
	// 		orm.end();
	// 	});
	// }).catch(err => {
	// 	console.log(err);
	// 	orm.end();
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