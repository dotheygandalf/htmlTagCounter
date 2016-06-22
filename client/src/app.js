(function() {
  'use strict'

  angular.module('htmlTagCounterApp', [
    'ui.router',
    'ui.codemirror',
    'templates-app'
  ])

  .config(function($urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $urlMatcherFactoryProvider.strictMode(true);
  });
})();
