import { ng_app } from './ng_app';
// angular.element('[ng-controller=MainCtrl]').scope()

ng_app.controller("MainCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce',
  function($scope, $interval, $timeout, $window, $http, $sce) {


    //time
    $interval(function() { $scope.nowtime = new Date(); }
    $interval(function() {
        for (let i of [0, 1]) {
          var ar = $scope.data[i];
          ar.shift();
          ar.push(Math.floor(Math.random() * 100) + 1);
        }
        var ar = $scope.data2[0];
        ar.shift();
        ar.push(Math.floor(Math.random() * 100) + 1);
      }, 500)
    //chart----------------------------------------
    const DATA_NUM = 30;
    $scope.labels = Array(DATA_NUM).join(1).split('').map(function() { return ""; });
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      Array(DATA_NUM).join(1).split('').map(function() { return 0; }),
      Array(DATA_NUM).join(1).split('').map(function() { return 0; }),
    ];
    $scope.data2 = [
      Array(DATA_NUM).join(1).split('').map(function() { return 0; }),
    ];
    $scope.onClick = function(points, evt) {
      console.log(points, evt);
    };
    $scope.colors = ['#FF5C00', '#167BAC'];
    $scope.colors2 = ['#10BE1C'];
    $scope.datasetOverride = [{ lineTension: 0, fill: false }, { lineTension: 0, fill: false }, { lineTension: 0, fill: true }];
    $scope.datasetOverride2 = [{ fill: true }];
    $scope.options = {
      scales: {
        yAxes: [{
          ticks: { display: false, suggestedMin: 0 }
        }],
        xAxes: [{
          ticks: { display: false, suggestedMin: 0 }
        }]
      },
      // https://stackoverflow.com/questions/37621020/setting-width-and-height
      responsive: true,
      maintainAspectRatio: false,
      legends: {
        display: false
      }
    };
    //添加、编辑------------------------------------
    // $scope.add=function(){
    //   $scope.svar=false;
    //   $scope.addpage=true;
    //
    // }
    // $scope.edit=function(){
    //   alert('123')
    // }
    //添加物资------------------------------------
    //后台数据展示------------------------------------
    $http.get("http://10.134.94.114:8888/ssh/material/list")
      .then(function(response) {
        console.log(response);
        $scope.materials = response.data;
      });
    $http.get("http://10.134.94.114:8888/ssh/ship/list")
      .then(function(response) {
        console.log(response);
        $scope.ships = response.data;
      });
    $http.get("http://10.134.94.114:8888/ssh/base/list")
      .then(function(response) {
        console.log(response);
        $scope.bases = response.data;
      });
    //搜索-----------------------------
    /*$scope.search=function(theMax){
    var req = {
      method: 'GET',
      url:  'http://10.134.92.116:8888/ssh/ship/get?ship.id='+$scope.theMax,
      //params: {ship.id : $scope.theMax}
    }
    $http(req).then(function(response)
                    {$scope.answers=response.data},
                    function(response)
                    {alert('erro')});
    };*/
    //搜索物资、载具、平台-----------------------------
    $scope.a=true;
    $scope.b=true;
    $scope.c = true;
    $scope.aa=false;
    $scope.bb=false;
    $scope.cc=false;

    $scope.search = function() {
      if($scope.switcha){
        $scope.a=false;
        $scope.aa=true;

      var reqmater={
        method:'GET',
        url:'http://10.134.94.114:8888/ssh/material/match',
        params: { s: $scope.theMax }
      }
      $http(reqmater).then(function(response)
    {$scope.materials=response.data},
     function(){alert('err')});
   }

      if ($scope.switchb){
      $scope.b = false;
      $scope.bb =true;
      var reqship = {
        method: 'GET',
        url: 'http://10.134.94.114:8888/ssh/ship/match',
        params: { s: $scope.theMax }
      }
      $http(reqship).then(function(response)
      { $scope.ships = response.data },
        function() { alert('erro') });
      }


      if ($scope.switchc){
        $scope.c = false;
        $scope.cc =true;
      }
     var reqbase={
       method:'GET',
       url:'http://10.134.94.114:8888/ssh/base/match',
       params: { s: $scope.theMax }
     }
     $http(reqbase).then(function(response)
   {$scope.bases=response.data},
   function(){alert('err')});

    };
    //搜索平台-----------------------------

    //展示详细信息-----------------------------
    $scope.sta = true;
    $scope.asta = false;
    $scope.bsta = false;
    $scope.csta = false;

    $scope.showmaterial=function(materialname,materialdetail,materialid,materialtype,materialvolume,materialweight){
      $scope.sta = false;
      $scope.asta = true;
      $scope.bsta = false;
      $scope.csta = false;

      $scope.id = materialid;
      $scope.name = materialname;
      $scope.type = materialtype;
      $scope.volume = materialvolume;
      $scope.weight = materialweight;
      $scope.detail = materialdetail;
      // var selected_type='material';
      // $scope.addship=function(){
      //      $scope.map.points.push({x:$scope.target.x,y:$scope.target.y,t:selected_type})
    }
    //添加物资-----------------------------
    $scope.sendobj=
    {
      base:[
      ],
      material:[

      ],
      ship:[

      ]
    }

    class Materobj {
        id: number;
        name:string;
        constructor() {
       }
      }
      $scope.selected_materials = [];
      $scope.addmaterials=function()
      {
        // let materobj = new Greeter($scope.id,$scope.name);
        // $scope.selected_materials.push(materobj);\
        var flag=1;
        for(let num of $scope.selected_materials)
        {
          if($scope.id==num.id)
          {
            alert('物资不可重复添加');
            var flag=0;
            break;
          }
        }
        if(flag==1)
        {
          var materobj = new Materobj();
          materobj.name=$scope.name;
          materobj.id=$scope.id;
          $scope.selected_materials.push(materobj);
        }
      };
//将物资和数量存入数组-----------------------------
    class Materobjplus {
        id:number;
        value: number;
        constructor() {
       }
      }

$scope.matervalues=[];
$scope.myFunction2=function(i,obj,ii){
  var materobjplus = new Materobjplus();
  materobjplus.value=ii;
  materobjplus.id=obj.id;
  $scope.matervalues[i]=materobjplus;
  $scope.a=ii;
  console.log($scope.matervalues)

  $scope.sendobj.material.push({materialid:obj.id,num:ii})

}
//展示详细信息-----------------------------
  class Shipobj {
      id: number;
      x:number;
      y:number
      constructor() {
      }
    }
  $scope.shipvalues=[];
    $scope.showship = function(shipid,shipname, shipinfo, shipnation, shipport, shipseazone) {
      $scope.sta = false;
      $scope.asta = false;
      $scope.bsta = true;
      $scope.csta = false;

      $scope.shipid = shipid;
      $scope.shipname = shipname;
      $scope.shipinfo = shipinfo;
      $scope.nation = shipnation;
      $scope.port = shipport;
      $scope.seazone = shipseazone;
      var selected_type='ship';
      $scope.addship=function()
      {
        $scope.map.points.push({x:$scope.target.x,y:$scope.target.y,t:selected_type})

        var shipobj = new Shipobj();
        shipobj.id=$scope.shipid;
        shipobj.x=$scope.target.x;
        shipobj.y=$scope.target.y;
        $scope.shipvalues.push(shipobj);

        $scope.sendobj.ship.push({shipid:$scope.shipid,x:$scope.target.x,y:$scope.target.y})


      }
    }

    class Baseobj {
        id: number;
        x:number;
        y:number
        constructor() {
       }
     }
     $scope.basevalues=[];

    $scope.showbase=function(baseid,storage_place){
      $scope.sta = false;
      $scope.asta = false;
      $scope.bsta = false;
      $scope.csta = true;

      $scope.baseid = baseid;
      $scope.storage_place = storage_place;

      var selected_type='base';
      $scope.addship=function(){
           $scope.map.points.push({x:$scope.target.x,y:$scope.target.y,t:selected_type});

           var baseobj = new Baseobj();
           baseobj.id=$scope.baseid;
           baseobj.x=$scope.target.x;
           baseobj.y=$scope.target.y;
           $scope.basevalues.push(baseobj);

           $scope.sendobj.base.push({id:$scope.baseid,x:$scope.target.x,y:$scope.target.y})

      }

    }

    $scope.showplatform=function(){
      var selected_type='platform';
      $scope.addship=function()
      {
        $scope.map.points.push({x:$scope.target.x,y:$scope.target.y,t:selected_type});


      }
    }
//将基地、载具、物资存入数组-----------------------------
    class Finalobj{
        base: Array;
        ship:Array;
        material:Array;
        constructor() {
       }
      }
      // var finalobj = new Finalobj();
      $scope.fangzhen=function(){
        var finalobj = new Finalobj();
        finalobj.base=$scope.basevalues;
        finalobj.ship=$scope.shipvalues;
        finalobj.material=$scope.matervalues;
        console.log($scope.sendobj);

      //   var reqaa={
      //     method:'GET',
      //     url:'http://10.134.101.121:8888/ssh/schedule/parse',
      //     data: $scope.sendobj,
      //
      //     headers: {
      //          'Accept': '*/*',
      //          'Content-Type': 'application/JSONP; charset=UTF-8'
      //      }
      //           }
      //   $http(reqaa).then(function(response)
      // {console.log(response)},
      //  function(){alert('err')});


      //  $http.post({
      //              url:'http://10.134.101.121:8888/ssh/schedule/parse',
      //              method:"POST",
      //              data: $scope.sendobj,
      //             //  contentType: "application/JSONP; charset=utf-8"
      //             header:"Access-Control-Allow-Origin: *",
      //             header:"Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept"
       //
       //
      //          }).then(function(response)
      //           {alert('suc')},
      //            function(){alert('err')});

      $http.post('http://10.134.94.114:8888/ssh/schedule/parse', $scope.sendobj).then(function(response){console.log(response),$scope.responseid=response.data.replace('\r\n',''),alert('suc'),

      // $http({
      //     method:'GET',
      //     url:'http://10.134.75.163:4567/result_ok',
      //     params: { no: $scope.responseid }
      //   }).then(function(response){alert('sec suc'),console.log(response),$scope.responseans=response.data.feedback},
      //   function(){alert('sec err')});},

        $http({
            method:'GET',
            url:'http://10.134.75.163:4567/result',
            params: { no: $scope.responseid }
          }).then(function(response){console.log(response),$scope.modalBody=$sce.trustAsHtml(response.data)},
          function(){alert('sec err')});},



       function(response){alert('err')});
      }


$scope.mainhtml=true
$scope.tablehtml=false
$scope.chakan=function(){
window.open("http://10.134.75.163:4567/result?no="+$scope.responseid)
}




    //====mc-map====
    $scope.liuliu = 667;

    $scope.map = {
      slider: 100,
      points: [
        { x: 535, y: 325, t: 'platform' },

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
    // ====mc-map-end====
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
    $scope.pieoptions = { responsive: true, maintainAspectRatio: false, };

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
      blue: Math.floor(Math.random() * 255),
      white: Math.floor(Math.random() * 25),
      black: Math.floor(Math.random() * 25),
      yellow: Math.floor(Math.random() * 25),
      pink: Math.floor(Math.random() * 25),

    };
//约束条件---------------------------------------
    $scope.selected_conditions=[1,2,3,4,5,6,7,8,9];
    var b=9
    $scope.addconditions=function(){
      b+=1;
      $scope.selected_conditions.push(b);
    }
// var  ppppp=$scope.matervalue;
  // console.log(ppppp)

    //  $scope.rating1 = 0;
    //  $scope.rating2 = 2;
    //  $scope.rating3 = 4;
    //天气----------------
    //weather-confirm----------------
    //添加、编辑------------------------------------
    // $scope.selectship=function(){
    //   $scope.addship=function(){
    //     var selected_type='ship';
    //     $scope.map.points.push({x:$scope.target.x,y:$scope.target.y,t:selected_type})
    //   }
    //
    // }

    $scope.dws = [
         "阴",
         "晴",
         "雨",
         "雪"
     ];
     $scope.nws = [
          "阴",
          "晴",
          "雨",
          "雪"
      ];
      $scope.dirs=[
        "东风",
        '西风',
        '南风',
        '北风'
      ];

//weather-click
    $scope.Day1=function(){
       document.getElementById("card1").style.background="#69F0AE";
       $scope.weaconfirm=function(){
         $scope.zhuan1='转';
         $scope.dao1='到';
         $scope.ji1='级'；
         $scope.dw1=$scope.dw;
         $scope.nw1=$scope.nw;
         $scope.lowtem1=$scope.lowtemperature;
         $scope.hightem1=$scope.hightemperature;
         $scope.windlevel1=$scope.wind.level

       }

    }
    $scope.Day2=function(){
       document.getElementById("card2").style.background="#69F0AE";
       $scope.weaconfirm=function(){
         $scope.zhuan2='转';
         $scope.dao2='到';
         $scope.ji2='级'；
         $scope.dw2=$scope.dw;
         $scope.nw2=$scope.nw;
         $scope.lowtem2=$scope.lowtemperature;
         $scope.hightem2=$scope.hightemperature;
         $scope.windlevel2=$scope.wind.level

       }

    }
    $scope.Day3=function(){
       document.getElementById("card3").style.background="#69F0AE";
       $scope.weaconfirm=function(){
         $scope.zhuan3='转';
         $scope.dao3='到';
         $scope.ji3='级'；
         $scope.dw3=$scope.dw;
         $scope.nw3=$scope.nw;
         $scope.lowtem3=$scope.lowtemperature;
         $scope.hightem3=$scope.hightemperature;
         $scope.windlevel3=$scope.wind.level

       }

    }
    $scope.Day4=function(){
       document.getElementById("card4").style.background="#69F0AE";
       $scope.weaconfirm=function(){
         $scope.zhuan4='转';
         $scope.dao4='到';
         $scope.ji4='级'；
         $scope.dw4=$scope.dw;
         $scope.nw4=$scope.nw;
         $scope.lowtem4=$scope.lowtemperature;
         $scope.hightem4=$scope.hightemperature;
         $scope.windlevel4=$scope.wind.level

       }

    }
    $scope.Day5=function(){
       document.getElementById("card5").style.background="#69F0AE";
       $scope.weaconfirm=function(){
         $scope.zhuan5='转';
         $scope.dao5='到';
         $scope.ji5='级'；
         $scope.dw5=$scope.dw;
         $scope.nw5=$scope.nw;
         $scope.lowtem5=$scope.lowtemperature;
         $scope.hightem5=$scope.hightemperature;
         $scope.windlevel5=$scope.wind.level
       }
    }
}])

angular.bootstrap(document.getElementsByTagName("body")[0], ['fmid']);
