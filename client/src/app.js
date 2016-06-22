angular.module('htmlTagCounterApp', [
  'ui.router',
  'ui.codemirror'
])

.config(function($urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $urlMatcherFactoryProvider.strictMode(true);
})

.controller('mainCtrl', function($scope, $http, $timeout) {

  $scope.editorOptions = {
    mode: 'htmlmixed',
    height: '600px',
    lineWrapping : false,
    lineNumbers: true
  };


  $http.get('/api/v1/tags').then(function(response) {
    $scope.tags = _.map(response.data.elements, function(value, key) {
      return {
        tag: key,
        count: value
      };
    });

    $scope.html = response.data.html.trim();

  });
});
