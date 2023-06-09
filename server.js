//variables
const express = require('express');
const path = require('path');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');
const app = express();

//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(require('./config/checkToken'));
app.use(express.static(path.join(__dirname, 'dist')));

//routes
const ensureLoggedIn = require('./config/ensureLoggedIn')
app.use('/api/users', require('./routes/api/users'));
app.use('/api/cids', ensureLoggedIn, require('./routes/api/cids'));

// Error handler to check if route exists
app.use(function (req, res) {
  (`route: ${req.path} does not exist`);
  res.status(404, "route does not exist");
});

//catch all
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//listener
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
});