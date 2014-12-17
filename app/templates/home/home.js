'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'templates/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function ($scope) {
	$scope.mainMessage = "Página de inicio";
});