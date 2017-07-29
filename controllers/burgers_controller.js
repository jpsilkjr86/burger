const burger = require('../models/burger.js');

module.exports = (app) => {
	console.log('so far so good!');

	burger.all();
};