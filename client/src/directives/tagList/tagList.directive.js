(function() {
  'use strict'

  function tagListController($scope) {
    $scope.selectTag = function(tag) {
      $scope.selectedTag = tag;
      $scope.$emit('tagCountViewer:selectTag', tag);
    };

    $scope.isTagSelected = function(tag) {
      return _.isEqual(tag, $scope.selectedTag);
    };
  }

  angular.module('htmlTagCounterApp')
  .controller('tagListController', tagListController)
  .directive('tagList', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        tags: '='
      },
      templateUrl: 'directives/tagList/tagList.tpl.html',
      controller: 'tagListController'
    };
  });
})();
