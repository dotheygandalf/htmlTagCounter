// Run some jQuery on a html fragment
var jsdom = require("jsdom");

jsdom.env(
  '<html><head></head><body><ul><li></li><li></li></ul></body></html>',
  ["http://code.jquery.com/jquery.js"],
  function (err, window) {
    var $ = window.jQuery;
    // console.log($('html'));
    // console.log($('html').children().each(function(item, moo) {console.log(item, $(moo).prop('nodeName'))}));
    // console.log("contents of a.the-link:", window.$("a.the-link").text());

    getChildNodes($, 'html');
  }
);


function getChildNodes($, element) {
  $element = $(element);
  console.log($element.prop('nodeName'));

  $.each($element.children(), function(index, childElement) {
    var $childElement = $(childElement);

    console.log($childElement.prop('nodeName'));

    var children = $childElement.children();
    if(children.length > 0) {
      $.each(children, function(index, child) {
        getChildNodes($, child);
      });
    }
  });
}