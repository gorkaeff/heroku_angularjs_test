'use strict';

angular.module('myApp.index', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/index', {
    templateUrl: 'templates/index/index.html',
    controller: 'IndexCtrl'
  });
}])

.controller('IndexCtrl', function ($scope) {
	$scope.mainMessage = "Página de inicio";
});