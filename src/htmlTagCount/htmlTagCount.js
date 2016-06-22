var jsdom = require("jsdom");


module.exports = {
  getTags: getTags
};

function getTags(url) {
  var elements = {};
  jsdom.env(
    url,
    function (err, window) {
      var $ = require('jquery')(window);
      getChildNodes($, 'html');
      console.log(elements);
    }
  );

  function getChildNodes($, element) {
    $element = $(element);
    var elementName = $element.prop('nodeName');
    var currentCount = elements[elementName] || 0;
    elements[elementName] = currentCount + 1;

    $.each($element.children(), function(index, childElement) {
      var $childElement = $(childElement);

      var childElementName = $childElement.prop('nodeName');
      var currentCount = elements[childElementName] || 0;
      elements[childElementName] = currentCount + 1;

      var children = $childElement.children();
      if(children.length > 0) {
        $.each(children, function(index, child) {
          getChildNodes($, child);
        });
      }
    });
  }
}