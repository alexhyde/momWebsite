var express = require('express');
var app = express();

var port = 5002;

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.get('/',function(req,res){
	res.send('Landing page for Mom Website');
});

app.listen(port, function(err){
	console.log('Started Mom Website on port: ' + port);
});
