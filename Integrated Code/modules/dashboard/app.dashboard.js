(function(){
	'use strict';

	
	angular
		.module('inTmbleApp.dashboard')
		.controller('dashboardCtrl',['dashboardService',dashboardController])
		.service('dashboardService',['$http',dashboardService])

	function dashboardService($http){
		this.getCardsData = getCardsData;

		function getCardsData(){
			return $http.get("modules/dashboard/dashboardData.json")
		}		
	}

	function dashboardController(dashboardService){
		var dashboard = {}
		
		dashboard.cardsData = [];

		dashboardService.getCardsData().then(function(response){
			dashboard.cardsData = response.data;
		})

		return dashboard;
	}

})();
