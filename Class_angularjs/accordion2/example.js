var app = angular.module('myApp',[]);

app.controller('mycontroller', function($scope){
	
	$scope.choice1 = function(value){	
		$scope.v1=value;
		return $scope.accordion = value;
	}
});