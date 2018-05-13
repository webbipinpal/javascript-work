
//====== radion input select and display content js start here ==== 
var app = angular.module('myapp', []);
app.controller('Ctrl', function($scope){
	
	$scope.showList = 'menu1';
	$scope.isShown = function(showList){
		return showList === $scope.showList;
	}
	
	$scope.showList_two = 'menu4';
	$scope.isShown = function(showList_two){
		return showList_two === $scope.showList_two;
	}
	
	$scope.showList_three = 'menu7';
	$scope.isShown = function(showList_three){
		return showList_three === $scope.showList_three;
	}
	
	
	
	$scope.toggalTitile = function(v1){
		alert("hello:"+v1);
	}
});

//====== radion input select and display content js end here ==== 


