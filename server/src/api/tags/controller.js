var htmlTagCount = require('../../htmlTagCount');
var request = require('request');

exports.index = function(req, res) {
  var url = req.query.url;

  request(url, function(error, response, body) {
    if(error) {
      return console.log(error);
    }
    if(/text\/html/.test(response.headers['content-type'])) {
      htmlTagCount.getTags(body).then(function(tags) {
        return res.json(tags);
      }, function(error) {
        return res.status(500).json({
          status: 500,
          message: 'It looks like there was a problem retrieving the reqested page.'
        });
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: 'The content type must be text/html.'
      });
    }
  });
};
