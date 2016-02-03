"use strict";

const http = require('http');
const express = require('express');
const app = module.exports = express();
const path = require('path');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json()); // application/json parser
app.use(bodyParser.urlencoded({extended: false})); // application/x-www-urlencoded parser 
app.use(serveStatic(path.join(__dirname, 'public'), { 'index': ['index.html', 'default.htm'] }));

http.createServer(app).listen(app.get('port'), function () {
	console.log(`Express server is listening on port: ${app.get('port')}`);
});