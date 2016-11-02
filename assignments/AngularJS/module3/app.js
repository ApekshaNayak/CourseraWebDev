(function () {
	'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
	.directive('foundItems', FoundItems);

	function FoundItems() {
		var ddo = {
			templateUrl: 'foundList.html',
			scope: {
				items: '<',
				onRemove: '&'
			}
		};
		return ddo;
	};

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var controller = this;
		controller.message = undefined;

		controller.search = function () {
			
			if(!controller.searchDescription) {
				controller.found = new Array();
			}
			else {
				controller.found = MenuSearchService.getMatchedMenuItems(controller.searchDescription.toLowerCase());
			}
		};

		controller.remove = function (itemIndex) {
			controller.found = MenuSearchService.removeItem(itemIndex);
		};

	}

	
	function MenuSearchService($http, ApiBasePath) {
		var service = this;
		var foundList = [];
		var list = [];

		service.getMatchedMenuItems = function (searchDescription){
			var promise = $http({
				method: "GET",
				url: (ApiBasePath + "/menu_items.json")
			})
			.then(function (response) {
				foundList.length = 0;
				list = response.data.menu_items;
				for(var i=0; i< list.length; i++) {
					if(list[i].description.includes(searchDescription)) {
						foundList.push(list[i]);
					}
				}
			});
			return foundList;
		};

		service.removeItem = function (itemIndex) {
			foundList.splice(itemIndex,1);
			return foundList;
		}
	}

})();