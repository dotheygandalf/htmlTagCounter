var htmlTagCount = require('./');

describe("htmlTagCount", function () {
  var tags;

  it("should return the counts for the number of times each element appears", function () {

    runs(function() {
      htmlTagCount.getTags('<html><body><ul><li></li><li></li></ul></body></html>').then(function(response) {
        tags = response;
      });
    });

    waitsFor(function() {
      return !!tags;
    }, 'tags should be set', 1000);

    runs(function() {
      expect(tags.HTML).toEqual(1);
      expect(tags.BODY).toEqual(1);
      expect(tags.UL).toEqual(1);
      expect(tags.LI).toEqual(2);
    });
  });
});    
