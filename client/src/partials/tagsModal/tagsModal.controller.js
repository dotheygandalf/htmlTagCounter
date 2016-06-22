(function() {
  'use strict'

  function tagsModalController($scope, tags) {
    $scope.tags = tags;
  }

  angular.module('htmlTagCounterApp')
  .controller('tagsModalController', tagsModalController);
})();
