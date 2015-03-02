'use strict';

angular.module('myApp.general', ['ngRoute'])

.directive('headerTemplate', function () {
	return {
		controller: 'HeaderCtrl',
    	templateUrl: 'templates/general/header.html'
	};
})
.controller('HeaderCtrl', function ($scope, $log, $translate) {
	$scope.spanish = navigator.language.substring(0,2) == "es" ? true : false;
	$scope.tab = 1;
	$scope.menu = [
		{title : "menu.home", link: "#/home", order: 1},
		{title : "menu.projects", link: "#/projects", order: 2},
		{title : "menu.contact", link: "#/about", order: 3}
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

	$scope.changeLang = function (lang){
		$scope.spanish = lang == "es" ? true : false;
		$translate.use(lang);
	}
})
.directive('footerTemplate', function () {
	return {
		controller: 'FooterCtrl',
    	templateUrl: 'templates/general/footer.html'
	};
})
.controller('FooterCtrl', function ($scope) {
	
});