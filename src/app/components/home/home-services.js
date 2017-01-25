(function() {
  angular.module('application').factory('HomeServices', ['$rootScope', '$http', '$q', '$log', HomeServices]);

  function HomeServices($rootScope, $http, $q, $log) {

      // Proxy to bypass Browser CORS protection
      var pictureEndpoint = $rootScope.WebAPI + '/tigerspike';
      var fallbackEndpoint = "app/api/fallback.json";


      return {
          getAllPictures: getAllPictures,
          getFallBackImages: getFallBackImages
      };


      function getAllPictures() {

          var deferred = $q.defer();
          $http({
                  method: "GET",
                  url: pictureEndpoint,
              })
              .then(function(response) {
                  deferred.resolve(response.data);
              })
              .catch(function(response) {
                  $log.error('Error retrieving image data from proxy: ' + status);
                  deferred.reject('Error retrieving current user data');
              });
          return deferred.promise;
      }

      function getFallBackImages() {

         var deferred = $q.defer();
         $http({
                 method: "GET",
                 url: fallbackEndpoint,
             })
             .then(function(response) {
                 deferred.resolve(response.data);
             })
             .catch(function(response) {
                 $log.error('Error retrieving current user data: ' + status);
                 deferred.reject('Error retrieving current user data');
             });
         return deferred.promise;
     }

}
})();
