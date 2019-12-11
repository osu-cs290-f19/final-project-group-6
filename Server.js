var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.get('/',function(req,res,next){
  req.status(200).render('');
});


app.get('/',function(req,res,next){
  req.status(200).render('');
});

app.post('', function (req, res, next) {
  
}


app.get('*', function(req, res){
	res.status(404);
	res.render('404');
});
