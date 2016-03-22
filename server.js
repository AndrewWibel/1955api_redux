var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));


//require mongoose.js
require('./server/config/mongoose.js');
// require routes
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(9001, function(){
	console.log('server is over 9000!')
})