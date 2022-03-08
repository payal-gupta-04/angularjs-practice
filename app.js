(function() {
	var lunchCheck = angular.module('LunchCheck', []);
	lunchCheck.controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject = ['$scope'];
	
	function LunchCheckController($scope) {
		$scope.items = "";
		$scope.checkMessage = "";
		console.log('In controller');
		
		$scope.checkIfTooMuch = function() {
			console.log('In checkIfTooMuch');
			var validArr = [];
			var emptyItemsCount = 0;

			var itemsArr = $scope.items.split(",");
			var itemsCount = itemsArr.length;
			
			for(var index = 0; index < itemsCount; index++) {
				if(itemsArr[index] == "") {
					emptyItemsCount++;
				} else {
					validArr.push(itemsArr[index]);
				}
			}
			
			if($scope.items == "" || emptyItemsCount == itemsCount) {
				$scope.checkMessage = "Please enter data first";
			} else if(validArr.length > 0 && validArr.length <= 3) {
				$scope.checkMessage = "Enjoy!";
			} else if(validArr.length > 3) {
				$scope.checkMessage = "Too much!";
			}
		}
	}
})();