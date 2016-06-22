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
  $scope.url = 'https://material.angularjs.org/latest/';

  $scope.editorOptions = {
    mode: 'htmlmixed',
    height: '600px',
    lineWrapping : false,
    lineNumbers: true
  };

  $scope.codemirrorLoaded = function(_editor) {
    $scope.editor = _editor;

    $scope.editor.on('scroll', function() {
      updateHighlights();
    });
  };

  function updateHighlights() {
    $('.cm-tag:findExactly(\'' + $scope.tag + '\')').addClass('selected');
  }

  $scope.highlightTags = function(tag) {
    $scope.tag = tag;
    $('.cm-tag').removeClass('selected');
    $('.cm-tag:findExactly(\'' + tag + '\')').addClass('selected');
  }

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
    $scope.tags = response.data.elements;

    $scope.html = response.data.html.trim();

  });
});
