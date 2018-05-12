var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
	
	$scope.collageName = [
	
	{"colName":"Collage Name 1", "type":"collage1"},
	{"colName":"Collage Name 2", "type":"collage2"},
	{"colName":"Collage Name 3", "type":"collage3"},
	{"colName":"Collage Name 4", "type":"collage4"},
	{"colName":"Collage Name 5", "type":"collage5"}
	
	];
	
	$scope.collage = [{
		"name":"Collage Name 1 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage1"
		
	}
	,
	{
		"name":"Collage Name 1 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage1"
		
	},
	{
		"name":"Collage Name 1 Item 3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage1"
	},	
	{
		"name":"Collage Name 2 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage2"
		
	},
	{
		"name":"Collage Name 2 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage2"
		
	},
	{
		"name":"Collage Name 3 Item 1",
		"title":"best school",
		"type":"collage3",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage3"
		
	},
	{
		"name":"Collage Name 3 Item 2",
		"title":"best school",
		"type":"collage3",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage3"
		
	},
	{
		"name":"Collage Name 3 Item 3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage3"
		
	},
	{
		"name":"Collage Name 3 Item 4",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage3"
	},
	{
		"name":"Collage Name 4 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage4"
		
	},
	{
		"name":"Collage Name 4 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage4"
		
	},
	{
		"name":"Collage Name 4 Item 3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage4"
		
	},
	{
		"name":"Collage Name 4 Item 4",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage4"
		
	},
	{
		"name":"Collage Name 4 Item 5",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage4"
		
	},
	{
		"name":"Collage Name 4 Item 6",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage4"
	},
	{
		"name":"Collage Name 5 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage5"
	},
	{
		"name":"Collage Name 6 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage6"
		
	},
	{
		"name":"Collage Name 6 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage6"
	},
	{
		"name":"Collage Name 7 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage7"
		
	},
	{
		"name":"Collage Name 7 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage7"
		
	},
	{
		"name":"Collage Name 7 Item 3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage7"
		
	},
	{
		"name":"Collage Name 7 Item 4",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"collage7"
		
	},
	{
		"name":"Collage Name 7 Item 5",
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

	$scope.allitem = $scope.collage.length;

    $scope.collage1item=0;
    $scope.collage2item=0;
    $scope.collage3item=0;
    $scope.collage4item=0;
    $scope.collage5item=0;
    $scope.collage6item=0;
    $scope.collage7item=0;
	
	$scope.myClick = function(value){
		
		let a = $scope.a=value;
		alert(a);
		
	}
	
	for(let i=0; i<$scope.collage.length; i++){
		if($scope.collage[i].type === 'collage1'){
			$scope.collage1item++;
		}else if($scope.collage[i].type === 'collage2'){
			$scope.collage2item++;
		}else if($scope.collage[i].type === 'collage3'){
			$scope.collage3item++;
		}else if($scope.collage[i].type === 'collage4'){
			$scope.collage4item++;
		}else if($scope.collage[i].type === 'collage5'){
			$scope.collage5item++;
		}else if($scope.collage[i].type === 'collage6'){
			$scope.collage6item++;
		}else if($scope.collage[i].type === 'collage7'){
			$scope.collage7item++;
		}

	}

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


