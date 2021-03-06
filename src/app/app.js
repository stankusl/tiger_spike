(function() {
   'use strict';

    // Single Page Application - just because.
    angular.module('application', ['ui.router', 'angularGrid'])

    .run(['$rootScope', '$state', function($rootScope, $state) {

        // this is available from all across the app
        $rootScope.appName = 'Tiger Spike';
        $rootScope.WebAPI = "https://codedemon.co.uk";

    }])

    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
    }])

})();
