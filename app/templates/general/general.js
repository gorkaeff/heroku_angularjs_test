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
		{title : "Inicio", link: "#/index", order: 1},
		{title : "About", link: "#/about", order: 2},
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
	$scope.linkBootstrap = "http://getbootstrap.com";
	$scope.linkTwitter = "https://twitter.com/gorkajusue";
});