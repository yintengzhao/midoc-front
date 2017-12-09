import {ng_app} from './ng_app';
// angular.element('[ng-controller=MainCtrl]').scope()

ng_app.controller("MainCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce',
function($scope, $interval, $timeout, $window, $http, $sce){
  $scope.liuliu = 667;

  $scope.map = {
    slider: 100,
    points: [
      {x: 281, y: 72, t: 'base'},
      {x: 535, y: 325, t: 'platform'},
      {x: 350, y: 30, t: 'base'},
      {x: 447, y: 234, t: 'ship'},
    ],
    coor_pointer: false,
    show: true
  };

  $scope.target = {
    x: 0,
    y: 0
  }

  $scope.map_header = {
    total_m: 5000,
    total_v: 7000,
    platform: 3,
    ship: 5,
  };

  $scope.handle_click_on_map = function(event) {
    // console.log(event, event.offsetX, event.offsetY);
    if(!$scope.map.coor_pointer) { return; }
    var x = event.offsetX; var y = event.offsetY;
    $("#mc-current-point").css("left", x-20);
    $("#mc-current-point").css("top", y-20);
    $scope.target.x = x;
    $scope.target.y = y;

  };

  $scope.prevent_bubble = function(event) {
    // console.log(event);
    event.stopPropagation();
  }

  $scope.handle_point = function(idx, obj) {
    // console.log(obj, elm);
    $("#mcp-"+idx).css("left", obj.x);
    $("#mcp-"+idx).css("top", obj.y);
    // console.log($("#mcp-"+idx));
  }

  $scope.get_point_icon = function(obj) {
    switch(obj.t){
      case('ship'):
      return 'directions_ferry';
      case('platform'):
      return 'format_size';
      case('base'):
      return 'terrain';
    }
  }

  $scope.handle_point_select = function(idx, evt) {
    console.log($scope.map.points[idx])
    $scope.map.points[idx].selected = true;
    evt.stopPropagation();
  }

  $scope.handle_selected_point = function(idx, obj, evt) {
    $scope.map.points[idx].selected = false;
    evt.stopPropagation();
  }

  $scope.handle_coor_pointer = function() {
    $scope.map.coor_pointer = !$scope.map.coor_pointer;
    // console.log($scope.map.coor_pointer);
  }

  $scope.clear_selected = function() {
    for(let obj of $scope.map.points){
      obj.selected = false;
    }
  }

  $scope.toggle_map = function() {
    $scope.map.show = ! $scope.map.show;
  }

}])

angular.bootstrap(document.getElementsByTagName("body")[0], ['fmid']);
