var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;










app.post('*', function(req, res){
	res.status(404);
	res.render('404');
});
