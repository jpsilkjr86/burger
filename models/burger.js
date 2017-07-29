const orm = require('../config/orm.js');

// orm.connect().then( () => {
// 	console.log('test connection');

// });

// object to be exported
const burger = {
	// function for eating the burger and changing database state
	eat: (burger_name) => {
		// calls orm and fills in values
		orm.updateOneWhereEquals(
			'burgers', 'devoured', true, 'burger_name', burger_name
		).then(result => {
			console.log(result);
		}).catch(err => {
			console.log(err);
		});
	},
	// function for ordering more of the same item (the inverse of 'eat')
	orderMore: (burger_name) => {
		// calls orm and fills in values
		orm.updateOneWhereEquals(
			'burgers', 'devoured', false, 'burger_name', burger_name
		).then(result => {
			console.log(result);
		}).catch(err => {
			console.log(err);
		});
	},
	// function for adding new burgers
	addNew: (burger_name) => {
		// calls orm and fills in values
		orm.insertOneNoDupe('burgers', 'burger_name', burger_name).then(result => {
			console.log(result);
		}).catch(err => {
			console.log(err);
		});
	},
	// function for grabbing all burgers and their states from the database
	all: () => {
		orm.selectAll('burgers').then(results => {
			console.log(results);
		});
	}
};

module.exports = burger;