var express = require('express');
var app = express();
var body_parser = require('body-parser');
var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: promise
});

var hbs = require('hbs');
app.set('view engine', 'hbs');

app.use(body_parser.urlencoded({extended: false}));

app.listen(8002, function () {
  console.log('Listening on port 8002');
});

app.get('/', function(request, response) {
})
