'use strict';

angular.module('myApp.project', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'templates/project/projects.html',
    controller: 'ProjectCtrl'
  });
}])

.controller('ProjectCtrl', function ($scope, ProjectService) {
	$scope.projects = [];
	ProjectService.getProjectsList().success(function (res){
		$scope.projects = res.projects;
	})
});