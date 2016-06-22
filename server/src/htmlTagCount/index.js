var jsdom = require("jsdom");
var q = require('q');
var beautify = require('js-beautify').html;
var _ = require('lodash');

module.exports = {
  getTags: getTags
};

function getTags(html) {
  var deferred = q.defer();

  var elements = {};
  jsdom.env(
    html,
    function (err, window) {
      if(err) {
        return deferred.reject();
      }

      var $ = require('jquery')(window);
      getChildNodes($, window.document.documentElement);

      elements = _.map(elements, function(value, key) {
        return {
          tag: key,
          count: value
        };
      }).sort(function(a, b) {
        if(a.count > b.count) {
          return 1;
        } else if(a.count < b.count) {
          return -1;
        } else {
          if(a.tag.toLowerCase() > b.tag.toLowerCase()) {
            return -1;
          } else if(a.tag.toLowerCase() < b.tag.toLowerCase()) {
            return 1;
          }
        }
        return 0;
      }).reverse();

      var html = window.document.documentElement.outerHTML;

      window.close();

      return deferred.resolve({
        elements: elements,
        html: beautify(html, {
          'indent_size': 2,
          'preserve-newlines': true,
          'max-preserve-newlines': 1,
          'indent-inner-html': true
        })
      });
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

  return deferred.promise;
}
