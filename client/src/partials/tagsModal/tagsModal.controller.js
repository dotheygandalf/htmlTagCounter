(function() {
  'use strict'

  function tagsModalController($scope, tags, selectedTag) {
    $scope.tags = tags;
    $scope.selectedTag = selectedTag;

    $scope.isTagSelected = function(tag) {
      return _.isEqual(tag, $scope.selectedTag);
    };
  }

  angular.module('htmlTagCounterApp')
  .controller('tagsModalController', tagsModalController);
})();
