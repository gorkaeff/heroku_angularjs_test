angular.module('myApp.services', [])
//---------------------------------------------------------------------------------------------------------------
.factory('ProjectService', function ($http) {
	var projectsAPI = {};

	projectsAPI.getProjectsList = function (searchTxt){
		return $http.get('js/projects.json');
	}
	return projectsAPI;
})