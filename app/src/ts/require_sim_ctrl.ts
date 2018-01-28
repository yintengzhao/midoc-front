import { ng_app } from './ng_app';
// angular.element('[ng-controller=MainCtrl]').scope()

ng_app.controller("RequireSimCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce',
  function($scope, $interval, $timeout, $window, $http, $sce) {

    $scope.labels = ["1", "2", "3", "4", "5", "6", "7","8", "9", "10"];
  $scope.series = ['实际需求量', '预测需求量'];
  $scope.data = [
    [75, 79, 80, 81, 85, 88, 90,80,79,70],
    [70, 75, 78, 83, 80, 80, 92,85,80,73]
  ];


  $scope.confirmFunction=function(){
    $scope.data[0].shift();
    $scope.data[0].push($scope.aa)
  }

  $scope.abc=true;

  $scope.yes=function(){
    $scope.abc=false;
  }

  $scope.modifydata=function(){
    $scope.abc=true;
  }




}
