console.log('Starting up the server');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fish = require('./routes/fish');
var port = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true})); // this creates req.body
app.use(bodyParser.json()); // this creates req.body

app.use('/fish', fish);

app.listen(port, function(){
    console.log('Listening on port: ', port);
});
