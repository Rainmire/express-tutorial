var express = require('express');
var app = express();

var things = require('./things.js');

//both index.js and things.js should be in same directory
app.use('/things', things);

app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});

app.get('/:id/:test', function(req, res){
   res.send('test ' + req.params.id + ' ' + req.params.test);
});

app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});

app.listen(3000);
