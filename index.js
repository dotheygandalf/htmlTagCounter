var htmlTagCount = require('./src/htmlTagCount/htmlTagCount');

htmlTagCount.getTags('http://api.jquery.com/jquery.each/').then(function(tags) {
  console.log(tags);
});