var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){

	$scope.collage = [{
		"name":"Collage Name 1 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage1",
		"id":1
		
	}
	,
	{
		"name":"Collage Name 1 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage1",
		"id":1
		
	},
	{
		"name":"Collage Name 1 Item 3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage1",
		"id":1
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
		"type":"collage3"
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
		"type":"collage6"
		
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
	
	$scope.mylist1 = ['collage1'];
	$scope.mylist2 = ['collage2'];
	$scope.mylist3 = ['collage3'];
	$scope.mylist4 = ['collage4'];
	$scope.mylist5 = ['collage5'];
	$scope.mylist6 = ['collage6'];
	$scope.mylist7 = ['collage7'];
	
		$scope.a = $scope.collage.length;
		console.log($scope.a);
		
}).filter('customArray1', function($filter){
    return function(list, arrayFilter, element){
        if(arrayFilter){
            return $filter("filter")(list, function(listItem){
                return arrayFilter.indexOf(listItem[element]) != -1;
            });
        }
	
    };
}).filter('customArray2', function($filter){
    return function(list, arrayFilter, element){
        if(arrayFilter){
            return $filter("filter")(list, function(listItem){
                return arrayFilter.indexOf(listItem[element]) != -1;
            });
        }
    };
}).filter('customArray3', function($filter){
    return function(list, arrayFilter, element){
        if(arrayFilter){
            return $filter("filter")(list, function(listItem){
                return arrayFilter.indexOf(listItem[element]) != -1;
            });
        }
    };
}).filter('customArray4', function($filter){
    return function(list, arrayFilter, element){
        if(arrayFilter){
            return $filter("filter")(list, function(listItem){
                return arrayFilter.indexOf(listItem[element]) != -1;
            });
        }
    };
}).filter('customArray5', function($filter){
    return function(list, arrayFilter, element){
        if(arrayFilter){
            return $filter("filter")(list, function(listItem){
                return arrayFilter.indexOf(listItem[element]) != -1;
            });
        }
    };
}).filter('customArray6', function($filter){
    return function(list, arrayFilter, element){
        if(arrayFilter){
            return $filter("filter")(list, function(listItem){
                return arrayFilter.indexOf(listItem[element]) != -1;
            });
        }
    };
}).filter('customArray7', function($filter){
    return function(list, arrayFilter, element){
        if(arrayFilter){
            return $filter("filter")(list, function(listItem){
                return arrayFilter.indexOf(listItem[element]) != -1;
            });
        }
    };
});


