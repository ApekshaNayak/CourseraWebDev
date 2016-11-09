(function () {
	'use strict';

	angular.module('data')
	.controller('CategoryListController', CategoryListController);

	CategoryListController.$inject = ['items'];
	function CategoryListController(items) {
		var categoryController = this;

		// List of shopping items
		var promiseList = [];
		var sortedList  = [];
		categoryController.$onInit = function () {
			
			var promiseList = items;
			sortedList.length = 0;
			for(var i=0; i< promiseList.length; i++) {
				sortedList.push(promiseList[i]);
			}
			categoryController.items = sortedList;
		};
	}

})();
