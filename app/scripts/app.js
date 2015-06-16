'use strict';

/**
 * @ngdoc overview
 * @name basketApp
 * @description
 * # basketApp
 *
 * Main module of the application.
 */
angular
  .module('basketApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'GroceryList'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
