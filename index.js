// Run some jQuery on a html fragment
var jsdom = require("jsdom");

jsdom.env(
  '<html><head></head><body></body></html>',
  ["http://code.jquery.com/jquery.js"],
  function (err, window) {
    var $ = window.jQuery;
    // console.log($('html'));
    console.log($('html').children().each(function(item, moo) {console.log(item, $(moo).prop('nodeName'))}));
    // console.log("contents of a.the-link:", window.$("a.the-link").text());
  }
);
