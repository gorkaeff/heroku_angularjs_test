'use strict';
angular.module('myApp', [
  'ngRoute',
  'myApp.index',
  'myApp.about',
  'myApp.general'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/index'});
}]);