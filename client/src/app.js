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
  $scope.url = 'http://kotaku.com/';

  $scope.editorOptions = {
    mode: 'htmlmixed',
    height: '600px',
    lineWrapping : false,
    lineNumbers: true
  };

  $scope.getTagCount = function() {
    // validate url
    if(true) {
      // get tags
    }
  };


  $http.get('/api/v1/tags', {
    params: {
      url: $scope.url
    }
  }).then(function(response) {
    $scope.tags = _.map(response.data.elements, function(value, key) {
      return {
        tag: key,
        count: value
      };
    });

    $scope.html = response.data.html.trim();

  });
});
