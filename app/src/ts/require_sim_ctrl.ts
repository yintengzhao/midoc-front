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

  $scope.data11=$scope.data12=$scope.data13=$scope.data14=0
  $scope.data21=$scope.data22=$scope.data23=$scope.data24=0;
  $scope.data31=$scope.data32=$scope.data33=$scope.data34=0;


  $scope.confirmFunction=function(){
    $scope.data[0].shift();
    $scope.data[0].push($scope.aa)
    $scope.lownum=$scope.data11+$scope.data12*2+$scope.data13*3+$scope.data14*4;
    $scope.midnum=$scope.data21*2+$scope.data22*4+$scope.data23*6+$scope.data24*8;
    $scope.highnum=$scope.data31*3+$scope.data32*6+$scope.data33*9+$scope.data34*12;
    if($scope.lownum!=0){
      $scope.finalnum=$scope.lownum
    };
    if($scope.midnum!=0){
      $scope.finalnum=$scope.midnum
    };
    if($scope.highnum!=0){
      $scope.finalnum=$scope.highnum
    };
    $scope.num11=$scope.finalnum*47
    $scope.num21=$scope.finalnum*98
    $scope.num31=$scope.finalnum*37
    $scope.num41=$scope.finalnum*14
    $scope.num51=$scope.finalnum*42
    $scope.num61=$scope.finalnum*66
    $scope.num71=$scope.finalnum*86
    $scope.num81=$scope.finalnum*50

    $scope.vol12=$scope.num11*5
    $scope.vol22=$scope.num21*5
    $scope.vol32=$scope.num31*25
    $scope.vol42=$scope.num41*25
    $scope.vol52=$scope.num51*25
    $scope.vol62=$scope.num61*10
    $scope.vol72=$scope.num71*25
    $scope.vol82=$scope.num81*25


  }

  $scope.abc=true;

  $scope.yes=function(){
    $scope.abc=false;
  }

  $scope.modifydata=function(){
    $scope.abc=true;
  }




}
