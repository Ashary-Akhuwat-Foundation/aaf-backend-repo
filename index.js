const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8000);

// Parses key value pairs in request
app.use(express.urlencoded({ extended: true }));

// Converts json strings to the an object and attaches it to req.body
app.use(express.json());

// Use cors package to allow connections from all domains
const cors = require('cors');
app.use(cors());

// Log each request as it comes in for debugging
const requestLogger = require('./middleware/request_logger');
app.use(requestLogger);

// Redirect any requests to the homepage to artists API
app.get('/', (req, res) => {
	res.redirect('/api/Artists');
});

// Hand off requests on the '/api/bookmarks' route to the bookmarks controller
const artController = require('./controllers/artControllers');
app.use('/api/art/', artController);

// Users controller
const artistController = require('./controllers/artistControllers');
app.use('/api/Artists/', artistController);

// Comment controller
const artistCaptureController = require('./controllers/artistCaptureControllers');
app.use('/artist-capture', artistCaptureController);

// if in the controller, the .catch is thrown and next is invoked, it'll come back here
const { handleErrors } = require('./middleware/custom_errors');
app.use(handleErrors);

app.listen(app.get('port'), () => {
	console.log(`✅ Listening on port ${app.get('port')}`);
});

//  https://quiet-chamber-04430.herokuapp.com/api/Artists