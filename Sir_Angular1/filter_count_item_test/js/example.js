var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
	
	$scope.collegeName = [
	
		{"colName":"college Name 1", "type":"college1", "college1_item": 9},
		{"colName":"college Name 2", "type":"college2", "college1_item": 12},
		{"colName":"college Name 3", "type":"college3", "college1_item": 15},
		{"colName":"college Name 4", "type":"college4", "college1_item": 14},
		{"colName":"college Name 5", "type":"college5", "college1_item": 20}
	
	];


	$scope.college = [{ 
		"name":"college Name 1 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college1"
		
	}
	,
	{
		"name":"college Name 1 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college1"
		
	},
	{
		"name":"college Name 1 Item 3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college1"
	},	
	{
		"name":"college Name 2 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college2"
		
	},
	{
		"name":"college Name 2 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college2"
		
	},
	{
		"name":"college Name 3 Item 1",
		"title":"best school",
		"type":"college3",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college3"
		
	},
	{
		"name":"college Name 3 Item 2",
		"title":"best school",
		"type":"college3",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college3"
		
	},
	{
		"name":"college Name 3 Item 3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college3"
		
	},
	{
		"name":"college Name 3 Item 4",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college3"
	},
	{
		"name":"college Name 4 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college4"
		
	},
	{
		"name":"college Name 4 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college4"
		
	},
	{
		"name":"college Name 4 Item 3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college4"
		
	},
	{
		"name":"college Name 4 Item 4",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college4"
		
	},
	{
		"name":"college Name 4 Item 5",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college4"
		
	},
	{
		"name":"college Name 4 Item 6",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college4"
	},
	{
		"name":"college Name 5 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college5"
	}];
	
	$scope.allitem = $scope.college.length;

	
/*	
	$scope.mylist1 = ['college1'];
	$scope.mylist2 = ['college2'];
	$scope.mylist3 = ['college3'];
	$scope.mylist4 = ['college4'];
	$scope.mylist5 = ['college5'];
*/
	
/*
    $scope.college1item=0;
    $scope.college2item=0;
    $scope.college3item=0;
    $scope.college4item=0;
    $scope.college5item=0;
	
	$scope.myClick = function(value){
		
		let a = $scope.a=value;
		alert(a);
		
	}
	
	for(let i=0; i<$scope.college.length; i++){
		if($scope.college[i].type === 'college1'){
			$scope.college1item++;
		}else if($scope.college[i].type === 'college2'){
			$scope.college2item++;
		}else if($scope.college[i].type === 'college3'){
			$scope.college3item++;
		}else if($scope.college[i].type === 'college4'){
			$scope.college4item++;
		}else if($scope.college[i].type === 'college5'){
			$scope.college5item++;
		}else if($scope.college[i].type === 'college6'){
			$scope.college6item++;
		}else if($scope.college[i].type === 'college7'){
			$scope.college7item++;
		}

	}
*/
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
});


