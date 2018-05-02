
$(document).ready(function(){
	$('.accordion-content').slideUp();  // close all accordiaons
	$('.accordion-title').click(function(){

		var a =  $(this).attr('class');
		//if (a.indexOf("active") >= 0)alert(a.indexOf("active"));
		if(a === "accordion-title active"){
		
		$(this).removeClass("active");
		$(this).next('.accordion-content').slideUp();
		
		}else{
		
		$('.accordion-title').removeClass('active');
		$('.accordion-content').slideUp();
		
		$(this).addClass('active');
		$(this).next('.accordion-content').slideDown();
		
		}

	});
	
});

/*====== radion input select and display content js start here ==== */
var app = angular.module('myapp', []);
app.controller('Ctrl', function($scope){
	$scope.showList = 'menu1';
	
	$scope.isShown = function(showList){
		return showList === $scope.showList;
	}
});

/*====== radion input select and display content js end here ==== */


