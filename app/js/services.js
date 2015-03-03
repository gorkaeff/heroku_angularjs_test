angular.module('myApp.services', [])
//---------------------------------------------------------------------------------------------------------------
.factory('ProjectService', function () {
	var projects = [
			{
				"id" : 0,
				"title" : "NavarraFutbolClic",
				"shortDesc" : "Resultados y clasificación del fútbol navarro",
				"fullDesc" : "En nuestra aplicación encontrarás información del fútbol navarro en tiempo real. Visualiza los resultados de tu equipo de una forma cómoda y rápida.También encontrarás toda la información de cada equipo:- Plantilla y estadísticas de cada jugador - Sancionados - Lesionados - Próximo arbitro - Próximo rival - Datos de interés (Localización del campo, web, presidente, socios....) Y además de todo esto, también podrás ver las noticias de navarrafutbolclic, las crónicas de los partidos y las  estadísticas de máximos goleadores, mejores porteros, tarjetas, minutos jugados....",
				"urlAndroid" : "https://play.google.com/store/apps/details?id=com.ionicframework.navarrafutbolclic105680",
				"urlApple" : "https://itunes.apple.com/us/app/navarrafutbolclic/id965782932?l=es&ls=1&mt=8",
				"icon" : "https://lh5.ggpht.com/7fVTLx6zAZem0_-5m-zrTCbce1jAaVhMU9D1u4OIJfmv1-oSBDBAqgSbVIvsuMZuqA=w300-rw" 
			},
			{
				"id" : 1,
				"title" : "FutsalNav",
				"shortDesc" : "Resultados y clasificación del fútbol sala femenino",
				"fullDesc" : "La aplicación perfecta para seguir el fútbol sala juvenil femenino ya seas jugadora, entrenador/a, arbitro o aficionado. En ella encontrarás tanto los resultados como la clasificación de la liga actualizada nada más concluir los partidos. Además puedes ver las plantillas de cada equipo acompañadas de una foto del grupo. También existe un apartado de noticias donde se encontrarán los avisos más importantes de esta liga.",
				"urlAndroid" : "https://play.google.com/store/apps/details?id=com.herokuapp.myg.futsalnav",
				"urlApple" : "https://itunes.apple.com/us/app/futsal-navarra/id960990563?l=es&ls=1&mt=8",
				"icon" : "https://lh5.ggpht.com/8TEQFWKais8QBTRsy2YCI-LkKp66VJ32a5viRcxR00c7WNAcb4iU08YBztnFFm1SjQQ=w300-rw" 
			},
			{
				"id" : 2,
				"title" : "NumberGuess",
				"shortDesc" : "Truco que adivina un número que piensas entre el 1 el 100",
				"fullDesc" : "NumberGuess es un viejo truco para compartir con tus amigos y adivinar el número que estás pensando.Con unos simples pasos tras pasar por varias pantallas adivinarás el mágico número entre el 1 y el 100 que hayas elegido tu o tu colega.Pasa un buen rato!",
				"urlAndroid" : "https://play.google.com/store/apps/details?id=com.herokuapp.myg.numberguess",
				"urlApple" : "https://itunes.apple.com/us/app/el-adivino-de-numeros/id964915212?l=es&ls=1&mt=8",
				"icon" : "https://lh5.ggpht.com/xIZtfMM0_cGZx5B-GJJX1DbuQNQ6op-izs30GsasXL7L_qXehkJQ3A5ypmhgcghtUAg=w300-rw" 
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