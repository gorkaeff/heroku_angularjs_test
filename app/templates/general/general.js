'use strict';

angular.module('myApp.general', ['ngRoute'])

.directive('headerTemplate', function () {
	return {
		controller: 'HeaderCtrl',
    	templateUrl: 'templates/general/header.html'
	};
})
.controller('HeaderCtrl', function ($scope, $log) {
	$scope.tab = 1;
	$scope.menu = [
		{title : "Inicio", link: "#/home", order: 1},
		{title : "Proyectos", link: "#/projects", order: 2},
		{title : "Contacto", link: "#/about", order: 3}
	];

	$scope.isSelected = function (tab){
		if (tab == $scope.tab){
			return true;
		} else {
			return false;
		}
	};

	$scope.tabSelected = function (selected){
		$scope.tab = selected;
	};
})
.directive('footerTemplate', function () {
	return {
		controller: 'FooterCtrl',
    	templateUrl: 'templates/general/footer.html'
	};
})
.controller('FooterCtrl', function ($scope) {
	
});