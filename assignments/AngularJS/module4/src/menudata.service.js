(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


  MenuDataService.$inject = ['$q', '$http', 'ApiBasePath'];
  function MenuDataService($q, $http, ApiBasePath) {
    var service = this;
    var list = [] ;

  // Call to the server.
  service.getAllCategories = function () {
    var deferred = $q.defer();
    $http.get(ApiBasePath + "/categories.json")
    .success(function(data) { 
      deferred.resolve(data);
    })
    .error(function(msg, code) {
      deferred.reject(msg);
    });

    return deferred.promise;
  };

  service.getItemsForCategory = function (categoryShortName) {
    var deferred = $q.defer();
    $http.get(ApiBasePath + "/menu_items.json?category="+categoryShortName)
    .success(function(data) { 
      deferred.resolve(data);
    })
    .error(function(msg, code) {
      deferred.reject(msg);
    });
    return deferred.promise;
  };
}

})();
