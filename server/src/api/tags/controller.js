var htmlTagCount = require('../../htmlTagCount');

exports.index = function(req, res) {
  htmlTagCount.getTags('http://api.jquery.com/jquery.each/').then(function(tags) {
    res.json(tags);
  });
};