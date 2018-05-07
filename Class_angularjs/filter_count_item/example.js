var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
	
	$scope.collage = [{
		"name":"collage menu1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	},
	{
		"name":"collage item1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	},
	{
		"name":"collage list1",
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

//checkbox item
	$scope.checkbox = [{
		"name":"Checkbox Title 1",
		"title":"First Checkbox",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	}];
	$scope.checkbox2 = [{
		"name":"Checkbox Title 2",
		"title":"Second Checkbox",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	}];
	$scope.checkbox3 = [{
		"name":"Checkbox Title 3",
		"title":"third Checkbox",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	}];
	$scope.checkbox4 = [{
		"name":"Checkbox Title 4",
		"title":"four Checkbox",
		"adds":"Fkj54524",
		"cont":"564564564"
		
	}];
	$scope.checkbox5 = [
	{
		"name":"Checkbox Title 5",
		"title":"five Checkbox",
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
		
	
	$scope.isShown = true;
	$scope.myClick = function(){
		$scope.isShown = false;
		
	}

//checkbox item
	$scope.check = $scope.checkbox.length;
	$scope.check2 = $scope.checkbox2.length;
	$scope.check3 = $scope.checkbox3.length;
	$scope.check4 = $scope.checkbox4.length;
	$scope.check5 = $scope.checkbox5.length;

	$scope.checkShow = true;
	$scope.checkClick = function(){
		$scope.checkShow = false;
		
	}



// all count
$scope.allcount = $scope.a + $scope.b + $scope.c + $scope.d + $scope.e + $scope.f + $scope.g + $scope.check + $scope.check2 + $scope.check3 + $scope.check4 + $scope.check5;

});


