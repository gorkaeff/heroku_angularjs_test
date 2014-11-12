'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'templates/about/about.html',
    controller: 'AboutCtrl'
  });
}])

.controller('AboutCtrl', function ($scope) {
	$scope.mainMessage = "Página de about en la que podemos hablar sobre nosotros...";
});