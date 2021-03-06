(function() {
  'use strict'

  function tagCountViewerController($scope, $http, $q, $timeout) {
    $scope.go = function(url) {
      getTags(url || $scope.url);
    };

    $scope.demo = function(url) {
      getTags(url, true);
    };

    function getTags(url, demoOverride) {
      if(demoOverride || $scope.urlForm.$valid) {
        $scope.isLoading = true;
        var deferred = $q.defer();

        $http.get('/api/v1/tags', {
          params: {
            url: url
          }
        }).then(function(response) {
          $scope.tags = response.data.elements;
          $scope.html = response.data.html;
          delete $scope.error;
          $scope.urlForm.$setPristine();
          deferred.resolve(response.data);
        }, function(error) {
          delete $scope.tags;
          delete $scope.html;
          $scope.error = error.data;
          deferred.reject();
        })['finally'](function() {
          $scope.isLoading = false;
        });

        return deferred.promise;
      }
      return $q.reject();
    }

    $scope.$on('tagCountViewer:selectTag', function(event, tag) {
      $scope.$broadcast('selectTag', tag);
    });

    $scope.url = 'https://slack.com/';
    $scope.demo($scope.url);
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
