var express = require('express');
var wagner = require('wagner');

require('./models')(wagner);

var app = express();

app.use('/api/v1', require('./api')(wagner));

app.listen(3000);
console.log('Listening on Port 3000!');