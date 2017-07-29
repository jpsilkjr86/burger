const orm = require('../config/orm.js');

orm.connect().then( () => {
	console.log('test connection');

	orm.selectAll().then(result => {
		console.log(result);
	});
});