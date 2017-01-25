(function() {
    'use strict'
    angular.module('application').controller('HomeController', ['HomeServices', '$scope', HomeController]);

    function HomeController(HomeServices, $scope) {
        // Controller Variables
        self = this;
        self.pictures = [];
        self.loading = true;

        // Angular Grid Directive Options
        $scope.gridWidth = 300;
        $scope.angularGridOptions = {
            gridWidth: 300,
            gutterSize: 10
        }


        HomeServices.getAllPictures().then(
            function(result) {
                // Get Image From proxy
                self.pictures = result;
                self.loading = false;
            },
            function(err) {
              console.log('Error retrieving from endpoint: ', err);

                // Fallback to internal copy of json
                HomeServices.getFallBackImages().then(
                  function(result) {
                    self.loading = false;
                    self.pictures = result;
                  },
                  function(err) {
                      console.log('Failed Local: ', err);
                  });

          });

    };


})();
