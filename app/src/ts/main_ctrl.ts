import { ng_app } from './ng_app';
// angular.element('[ng-controller=MainCtrl]').scope()

ng_app.controller("MainCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce',
  function($scope, $interval, $timeout, $window, $http, $sce) {
    $scope.liuliu = 667;

    $scope.map = {
      slider: 100,
      points: [
        { x: 281, y: 72, t: 'base' },
        { x: 535, y: 325, t: 'platform' },
        { x: 350, y: 30, t: 'base' },
        { x: 447, y: 234, t: 'ship' },
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
      if (!$scope.map.coor_pointer) { return; }
      var x = event.offsetX; var y = event.offsetY;
      $("#mc-current-point").css("left", x - 20);
      $("#mc-current-point").css("top", y - 20);
      $scope.target.x = x;
      $scope.target.y = y;

    };

    $scope.prevent_bubble = function(event) {
      // console.log(event);
      event.stopPropagation();
    }

    $scope.handle_point = function(idx, obj) {
      // console.log(obj, elm);
      $("#mcp-" + idx).css("left", obj.x);
      $("#mcp-" + idx).css("top", obj.y);
      // console.log($("#mcp-"+idx));
    }

    $scope.get_point_icon = function(obj) {
      switch (obj.t) {
        case ('ship'):
          return 'directions_ferry';
        case ('platform'):
          return 'format_size';
        case ('base'):
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
      for (let obj of $scope.map.points) {
        obj.selected = false;
      }
    }

    $scope.toggle_map = function() {
      $scope.map.show = !$scope.map.show;
    }

    //time
    $interval(function() {
      $scope.nowtime = new Date();
    }, 1000)
    //chart----------------------------------------
    var a = 0.2; var b = 0.2; var c = 0.2; var d = 0.2; var e = 0.2; var f = 0.2; var g = 0.2;
    var h = 0.2; var i = 0.2; var j = 0.2; var k = 0.2; var l = 0.2; var m = 0.2; var n = 0.2;
    var o = 0.2; var p = 0.2; var q = 0.2; var r = 0.2; var s = 0.2; var t = 0.2; var w = 0.2;
    var v = 0.2; var u = 0.2; var x = 0.2; var y = 0.2; var z = 0.2;

    var aa = 0.2; var bb = 0.3; var cc = 0.4; var dd = 0.5; var ee = 0.6; var ff = 0.7;
    var gg = 0.8; var hh = 0.9; var ii = 1.0; var jj = 0.1; var kk = 0.2; var ll = 0.3;
    var mm = 0.4; var nn = 0.5; var oo = 0.5; var pp = 0.5; var qq = 0.5; var rr = 0.5;
    var ss = 0.5; var tt = 0.5; var ww = 0.5; var vv = 0.5; var uu = 0.5; var xx = 0.5;
    var yy = 0.5; var zz = 0.5;
    $interval(function() {
      $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];
      $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];
      $scope.data = [
        [100 * a, 100 * b, 100 * c, 100 * d, 100 * e, 100 * f, 100 * g, 100 * h, 100 * i, 100 * j, 100 * k, 100 * l, 100 * m, 100 * n, 100 * o, 100 * p, 100 * q, 100 * r, 100 * s, 100 * t, 100 * w, 100 * v, 100 * u, 100 * x, 100 * y, 100 * z],
        [100 * aa, 100 * bb, 100 * cc, 100 * dd, 100 * ee, 100 * ff, 100 * gg, 100 * hh, 100 * ii, 100 * jj, 100 * kk, 100 * ll, 100 * mm, 100 * nn, 100 * oo, 100 * pp, 100 * qq, 100 * rr, 100 * ss, 100 * tt, 100 * ww, 100 * vv, 100 * uu, 100 * xx, 100 * yy, 100 * zz]
      ];
      $scope.datasetOverride = [
        {
          label: "Bar chart",
          borderWidth: 1,
          type: 'bar'
        },
        {
          label: "Line chart",
          borderWidth: 3,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          type: 'line'
        }
      ];
      a = b; b = c; c = d; d = e; e = f; f = g; g = h; h = i; i = j; j = k; k = l; l = m; m = n; n = o; o = p;
      p = q; q = r; r = s; s = t; t = w; w = v; v = u; u = x; x = y; y = z; z = Math.random();

      aa = bb; bb = cc; cc = dd; dd = ee; ee = ff; ff = gg; gg = hh; hh = ii; ii = jj; jj = kk; kk = ll;
      ll = mm; mm = nn; nn = oo; oo = pp; pp = qq; qq = rr; rr = ss; ss = tt; tt = ww; ww = vv;
      vv = uu; uu = xx; xx = yy; yy = zz; zz = Math.random();

    }, 1);
    //-------------------------这--里--是--第--二--行--的--函--数--------------------------//
    //后台数据展示------------------------------------
    $http.get("http://10.134.78.134:8888/ssh/material/list")
      .then(function(response) {
        console.log(response);
        $scope.materials = response.data;
      });
    $http.get("http://10.134.78.134:8888/ssh/ship/list")
      .then(function(response) {
        console.log(response);
        $scope.boats = response.data;
      });
    $http.get("http://10.134.78.134:8888/ssh/base/list")
      .then(function(response) {
        console.log(response);
        $scope.bases = response.data;
      });
    //搜索-----------------------------
    /*$scope.search=function(theMax){
    var req = {
      method: 'GET',
      url:  'http://10.134.78.134:8888/ssh/ship/get?ship.id='+$scope.theMax,
      //params: {ship.id : $scope.theMax}
    }
    $http(req).then(function(response)
                    {$scope.answers=response.data},
                    function(response)
                    {alert('erro')});
    };*/






    $scope.myvar = true;
    $scope.search = function() {
      $scope.myvar = false;
      var req = {
        method: 'GET',
        url: 'http://10.134.78.134:8888/ssh/ship/match',
        params: { s: $scope.theMax }
      }
      $http(req).then(function(response)
      { $scope.answers = response.data },
        function() { alert('erro') });
    };
    //展示详细信息-----------------------------
    $scope.svar = true;
    $scope.tvar = false;


    $scope.showall = function(answerid, answername, answerinfo, answernation, answerport, answerseazone) {
      $scope.svar = false;
      $scope.tvar = true;

      $scope.id = answerid;
      $scope.name = answername;
      $scope.info = answerinfo;
      $scope.nation = answernation;
      $scope.port = answerport;
      $scope.seazone = answerseazone;
    }


    //柱状图-----------------------------------------
    $scope.labelsc = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];

    $scope.datac = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    //饼图----------------------------------------
    $scope.labelsb = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.datab = [300, 500, 100];

    //鲁棒度-------------------------------------------
    $scope.bass = Math.floor(Math.random() * 100);
    //复选框------------------------------------------
    $scope.items = [1, 2, 3, 4, 5];
    $scope.selected = [1];
    $scope.toggle = function(item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) {
        list.splice(idx, 1);
      }
      else {
        list.push(item);
      }
    };

    $scope.exists = function(item, list) {
      return list.indexOf(item) > -1;
    };

    $scope.isIndeterminate = function() {
      return ($scope.selected.length !== 0 &&
        $scope.selected.length !== $scope.items.length);
    };

    $scope.isChecked = function() {
      return $scope.selected.length === $scope.items.length;
    };

    $scope.toggleAll = function() {
      if ($scope.selected.length === $scope.items.length) {
        $scope.selected = [];
      } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
        $scope.selected = $scope.items.slice(0);
      }
    };
    //滚动条---------------------------------------
    $scope.color = {
      red: Math.floor(Math.random() * 25),
      green: Math.floor(Math.random() * 255),
      blue: Math.floor(Math.random() * 255) ，
      white: Math.floor(Math.random() * 25),
      black: Math.floor(Math.random() * 25),
      yellow: Math.floor(Math.random() * 25),
      pink: Math.floor(Math.random() * 25),

    };

    //  $scope.rating1 = 0;
    //  $scope.rating2 = 2;
    //  $scope.rating3 = 4;
    //风向选择----------------
    $scope.states = ('一级 二级 三级 四级 五级 六级 七级 八级 九级 十级 十一级 十二级 十三级 十四级 跑吧！！').split(' ').map(function(state) {
      return { abbrev: state };
    });
    //风力选择----------------
    $scope.dirs = ('东风 东南风 南风 西南风 西风 西北风 北风 东北风').split(' ').map(function(dir) {
      return { abbre: dir };
    });


}])
angular.bootstrap(document.getElementsByTagName("body")[0], ['fmid']);
