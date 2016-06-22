(function() {
  'use strict'

  function tagCountViewerController($scope, $http) {
    $scope.url = 'https://material.angularjs.org/latest/';

    $scope.$watch('url', function(url) {
      if($scope.urlForm.$valid) {
        getTags(url);
      }
    });

    function getTags(url) {
      $http.get('/api/v1/tags', {
        params: {
          url: url
        }
      }).then(function(response) {
        $scope.tags = response.data.elements;
        $scope.html = response.data.html;
      });
    }

    $scope.$on('tagCountViewer:selectTag', function(event, tag) {
      $scope.$broadcast('selectTag', tag);
    });
  }

  angular.module('htmlTagCounterApp')
  .controller('tagCountViewerController', tagCountViewerController)
  .directive('tagCountViewer', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: 'directives/tagCountViewer/tagCountViewer.tpl.html',
      controller: 'tagCountViewerController'
    };
  });
})();
