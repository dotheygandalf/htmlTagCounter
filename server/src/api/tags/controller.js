var htmlTagCount = require('../../htmlTagCount');

exports.index = function(req, res) {
  var url = 'http://arstechnica.com/';

  // url = '<html><body><ul><li></li></ul></body></html>';

  htmlTagCount.getTags(url).then(function(tags) {
    res.json(tags);
  });
};