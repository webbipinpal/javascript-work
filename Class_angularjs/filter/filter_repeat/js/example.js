angular.module('myapp', [])
  .controller("mycontroller", function($scope) {
    $scope.items = [
      {
        "id": 1,
        "name": "Melodie"
      }, {
        "id": 2,
        "name": "Chastity"
      }, {
        "id": 3,
        "name": "Jescie"
      }, {
        "id": 4,
        "name": "Hamish"
      }, {
        "id": 5,
        "name": "Germaine"
      }, {
        "id": 6,
        "name": "Josephine"
      }, {
        "id": 7,
        "name": "Gail"
      }, {
        "id": 8,
        "name": "Thane"
      }, {
        "id": 9,
        "name": "Adrienne"
      }, {
        "id": 10,
        "name": "Geoffrey"
      }, {
        "id": 11,
        "name": "Yeo"
      }, {
        "id": 12,
        "name": "Merrill"
      }, {
        "id": 13,
        "name": "Hoyt"
      }, {
        "id": 14,
        "name": "Anjolie"
      }, {
        "id": 15,
        "name": "Maxine"
      }, {
        "id": 16,
        "name": "Vance"
      }, {
        "id": 17,
        "name": "Ashely"
      }, {
        "id": 18,
        "name": "Dominic"
      }, {
        "id": 19,
        "name": "Cora"
      }, {
        "id": 20,
        "name": "Bo"
      }
    ];
    $scope.myitems = [1, 2, 3, 4];
	$scope.myitems2 = [5, 6, 7, 8];
	$scope.myitems3 = [9, 10, 11, 12];
  }).filter('customArray', function($filter){
    return function(list, arrayFilter, element){
        if(arrayFilter){
            return $filter("filter")(list, function(listItem){
                return arrayFilter.indexOf(listItem[element]) != -1;
            });
        }
    };
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
});