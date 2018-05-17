var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
	
	$scope.collegeName = [
	
		{"colName":"college Name 1", "type":"college1"},
		{"colName":"college Name 2", "type":"college2"},
		{"colName":"college Name 3", "type":"college3"},
		{"colName":"college Name 4", "type":"college4"},
		{"colName":"college Name 5", "type":"college5"}
	
	];
	$scope.collegeListYear = [
	
		{"yearList":"2016"},
		{"yearList":"2017"},
		{"yearList":"2018"},
		{"yearList":"2019"}
	
	];
	
	$scope.collegechecklist = [
	
		{"colName":"college Checkbox 1", "type":"checkbox1"},
		{"colName":"college Checkbox 2", "type":"checkbox2"},
		{"colName":"college Checkbox 3", "type":"checkbox3"}
	
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
		"type":"college3",
		"year":"2016"
		
	},
	{
		"name":"college Name 3 Item 4",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college3",
		"year":"2017"
	},
	{
		"name":"college Name 4 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college4",
		"year":"2018"
		
	},
	{
		"name":"college Name 4 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college4",
		"year":"2016"
		
	},
	{
		"name":"college Name 4 Item 3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college4",
		"year":"2017"
		
	},
	{
		"name":"college Name 4 Item 4",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college4",
		"year":"2018"
		
	},
	{
		"name":"college Name 4 Item 5",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college4",
		"year":"2018"
		
	},
	{
		"name":"college Name 4 Item 6",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college4",
		"year":"2017"
	},
	{
		"name":"college Name 5 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"college5",
		"year":"2018"
	},
	{
		"name":"college Checkbox 1 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"checkbox1",
		"year":"2016"
	},
	{
		"name":"college Checkbox 1 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"checkbox1",
		"year":"2017"
	},
	{
		"name":"college Checkbox 2 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"checkbox2",
		"year":"2019"
	},
	{
		"name":"college Checkbox 2 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"checkbox2",
		"year":"2019"
	},
	{
		"name":"college Checkbox 2 Item 3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"checkbox2",
		"year":"2019"
	},
	{
		"name":"college Checkbox 2 Item 4",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"checkbox2",
		"year":"2019"
	},
	{
		"name":"college Checkbox 3 Item 1",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"checkbox3",
		"year":"2016"
	},
	{
		"name":"college Checkbox 3 Item 2",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"checkbox3",
		"year":"2016"
	},
	{
		"name":"college Checkbox 3 Item 3",
		"title":"best school",
		"adds":"Fkj54524",
		"cont":"564564564",
		"type":"checkbox3",
		"year":"2016"
	}];
	
	$scope.allitem = $scope.college.length;
	
	$scope.DisplayProList="";
	$scope.ProYearList="";
	
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
			 $scope.DisplayProList="";
		}
		else
        {
			$scope.DisplayProList=type;
		}
		
    }
	
	//display product with year wise
	$scope.displayProYearwise = function(year){
		alert(year);
		$scope.ProYearList=year;
		
    };
	
	$scope.name = function(){
		
		alert('hi');
		
    };
	
	


});




