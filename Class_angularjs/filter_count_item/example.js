var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
	
	$scope.collage = [{
		"name":"menu1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	},
	{
		"name":"item1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	},
	{
		"name":"list1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	}];
	$scope.collage2 = [{
		"name":"collage2 menu1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	},
	{
		"name":"collage2 item1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	}];
	$scope.collage3 = [{
		"name":"collage3 menu1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	},
	{
		"name":"collage3 item1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	},
	{
		"name":"collage3 item2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	},
	{
		"name":"collage3 item3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	}];
	
	$scope.collage4 = [{
		"name":"collage4 menu1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	},
	{
		"name":"collage4 item1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	},
	{
		"name":"collage4 item2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	},
	{
		"name":"collage4 item3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	},
	{
		"name":"collage4 item4",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	},
	{
		"name":"collage4 item5",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	}];
	$scope.collage5 = [{
		"name":"collage5 menu1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	}];
	$scope.collage6 = [{
		"name":"collage6 menu1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	},
	{
		"name":"collage6 menu1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	}];
	$scope.collage7 = [{
		"name":"collage7 menu1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	},
	{
		"name":"collage7 menu1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	},
	{
		"name":"collage7 menu1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	},
	{
		"name":"collage7 menu1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	},
	{
		"name":"collage7 menu1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	}];

	
    $scope.a = $scope.collage.length;
	$scope.b = $scope.collage2.length;
	$scope.c = $scope.collage3.length;
	$scope.d = $scope.collage4.length;
	$scope.e = $scope.collage5.length;
	$scope.f = $scope.collage6.length;
	$scope.g = $scope.collage7.length;
	$scope.allcount = $scope.a + $scope.b + $scope.c + $scope.d + $scope.e + $scope.f + $scope.g;	
	
	$scope.isShown = true;
	$scope.myClick = function(){
		$scope.isShown = false;
		
	}
	

	
	/*
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
	*/
});


