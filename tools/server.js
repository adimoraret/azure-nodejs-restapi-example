'use strict';

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('../src/api/routes/Routes');
routes(app);

app.listen(port);

console.log('Running My REST API App on port: ' + port);