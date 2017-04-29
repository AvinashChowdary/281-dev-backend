/**
 * Created by avinash on 4/3/17.
 */

var http = require('http');
var express = require('express');
var routes = require('./app/routes');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.registerRoutes(app);

var server = http.createServer(app).listen(8080);

module.exports = server;


