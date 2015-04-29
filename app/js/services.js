angular.module('myApp.services', [])
//---------------------------------------------------------------------------------------------------------------
.factory('ProjectService', function () {
	var projects = [
			{
				"id" : 0,
				"title" : "NavarraFutbolClic",
				"shortDesc" : "nfc.shortDesc",
				"fullDesc" : "nfc.fullDesc",
				"urlAndroid" : "https://play.google.com/store/apps/details?id=com.ionicframework.navarrafutbolclic105680",
				"urlApple" : "https://itunes.apple.com/us/app/navarrafutbolclic/id965782932?l=es&ls=1&mt=8",
				"icon" : "https://lh5.ggpht.com/7fVTLx6zAZem0_-5m-zrTCbce1jAaVhMU9D1u4OIJfmv1-oSBDBAqgSbVIvsuMZuqA=w300"	   
			},
			{
				"id" : 1,
				"title" : "FutsalNav",
				"shortDesc" : "futsal.shortDesc",
				"fullDesc" : "futsal.fullDesc",
				"urlAndroid" : "https://play.google.com/store/apps/details?id=com.herokuapp.myg.futsalnav",
				"urlApple" : "https://itunes.apple.com/us/app/futsal-navarra/id960990563?l=es&ls=1&mt=8",
				"icon" : "https://lh5.ggpht.com/8TEQFWKais8QBTRsy2YCI-LkKp66VJ32a5viRcxR00c7WNAcb4iU08YBztnFFm1SjQQ=w300" 
			},
			{
				"id" : 2,
				"title" : "NumberGuess",
				"shortDesc" : "number.shortDesc",
				"fullDesc" : "number.fullDesc",
				"urlAndroid" : "https://play.google.com/store/apps/details?id=com.herokuapp.myg.numberguess",
				"urlApple" : "https://itunes.apple.com/us/app/el-adivino-de-numeros/id964915212?l=es&ls=1&mt=8",
				"icon" : "https://lh5.ggpht.com/xIZtfMM0_cGZx5B-GJJX1DbuQNQ6op-izs30GsasXL7L_qXehkJQ3A5ypmhgcghtUAg=w300" 
			},
			{
				"id" : 3,
				"title" : "Super Flip",
				"shortDesc" : "flip.shortDesc",
				"fullDesc" : "flip.fullDesc",
				"urlAndroid" : "https://play.google.com/store/apps/details?id=com.herokuapp.myg.flip",
				"urlApple" : "",
				"icon" : "https://lh3.googleusercontent.com/UxKJj4myckKrhzEXVT7MLGuctvLciURWNi5HEqirpbNa67yPQ9B1zT0XmmlnOdMRmzA=w300-rw" 
			}
	];

	var projectsAPI = {};

	projectsAPI.getProjectsList = function (){
		return projects;
	}

	projectsAPI.getProjectById = function (id){
		return projects[id];
	}

	return projectsAPI;
});