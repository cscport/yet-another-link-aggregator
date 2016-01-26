(function() {
  'use strict';

  angular.module('app')

  .config(AppConfig);

  AppConfig.$inject = [
    '$stateProvider', 
    '$urlRouterProvider',
    '$locationProvider'
  ];

  function AppConfig(
    $stateProvider, 
    $urlRouterProvider,
    $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      template: '<links-page></links-page>'
    });

    $locationProvider.html5Mode(true);

  }
})();
