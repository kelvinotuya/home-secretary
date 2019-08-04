var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + path.sep + 'public'));
console.log(__dirname + path.sep + 'public');

var server = app.listen(5001);
