'use strict';
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.about',
  'myApp.project',
  'myApp.general',
  'myApp.services',
  'pascalprecht.translate'
]).
config(['$routeProvider', '$translateProvider', function($routeProvider, $translateProvider) {
	$translateProvider.useStaticFilesLoader({
		prefix: 'i18/locale-',
		suffix: '.json'
	});

	if (navigator.language.substring(0,2) == "es"){
		$translateProvider.preferredLanguage('es');
	} else {
		$translateProvider.preferredLanguage('en');
	}

  $routeProvider.otherwise({redirectTo: '/home'});
}]);