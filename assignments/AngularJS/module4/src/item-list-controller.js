(function () {
	'use strict';

	angular.module('data')
	.controller('ItemListController', ItemListController);

	ItemListController.$inject = ['item'];
	function ItemListController(item) {
		var itemController = this;
		// List of shopping items
		var sortedList  = {};
		itemController.$onInit = function () { 
			for(var propt in item){
				if(propt === "menu_items") {
					sortedList = item[propt]; 
				}
			}
			itemController.item = sortedList;
		};
	}

})();
