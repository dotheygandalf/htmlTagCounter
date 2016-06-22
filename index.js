var express = require('express');
var app = express();

app.set('appPath', __dirname);

app.use('/client', express.static('client'));
app.use('/bower_components', express.static('bower_components'));
app.use('/bin', express.static('bin'));

require('./server/src/routes')(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
