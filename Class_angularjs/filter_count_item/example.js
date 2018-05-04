var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
	$scope.MenuItem1 = false;
	$scope.item1 = function(){
		$scope.MenuItem1 = !$scope.MenuItem1;
	}
	$scope.MenuItem2 = false;
	$scope.item2 = function(){
		$scope.MenuItem2 = !$scope.MenuItem2;
	}
	$scope.MenuItem3 = false;
	$scope.item3 = function(){
		$scope.MenuItem3 = !$scope.MenuItem3;
	}
});
