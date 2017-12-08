import {ng_app} from './ng_app';

ng_app.controller("MainCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce',
function($scope, $interval, $timeout, $window, $http, $sce){
  $scope.liuliu = 667;

  $scope.map = {
    slider: 100,
  };

  $scope.map_header = {
    total_m: 5000,
    total_v: 7000,
    platform: 3,
    ship: 5,
  };

  $scope.handle_click_on_map = function(event) {
    console.log(event.offsetX, event.offsetY);
  };

  $scope.prevent_bubble = function(event) {
    console.log(event);
    event.stopPropagation();
  }


}])

angular.bootstrap(document.getElementsByTagName("body")[0], ['fmid']);
