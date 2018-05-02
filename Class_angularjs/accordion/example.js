angular.module('plunker', ['ui.bootstrap']);

function AccordionDemoCtrl($scope) {
$scope.oneAtATime = true;    
$scope.first = {
  open: true
}
  $scope.$watch('first.open', function (isOpen) {    
    if (!isOpen) {    
      console.log('First group was opened');    
    }
  }); 
}
