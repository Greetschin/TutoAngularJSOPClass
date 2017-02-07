'use strict';

/**
 * @ngdoc overview
 * @name cineAngularApp
 * @description
 * # cineAngularApp
 *
 * Main module of the application.
 */
angular
  .module("cineAngularApp", [
    'ngAnimate',
    'ngAria',
    'ui.bootstrap',
    'ngMessages',
    'ngRoute'
    
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/popular', {
        templateUrl: 'views/movie.html',
        controller: 'PopularCtrl',
        controllerAs: 'popular'
      })
      .when('/search/:query', {
        templateUrl: 'views/movie.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/info/:id', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl',
        controllerAs: 'info'
      })
      .otherwise({
        redirectTo: '/movie'
      });
  });
console.log("Fin App.js");