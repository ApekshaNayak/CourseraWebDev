(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.template.html'
  })

  // category list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'templates/category.template.html',
    controller: 'CategoryListController as categoryController',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
       return MenuDataService.getAllCategories(); 
     }]
   }
 })

  // item list page
  .state('items', {
    url: '/{itemShortName}/{itemIndex}',
    templateUrl: 'templates/item.template.html',
    controller: 'ItemListController as itemController',
    resolve: {
      item: ['$stateParams','MenuDataService',  
      function ($stateParams, MenuDataService, items) {
        return MenuDataService.getAllCategories()
        .then(function(items) {
          $stateParams.itemShortName = items[$stateParams.itemIndex].
          short_name;
          return MenuDataService.getItemsForCategory($stateParams.itemShortName);
        });
      }]
    }
  });
}

})();
