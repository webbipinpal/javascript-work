var app = angular.module('myApp', ['ngRoute']);
app.controller('mycont', function($scope){
	$scope.nav = ["Home", "About", "Service", "Gallery", "Contact"];
	
});
app.config(function($routeProvider){
	  $routeProvider
  .when("/#", {
    template : "hjkhlkjh;"

  });
});
