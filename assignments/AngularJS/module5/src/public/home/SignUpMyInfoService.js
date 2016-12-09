(function () {
  'use strict';

  angular.module('public')
  .service('SignUpMyInfoService', SignUpMyInfoService)
  .constant('ApiBasePath', "https://secret-sands-20088.herokuapp.com/menu_items");


  SignUpMyInfoService.$inject = ['$q', '$http', 'ApiBasePath'];
  function SignUpMyInfoService($q, $http, ApiBasePath) {
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
