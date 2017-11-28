import {ng_app} from './ng_app'

ng_app.controller("MainCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce',
function($scope, $interval, $timeout, $window, $http, $sce){
  $scope.liuliu = 666
}])

angular.bootstrap(document.getElementsByTagName("body")[0], ['fmid']);
