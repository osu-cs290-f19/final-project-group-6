var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.get('/',function(req,res,next){
  req.status(200).render('');
});


app.get('/',function(req,res,next){
  req.status(200).render('');
});



app.post('*', function(req, res){
	res.status(404);
	res.render('404');
});
