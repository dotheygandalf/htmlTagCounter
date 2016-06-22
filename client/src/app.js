angular.module('htmlTagCounterApp', [
  'ui.router'
])

.config(function($urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $urlMatcherFactoryProvider.strictMode(true);
})

.controller('mainCtrl', function($scope, $http) {
  $http.get('/api/v1/tags').then(function(response) {
    $scope.tags = _.map(response.data, function(value, key) {
      return {
        tag: key,
        count: value
      };
    });
  });
});
