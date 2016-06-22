var htmlTagCount = require('../../htmlTagCount');

exports.index = function(req, res) {
  var url = req.query.url;
  htmlTagCount.getTags(url).then(function(tags) {
    return res.json(tags);
  }, function(error) {
    return res.status(500).json({
      status: 500,
      message: 'Something went wrong :<'
    });
  });
};