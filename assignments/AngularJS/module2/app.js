(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var buyCtrl = this;

		buyCtrl.buyList = ShoppingListCheckOffService.displayItems();
		buyCtrl.addToBought = function(itemIndex) {
			ShoppingListCheckOffService.getItem(itemIndex);
		}
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var boughtCtrl = this;

		boughtCtrl.boughtList = 
			ShoppingListCheckOffService.checkBoughtItem();
	
	}

	function ShoppingListCheckOffService() {
		var service = this;

		var buyList = [
		{
			name: "Chocolates",
			quantity: "2 bags"
		},
		{	name: "Soft drinks",
			quantity: "3 Gallon"
		},
		{	name: "Pizza",
			quantity: "5 boxes"
		},
		{	name: "Chips",
			quantity: "7 bags"
		},
		{	name: "salsa",
			quantity: "4 packs"
		}
		];

		var boughtList = [];

		service.displayItems = function() {
			return buyList;
		};

		service.getItem = function(itemIndex) {
			var boughtItem = 
				{
					name: buyList[itemIndex].name,
					quantity: buyList[itemIndex].quantity
				};
			
			boughtList.push(boughtItem);
			
			buyList.splice(itemIndex, 1);
		};

		service.checkBoughtItem = function() {
				return boughtList;
		};

		service.displayMessage = function() {

		};
	}
})();