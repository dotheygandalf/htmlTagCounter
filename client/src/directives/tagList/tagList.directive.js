(function() {
  'use strict'

  function tagListController($scope, $uibModal, $filter) {
    $scope.selectTag = function(tag) {
      $scope.selectedTag = tag;
      $scope.formattedTag = $filter('formatTag')(tag);
      $scope.$emit('tagCountViewer:selectTag', tag);
    };

    $scope.isTagSelected = function(tag) {
      return _.isEqual(tag, $scope.selectedTag);
    };

    $scope.openTagsModal = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'partials/tagsModal/tagsModal.tpl.html',
        controller: 'tagsModalController',
        resolve: {
          tags: function () {
            return $scope.tags;
          }
        }
      });

      modalInstance.result.then(function(tag) {
        $scope.selectTag(tag);
      });
    };
  }

  angular.module('htmlTagCounterApp')
  .filter('formatTag', function() {
    return function(value) {
      if(_.isString(value)) {
        return '<' + value.toLowerCase() + '>';
      }
      return value;
    };
  })
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
