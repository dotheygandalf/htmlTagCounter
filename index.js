var express = require('express');
var app = express();

require('./server/src/routes')(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});