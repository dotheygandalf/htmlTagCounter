(function() {
  'use strict'

  angular.module('htmlTagCounterApp', [
    'ui.router',
    'ui.codemirror',
    'templates-app',
    'ui.bootstrap'
  ])

  .config(function($urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider, $stateProvider, $uibTooltipProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $urlMatcherFactoryProvider.strictMode(true);
  });
})();
