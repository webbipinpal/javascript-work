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
		"type":"college1",
		"year":"2016"
		
	}
	,
	{
		"name":"college Name 1 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college1",
		"year":"2016"
		
	},
	{
		"name":"college Name 1 Item 3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college1",
		"year":"2016"
	},	
	{
		"name":"college Name 2 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college2",
		"year":"2017"
		
	},
	{
		"name":"college Name 2 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college2",
		"year":"2017"
		
	},
	{
		"name":"college Name 3 Item 1",
		"title":"best school",
		"type":"college3",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college3",
		"year":"2018",
		"year":"2018"
		
	},
	{
		"name":"college Name 3 Item 2",
		"title":"best school",
		"type":"college3",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college3",
		"year":"2018"
		
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
	
	$scope.DisplayCity="";
	
	$scope.getCityCount=function(type){
        var count=0;
        $scope.college.filter(function(x){
            if(x.type==type)
            {
               count++;     
            }
            
        });
        return count;
    }

	$scope.displayProd=function(type){

		if(type=="all")
		{
			 $scope.DisplayCity="";
		}
		else
        {
			$scope.DisplayCity=type;
		}
		
    }

    /*$scope.displayAllProd=function(type){

        $scope.DisplayCity='';
    }*/
	
	


});




