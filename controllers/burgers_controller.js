const burger = require('../models/burger.js');

module.exports = (app) => {
	// route for grabbing all burger data
	app.get('/burgers/all', (req, res) => {
		burger.all().then(results => {
			res.json(results);
		}).catch(err => {
			res.send(err);
			console.log(err);
		});
	});

	// route for posting new burger data
	app.post('/burgers/new', (req, res) => {
		burger.addNew(req.body.burger_name).then(result => {
			res.send(result);
		}).catch(err => {
			res.send(err);
			console.log(err);
		});
	});

	// route for eating
	app.put('/burgers/eat', (req, res) => {
		burger.eat(req.body.burger_name).then(result => {
			res.send(result);
		}).catch(err => {
			res.send(err);
			console.log(err);
		});
	});

	// route for ordering more
	app.put('/burgers/ordermore', (req, res) => {
		burger.orderMore(req.body.burger_name).then(result => {
			res.send(result);
		}).catch(err => {
			res.send(err);
			console.log(err);
		});
	});
};