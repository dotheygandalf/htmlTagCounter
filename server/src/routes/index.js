'use strict';

module.exports = function(app) {

  // Insert routes below
  app.use('/api/v1/tags', require('../api/tags'));
  app.get('/foo', function(req, res) {
    res.header("Content-Type", "text/html");
    res.send('<html><div>foo<strong>bar</strong></div></html>');
  })

  // All undefined asset or api routes should return a 404
  // app.route('/:url(api|auth|components|app|bower_components|assets)/*')
  //  .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(app.get('appPath') + '/index.html');
    });
};
