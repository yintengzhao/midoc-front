import { ng_app } from './ng_app';
// angular.element('[ng-controller=MainCtrl]').scope()

ng_app.controller("WatchGoodsCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce',
  function($scope, $interval, $timeout, $window, $http, $sce) {


  //   $scope.labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  // $scope.series = ['Series A'];
  //
  // $scope.data = [
  //   [65, 59, 80, 81, 56, 55, 40, 56, 55, 45],
  //   // [28, 48, 40, 19, 86, 27, 90, 86, 27, 90]
  // ];
  $scope.labelsc = ['柴油','钻井水','生活用水','36套管','20套管','7套管','4油管','水泥','土粉','重晶石'];
  $scope.series = ['Series B'];
  // $scope.series = ['Series A', 'Series B'];

  $scope.datac = [
    // [65, 59, 80, 81, 56, 55, 40],
    [0.85,0.8,1,2, 1.5, 0.7,0.9,1,1.4,1.7]
  ];

}
