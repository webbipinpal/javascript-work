
var app = angular.module('myapp', []);
app.controller('Ctrl', function($scope){
	$scope.showList = 'menu1';
	
	$scope.isShown = function(showList){
		return showList === $scope.showList;
	}
});

