var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Welcome to view model layer container');
});

app.listen(3003, function () {
  console.log('Example app listening on port 3000!');
});
