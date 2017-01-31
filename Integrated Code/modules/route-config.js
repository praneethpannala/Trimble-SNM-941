(function() {
    'use strict';

    angular
        .module('inTmbleApp')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		  $urlRouterProvider.otherwise('/');

		  $stateProvider
		      .state('main', {
		          url:'/',
		          templateUrl: 'modules/dashboard/dashboard.template.html'

		      })

		      .state('diagnostics', {
		          url:'/diagnostics',
		          templateUrl: 'modules/daignostics/daignostics.html'
		      })


		      .state('network_config', {
		          url:'/network_config',
		          controller:'networkConfigurationCtrl',
		          controllerAs:"networkConfig",
		          templateUrl: 'modules/network-configuration/view/network-configuration.tpl.html'
		      });

		}]);
 })();