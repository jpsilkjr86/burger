// dependencies
const express = require('express');
const bodyParser = require('body-parser');

// imports for connection purposes
const orm = require('./config/orm.js')

// set up express app
const app = express();
const port = process.env.PORT || 3000;

// set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// serves as default
app.use(express.static("./public"));

// function extensions for routing. sends app, path, friendFinder as
// arguments so that only one instance of each of those modules 
// needs to be created.
require('./controllers/burgers_controller.js')(app);

// attempts to establish connection to mysql server
orm.connect().then(() => {
	// listens to port after connection to server is established
	app.listen(port, () => {
	  console.log('App listening on port ' + port);
	});
}).catch(err => {
	console.log(err);
});
	