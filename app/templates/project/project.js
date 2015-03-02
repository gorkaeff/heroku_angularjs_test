'use strict';

angular.module('myApp.project', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'templates/project/projects.html',
    controller: 'ProjectCtrl'
  })
  .when('/project/:id', {
    templateUrl: 'templates/project/projectDetail.html',
    controller: 'ProjectDetailCtrl'
  });
}])

.controller('ProjectCtrl', function ($scope, ProjectService) {
	$scope.projects = ProjectService.getProjectsList();
})

.controller('ProjectDetailCtrl', function ($scope, $routeParams, ProjectService, $location) {
	$scope.projectInfo = ProjectService.getProjectById($routeParams.id);

	$scope.go = function (url){
		window.location=url;
	}
});