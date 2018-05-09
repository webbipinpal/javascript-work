var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
	
	$scope.collage = [{
		"name":"Menu Item1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage1"
		
	},
	{
		"name":"Menu Item1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage1"
		
	},
	{
		"name":"Menu Item1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage1"
	},	
	{
		"name":"Menu Item2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage2"
		
	},
	{
		"name":"Menu Item2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage2"
		
	},
	{
		"name":"Menu Item3",
		"title":"best school",
		"type":"collage3",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage3"
		
	},
	{
		"name":"Menu Item3",
		"title":"best school",
		"type":"collage3",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage3"
		
	},
	{
		"name":"Menu Item3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage3"
		
	},
	{
		"name":"Menu Item3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage4"
	},
	{
		"name":"Menu Item4",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage4"
		
	},
	{
		"name":"Menu Item4",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage4"
		
	},
	{
		"name":"Menu Item4",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage4"
		
	},
	{
		"name":"Menu Item4",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage4"
		
	},
	{
		"name":"Menu Item4",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage4"
		
	},
	{
		"name":"Menu Item4",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage4"
	},
	{
		"name":"Menu Item5",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage5"
	},
	{
		"name":"Menu Item6",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage4"
		
	},
	{
		"name":"Menu Item6",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage6"
	},
	{
		"name":"Menu Item7",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage7"
		
	},
	{
		"name":"Menu Item7",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage7"
		
	},
	{
		"name":"Menu Item7",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage7"
		
	},
	{
		"name":"Menu Item7",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage7"
		
	},
	{
		"name":"Menu Item7",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage7"
		
	}];
	

//checkbox item
	/*$scope.checkbox = [{
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
		
	$scope.c1=1;
	$scope.c2=2;
	$scope.c3=3;
	$scope.c4=4;
	$scope.c5=5;
	$scope.c6=6;
	$scope.c7=7;
	$scope.myClick = function(value){
		
		
		switch(value)
		{
			case 1:
					$scope.c1=1;
					$scope.c2=0;
					$scope.c3=0;
					$scope.c4=0;
					$scope.c5=0;
					$scope.c6=0;
					$scope.c7=0;
					break;
			case 2:
					$scope.c1=0;
					$scope.c2=2;
					$scope.c3=0;
					$scope.c4=0;
					$scope.c5=0;
					$scope.c6=0;
					$scope.c7=0;
					break;
			case 3:
					$scope.c1=0;
					$scope.c2=0;
					$scope.c3=3;
					$scope.c4=0;
					$scope.c5=0;
					$scope.c6=0;
					$scope.c7=0;
			case 4:
					$scope.c1=0;
					$scope.c2=0;
					$scope.c3=0;
					$scope.c4=4;
					$scope.c5=0;
					$scope.c6=0;
					$scope.c7=0;
					break;
			case 5:
					$scope.c1=0;
					$scope.c2=0;
					$scope.c3=0;
					$scope.c4=0;
					$scope.c5=5;
					$scope.c6=0;
					$scope.c7=0;
					break;
			case 6:
					$scope.c1=0;
					$scope.c2=0;
					$scope.c3=0;
					$scope.c4=0;
					$scope.c5=0;
					$scope.c6=6;
					$scope.c7=0;
					break;
			case 7:
					$scope.c1=0;
					$scope.c2=0;
					$scope.c3=0;
					$scope.c4=0;
					$scope.c5=0;
					$scope.c6=0;
					$scope.c7=7;
					break;
			case 8:
					$scope.c1=1;
					$scope.c2=2;
					$scope.c3=3;
					$scope.c4=4;
					$scope.c5=5;
					$scope.c6=6;
					$scope.c7=7;
					break;
			default: 
					$scope.c1=1;
					$scope.c2=2;
					$scope.c3=3;
					$scope.c4=4;
					$scope.c5=5;
					$scope.c6=6;
					$scope.c7=7;
		}
		$scope.isShown =value;
		var a = $scope.v1=value;
		
		
	}
*/
//checkbox item
/*	$scope.check = $scope.checkbox.length;
	$scope.check2 = $scope.checkbox2.length;
	$scope.check3 = $scope.checkbox3.length;
	$scope.check4 = $scope.checkbox4.length;
	$scope.check5 = $scope.checkbox5.length;

	$scope.checkShow = true;
	$scope.checkClick = function(){
		$scope.checkShow = false;
		
	}

*/

// all count
/*scope.allcount = $scope.a + $scope.b + $scope.c + $scope.d + $scope.e + $scope.f + $scope.g + $scope.check + $scope.check2 + $scope.check3 + $scope.check4 + $scope.check5;
*/
});


