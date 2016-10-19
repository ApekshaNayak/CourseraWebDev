(function () {
	'use strict';

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		
		$scope.message = "";
		/*$scope.customStyle = {};*/

		$scope.check = function () {
			if($scope.LunchMenu) {
				$scope.lunchItems = new Array();
				$scope.lunchItems = $scope.LunchMenu.split(',');
				var size = $scope.lunchItems.length;
				/*$scope.customStyle.style = {"color":"green"};*/
				if(size <= 3) {
					$scope.message = 'Enjoy!';
				}
				else {
					$scope.message = 'Too much!';
				}
			}
			else if(!$scope.LunchMenu) {
				/*$scope.customStyle.style = {"color":"red"};*/
				$scope.message = 'Please enter data first!';
			}
		};
	}
})();