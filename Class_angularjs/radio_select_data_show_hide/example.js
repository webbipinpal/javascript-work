var app = angular.module('myApp',[]);

app.controller('mycontroller', function($scope){
	
	
	
	$scope.choice1 = function(value){	
		$scope.v1=value;
		
		if(value == 1){
			$scope.showList = 'menu1';
			$scope.isShown = function(showList){
				return showList === $scope.showList;
			}
		}else if(value==2){
			$scope.showList1 = 'menu4';
			$scope.isShown = function(showList1){
				return showList1 === $scope.showList1;
			}
		}
		else{
			$scope.showList3 = 'menu7';
			$scope.isShown = function(showList3){
				return showList3 === $scope.showList3;
			}
		}
			
		
		return $scope.accordion = value;
	}
	$scope.showList = 'menu1';
	$scope.isShown = function(showList){
		return showList === $scope.showList;
	}
	
		
});
